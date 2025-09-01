import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../utils/bcrypt.utils';
import { LoginDto } from './authDto';
import axios from 'axios';
import { OngService } from '../ong/ongService';
import { UserService } from '../user/userService';

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
      password: loginData.password
    });

    //console.log(response.data);

    if (response.status !== 200) {
      throw new Error('ONG não encontrada');
    } else {
      const user = await prisma.user.findFirst({
        where: { email: loginData.email },
        include: { school: true, ong: true },
      });
      if(!user){
        const apiData = response.data;
        await prisma.$transaction(async (tx) => {
          const ongCreated = await tx.ong.create({
            data:{
              id: 0, // Temporary id, will be ignored by the database auto-increment
              name: apiData.ngo.name,
              description: apiData.ngo.description,
              start_year: apiData.ngo.start_year,
              phone_number: apiData.ngo.contact_phone,
              social_medias: [apiData.ngo.instagram_link, apiData.ngo.site],
            }
          });
          //console.log(ongCreated)
          const userCreated = await tx.user.create({
            data: {
              name: apiData.user.name,
              email: apiData.user.email,
              password: loginData.password,
              ong_id: ongCreated.id,
            }
          });

          return { ongCreated, userCreated };
        }); 
      } 
    }
  }
  
  async login(loginData: LoginDto) {

    await this.verifyOng(loginData);

    const user = await prisma.user.findFirst({
      where: { email: loginData.email },
      include: { school: true, ong: true },
    });
    console.log(user);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const passwordMatch = await comparePassword(
      loginData.password,
      user.password,
    );
    console.log(passwordMatch);
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
