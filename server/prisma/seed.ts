import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Criar ONGs
  const ongs = await Promise.all([
    prisma.ong.create({
      data: {
        name: 'ONG Verde Futuro',
        description:
          'Promove a conservação ambiental e educação sustentável em comunidades urbanas.',
        start_year: 2010,
        phone_number: '(81) 987654321',
        social_medias: [
          'https://instagram.com/verdefuturo',
          'http://www.verdefuturo.org.br/',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Ong Água Boa',
        description:
          'Somos uma ONG que preza pelo cuidado da água.',
        start_year: 2016,
        phone_number: '81653135168',
        social_medias: [],
      },
    }),
  ]);

  // Criar usuários vinculados às ONGs
  const users = [
    {
      name: 'Sandra',
      email: 'ong2@gmail.com',
      password: '12345678',
      ong_id: ongs[0].id,
    },
    {
      name: 'Pablo',
      email: 'ong3@gmail.com',
      password: '12345678',
      ong_id: ongs[1].id,
    },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

seed()
  .then(() => {
    console.log('🌱 Seed completo!');
  })
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
