import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../utils/bcrypt.utils';
import { LoginDto } from './authDto';
import axios from 'axios';
import { OngService } from '../ong/ongService';
import { UserService } from '../user/userService';
import { hashPassword } from '../utils/bcrypt.utils';

const prisma = new PrismaClient();

export class AuthService {
  private ongService: OngService;
  private userService: UserService;

  constructor() {
    this.ongService = new OngService();
    this.userService = new UserService();
  }
  
  async verifyOng(loginData: LoginDto): Promise<void> {
    const response = await axios.post('https://bora-impactar-dev.setd.rdmapps.com.br/api/login', {
      email: loginData.email,
      password: loginData.password,
    });

    if (response.status !== 200) {
      throw new Error('ONG não encontrada');
    }

    const apiData = response.data;

    await prisma.$transaction(async (tx) => {
      const ongCreated = await tx.ong.create({
        data: {
          name: apiData.ngo.name,
          description: apiData.ngo.description,
          start_year: apiData.ngo.start_year,
          phone_number: apiData.ngo.contact_phone,
          social_medias: [apiData.ngo.instagram_link, apiData.ngo.site],
        },
      });

      const hashedPassword = await hashPassword(loginData.password);

      await tx.user.create({
        data: {
          name: apiData.user.name,
          email: apiData.user.email,
          password: hashedPassword,
          ong_id: ongCreated.id,
        },
      });
    });
  }
  
  async login(loginData: LoginDto) {

    let user = await prisma.user.findFirst({
      where: { email: loginData.email },
      include: { school: true, ong: true },
    });

    if (!user) {
      await this.verifyOng(loginData);

      user = await prisma.user.findFirst({
        where: { email: loginData.email },
        include: { school: true, ong: true },
      });
    }

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const passwordMatch = await comparePassword(
      loginData.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new Error('Senha inválida');
    }

    return user;
  }

  async findUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }
}
