import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
  // Limpar dados existentes
  await prisma.schoolActivity.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.user.deleteMany();
  await prisma.school.deleteMany();
  await prisma.ong.deleteMany();
  await prisma.address.deleteMany();

  // Criar 15 Endereços (10 para escolas + 5 extras)
  const addresses = await Promise.all([
    // Endereços para Escolas
    prisma.address.create({
      data: {
        street: 'Rua das Flores',
        house_number: '123',
        cep: '50050-000',
        complement: 'Prédio Principal',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Avenida Boa Viagem',
        house_number: '456',
        cep: '51020-000',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Rua do Sol',
        house_number: '789',
        cep: '52030-000',
        complement: 'Bloco A',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Avenida Conde da Boa Vista',
        house_number: '321',
        cep: '50060-001',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Rua da Aurora',
        house_number: '654',
        cep: '50050-210',
        complement: 'Anexo B',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Avenida Agamenon Magalhães',
        house_number: '987',
        cep: '52010-902',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Rua Imperial',
        house_number: '147',
        cep: '53230-030',
        city: 'Olinda',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Avenida Caxangá',
        house_number: '258',
        cep: '50731-000',
        complement: 'Torre Administrativa',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Rua dos Navegantes',
        house_number: '369',
        cep: '51021-010',
        city: 'Recife',
        state: 'PE',
      },
    }),
    prisma.address.create({
      data: {
        street: 'Avenida Norte',
        house_number: '741',
        cep: '52041-080',
        complement: 'Campus Universitário',
        city: 'Recife',
        state: 'PE',
      },
    }),
  ]);

  // Criar 10 Escolas
  const schools = await Promise.all([
    prisma.school.create({
      data: {
        name: 'Escola Estadual Dom Pedro II',
        student_quantity: 1200,
        score: 85,
        phone_number: '(81) 3234-5678',
        address_id: addresses[0].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Colégio Municipal Santos Dumont',
        student_quantity: 800,
        score: 92,
        phone_number: '(81) 3345-6789',
        address_id: addresses[1].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Escola Técnica Joaquim Nabuco',
        student_quantity: 600,
        score: 78,
        phone_number: '(81) 3456-7890',
        address_id: addresses[2].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Centro Educacional Professor Luiz Freire',
        student_quantity: 950,
        score: 88,
        phone_number: '(81) 3567-8901',
        address_id: addresses[3].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Escola Municipal Sylvio Rabello',
        student_quantity: 720,
        score: 81,
        phone_number: '(81) 3678-9012',
        address_id: addresses[4].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Colégio Estadual Paulo Freire',
        student_quantity: 1100,
        score: 90,
        phone_number: '(81) 3789-0123',
        address_id: addresses[5].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Escola Municipal Chico Mendes',
        student_quantity: 650,
        score: 76,
        phone_number: '(81) 3890-1234',
        address_id: addresses[6].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Centro de Ensino Cícero Dias',
        student_quantity: 1050,
        score: 87,
        phone_number: '(81) 3901-2345',
        address_id: addresses[7].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Escola Estadual Oliveira Lima',
        student_quantity: 890,
        score: 83,
        phone_number: '(81) 4012-3456',
        address_id: addresses[8].id,
      },
    }),
    prisma.school.create({
      data: {
        name: 'Colégio Municipal Professor Anísio Teixeira',
        student_quantity: 770,
        score: 89,
        phone_number: '(81) 4123-4567',
        address_id: addresses[9].id,
      },
    }),
  ]);

  // Criar 10 ONGs
  const ongs = await Promise.all([
    prisma.ong.create({
      data: {
        name: 'Instituto Verde Futuro',
        description:
          'Promove a conservação ambiental e educação sustentável em comunidades urbanas.',
        start_year: 2010,
        phone_number: '(81) 987654321',
        social_medias: [
          'https://instagram.com/verdefuturo',
          'http://www.verdefuturo.org.br/',
          'https://facebook.com/verdefuturo',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Fundação Água Boa',
        description:
          'Somos uma ONG que preza pelo cuidado da água e recursos hídricos.',
        start_year: 2016,
        phone_number: '(81) 976543210',
        social_medias: [
          'https://instagram.com/aguaboa',
          'https://twitter.com/fundacaoaguaboa',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Educação Para Todos',
        description:
          'Focamos em levar educação de qualidade para comunidades carentes.',
        start_year: 2012,
        phone_number: '(81) 965432109',
        social_medias: [
          'https://facebook.com/educacaoparatodos',
          'https://instagram.com/educacaoparatodos',
          'http://educacaoparatodos.org.br',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Instituto Saúde Comunitária',
        description:
          'Promove ações de saúde preventiva e cuidados básicos em periferias.',
        start_year: 2008,
        phone_number: '(81) 954321098',
        social_medias: [
          'https://instagram.com/saudecomunitaria',
          'https://linkedin.com/company/instituto-saude-comunitaria',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'TechSocial Pernambuco',
        description:
          'Capacita jovens em tecnologia e promove inclusão digital.',
        start_year: 2018,
        phone_number: '(81) 943210987',
        social_medias: [
          'https://instagram.com/techsocialpe',
          'https://github.com/techsocialpe',
          'https://linkedin.com/company/techsocial-pe',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Cultura Viva Nordeste',
        description:
          'Preserva e promove a cultura nordestina através de atividades artísticas.',
        start_year: 2005,
        phone_number: '(81) 932109876',
        social_medias: [
          'https://instagram.com/culturavivanordeste',
          'https://youtube.com/culturavivanordeste',
          'https://facebook.com/culturavivanordeste',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Rede Direitos Humanos PE',
        description:
          'Defende e promove os direitos humanos fundamentais.',
        start_year: 2003,
        phone_number: '(81) 921098765',
        social_medias: [
          'https://instagram.com/direitoshumanospe',
          'https://twitter.com/dh_pernambuco',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Movimento Cidade Sustentável',
        description:
          'Trabalha por um planejamento urbano mais sustentável e inclusivo.',
        start_year: 2015,
        phone_number: '(81) 910987654',
        social_medias: [
          'https://instagram.com/cidadesustentavel',
          'http://cidadesustentavel.org.br',
          'https://facebook.com/movimentocidadesustentavel',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Fome Zero Pernambuco',
        description:
          'Combate a fome e promove segurança alimentar nas comunidades.',
        start_year: 2011,
        phone_number: '(81) 909876543',
        social_medias: [
          'https://instagram.com/fomezerope',
          'https://facebook.com/fomezeropernambuco',
        ],
      },
    }),
    prisma.ong.create({
      data: {
        name: 'Instituto Cuidar Social',
        description:
          'Oferece serviços sociais integrados para famílias em vulnerabilidade.',
        start_year: 2007,
        phone_number: '(81) 898765432',
        social_medias: [
          'https://instagram.com/cuidarsocial',
          'https://linkedin.com/company/instituto-cuidar-social',
          'http://cuidarsocial.org.br',
        ],
      },
    }),
  ]);

  // Criar Usuários vinculados às ONGs
  const ongUsers = [
    {
      name: 'Sandra Silva',
      email: 'sandra@verdefuturo.org',
      password: '12345678',
      ong_id: ongs[0].id,
    },
    {
      name: 'Pablo Santos',
      email: 'pablo@aguaboa.org',
      password: '12345678',
      ong_id: ongs[1].id,
    },
    {
      name: 'Maria Eduarda',
      email: 'maria@educacaoparatodos.org',
      password: '12345678',
      ong_id: ongs[2].id,
    },
    {
      name: 'Dr. Roberto Lima',
      email: 'roberto@saudecomunitaria.org',
      password: '12345678',
      ong_id: ongs[3].id,
    },
    {
      name: 'Ana Tech',
      email: 'ana@techsocialpe.org',
      password: '12345678',
      ong_id: ongs[4].id,
    },
    {
      name: 'Carlos Cultura',
      email: 'carlos@culturavivanordeste.org',
      password: '12345678',
      ong_id: ongs[5].id,
    },
    {
      name: 'Luiza Direitos',
      email: 'luiza@direitoshumanospe.org',
      password: '12345678',
      ong_id: ongs[6].id,
    },
    {
      name: 'Pedro Urbano',
      email: 'pedro@cidadesustentavel.org',
      password: '12345678',
      ong_id: ongs[7].id,
    },
    {
      name: 'Fernanda Alimenta',
      email: 'fernanda@fomezerope.org',
      password: '12345678',
      ong_id: ongs[8].id,
    },
    {
      name: 'João Cuidar',
      email: 'joao@cuidarsocial.org',
      password: '12345678',
      ong_id: ongs[9].id,
    },
  ];

  // Criar Usuários vinculados às Escolas
  const schoolUsers = [
    {
      name: 'João Coordenador',
      email: 'joao@dompedro.edu.br',
      password: '12345678',
      school_id: schools[0].id,
    },
    {
      name: 'Ana Diretora',
      email: 'ana@santosdumont.edu.br',
      password: '12345678',
      school_id: schools[1].id,
    },
    {
      name: 'Carlos Professor',
      email: 'carlos@nabuco.edu.br',
      password: '12345678',
      school_id: schools[2].id,
    },
    {
      name: 'Marina Gestora',
      email: 'marina@luizfreire.edu.br',
      password: '12345678',
      school_id: schools[3].id,
    },
    {
      name: 'Rafael Coordenador',
      email: 'rafael@sylviorabello.edu.br',
      password: '12345678',
      school_id: schools[4].id,
    },
    {
      name: 'Isabela Diretora',
      email: 'isabela@paulofreire.edu.br',
      password: '12345678',
      school_id: schools[5].id,
    },
    {
      name: 'Lucas Professor',
      email: 'lucas@chicomendes.edu.br',
      password: '12345678',
      school_id: schools[6].id,
    },
    {
      name: 'Beatriz Gestora',
      email: 'beatriz@cicerodias.edu.br',
      password: '12345678',
      school_id: schools[7].id,
    },
    {
      name: 'Diego Coordenador',
      email: 'diego@oliveiralima.edu.br',
      password: '12345678',
      school_id: schools[8].id,
    },
    {
      name: 'Camila Diretora',
      email: 'camila@anisioteixeira.edu.br',
      password: '12345678',
      school_id: schools[9].id,
    },
  ];

  // Hash das senhas e criação dos usuários
  const allUsers = [...ongUsers, ...schoolUsers];
  for (const user of allUsers) {
    const hashedPassword = await bcrypt.hash(
      user.password,
      10,
    );
    await prisma.user.create({
      data: { ...user, password: hashedPassword },
    });
  }

  // Criar 20 Atividades
  const activities = await Promise.all([
    // Atividades de Educação
    prisma.activity.create({
      data: {
        title:
          'Campanha de Arrecadação de Livros Didáticos',
        description:
          'Arrecadação de livros didáticos e literatura para doação às escolas públicas da região metropolitana.',
        area_expertise: ['education', 'culture'],
        tags: [
          'educação',
          'livros',
          'doação',
          'literatura',
          'escola pública',
        ],
        category: 'donation',
        address:
          'Rua da Educação, 100 - Centro, Recife - PE',
        duration: '30 dias',
        start_date: new Date('2024-09-01'),
        end_date: new Date('2024-09-30'),
        volunteer_quantity: 10,
        photos: [
          'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 100,
        ong_id: ongs[2].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Oficina de Programação para Jovens',
        description:
          'Oficinas gratuitas de programação e tecnologia para jovens de 14 a 18 anos.',
        area_expertise: ['tecnology', 'education'],
        tags: [
          'tecnologia',
          'programação',
          'jovens',
          'capacitação',
          'inclusão digital',
        ],
        category: 'volunteer',
        address: 'Centro de Tecnologia - UFPE, Recife - PE',
        duration: '60 dias',
        start_date: new Date('2024-09-15'),
        end_date: new Date('2024-11-15'),
        volunteer_quantity: 15,
        photos: [
          'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 180,
        ong_id: ongs[4].id,
      },
    }),

    // Atividades de Meio Ambiente
    prisma.activity.create({
      data: {
        title: 'Mutirão de Limpeza do Rio Capibaribe',
        description:
          'Atividade voluntária para limpeza e conscientização ambiental do Rio Capibaribe.',
        area_expertise: ['environment', 'social_services'],
        tags: [
          'meio ambiente',
          'limpeza',
          'rio',
          'voluntariado',
          'conscientização',
        ],
        category: 'volunteer',
        address:
          'Margem do Rio Capibaribe - Ponte da Boa Vista, Recife - PE',
        duration: '1 dia',
        start_date: new Date('2024-08-15'),
        end_date: new Date('2024-08-15'),
        volunteer_quantity: 50,
        photos: [
          'https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'in_progress',
        pontuation: 150,
        ong_id: ongs[0].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Projeto Horta Escolar Sustentável',
        description:
          'Implementação de hortas sustentáveis em escolas públicas para educação ambiental.',
        area_expertise: [
          'environment',
          'education',
          'food_security',
        ],
        tags: [
          'horta',
          'sustentabilidade',
          'escola',
          'educação ambiental',
          'alimentação',
        ],
        category: 'volunteer',
        address: 'Escolas Públicas de Recife - PE',
        duration: '90 dias',
        start_date: new Date('2024-08-20'),
        end_date: new Date('2024-11-20'),
        volunteer_quantity: 25,
        photos: [
          'https://images.unsplash.com/photo-1507662228758-08d030c4820b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 200,
        ong_id: ongs[0].id,
      },
    }),

    // Atividades de Saúde
    prisma.activity.create({
      data: {
        title: 'Campanha de Vacinação Comunitária',
        description:
          'Mutirão de vacinação para comunidades de baixa renda.',
        area_expertise: ['health', 'social_services'],
        tags: [
          'saúde',
          'vacinação',
          'comunidade',
          'prevenção',
          'cuidados básicos',
        ],
        category: 'volunteer',
        address: 'Comunidades da Zona Norte - Recife - PE',
        duration: '5 dias',
        start_date: new Date('2024-08-25'),
        end_date: new Date('2024-08-30'),
        volunteer_quantity: 30,
        photos: [
          'https://images.unsplash.com/photo-1578307896780-d257213543a8?q=80&w=1137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'closed',
        pontuation: 160,
        ong_id: ongs[3].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Distribuição de Água Potável',
        description:
          'Distribuição de água potável para comunidades em situação de vulnerabilidade.',
        area_expertise: [
          'health',
          'social_services',
          'food_security',
        ],
        tags: [
          'água',
          'saúde',
          'comunidade',
          'distribuição',
          'saneamento',
        ],
        category: 'donation',
        address: 'Comunidade do Coque - Recife - PE',
        duration: '15 dias',
        start_date: new Date('2024-08-01'),
        end_date: new Date('2024-08-15'),
        volunteer_quantity: 20,
        photos: [
          'https://images.unsplash.com/photo-1624948465027-6f9b51067557?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'closed',
        pontuation: 120,
        ong_id: ongs[1].id,
      },
    }),

    // Atividades de Cultura
    prisma.activity.create({
      data: {
        title: 'Festival de Cultura Popular Nordestina',
        description:
          'Evento cultural para preservação e divulgação da cultura nordestina.',
        area_expertise: ['culture', 'education'],
        tags: [
          'cultura',
          'nordeste',
          'tradição',
          'festival',
          'arte popular',
        ],
        category: 'volunteer',
        address: 'Centro Cultural - Olinda - PE',
        duration: '3 dias',
        start_date: new Date('2024-10-15'),
        end_date: new Date('2024-10-17'),
        volunteer_quantity: 40,
        photos: [
          'https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 140,
        ong_id: ongs[5].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Oficina de Artesanato para Idosos',
        description:
          'Oficinas de artesanato voltadas para a terceira idade.',
        area_expertise: ['culture', 'social_services'],
        tags: [
          'artesanato',
          'idosos',
          'cultura',
          'terceira idade',
          'socialização',
        ],
        category: 'volunteer',
        address: 'Centro Comunitário - Recife - PE',
        duration: '45 dias',
        start_date: new Date('2024-09-10'),
        end_date: new Date('2024-10-25'),
        volunteer_quantity: 12,
        photos: [
          'https://images.unsplash.com/photo-1751725154557-b10ab73f1564?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 110,
        ong_id: ongs[5].id,
      },
    }),

    // Atividades de Direitos Humanos
    prisma.activity.create({
      data: {
        title:
          'Campanha de Conscientização sobre Direitos da Criança',
        description:
          'Atividades educativas sobre os direitos fundamentais das crianças.',
        area_expertise: ['human_rights', 'education'],
        tags: [
          'direitos humanos',
          'criança',
          'educação',
          'conscientização',
          'proteção',
        ],
        category: 'volunteer',
        address:
          'Escolas e Comunidades - Região Metropolitana do Recife',
        duration: '30 dias',
        start_date: new Date('2024-09-20'),
        end_date: new Date('2024-10-20'),
        volunteer_quantity: 18,
        photos: [
          'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 130,
        ong_id: ongs[6].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Apoio Jurídico Gratuito para Famílias',
        description:
          'Prestação de assistência jurídica gratuita para famílias de baixa renda.',
        area_expertise: ['human_rights', 'social_services'],
        tags: [
          'direitos humanos',
          'assistência jurídica',
          'família',
          'baixa renda',
          'justiça',
        ],
        category: 'volunteer',
        address: 'Centro de Direitos Humanos - Recife - PE',
        duration: '60 dias',
        start_date: new Date('2024-08-15'),
        end_date: new Date('2024-10-15'),
        volunteer_quantity: 8,
        photos: [
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'in_progress',
        pontuation: 170,
        ong_id: ongs[6].id,
      },
    }),

    // Atividades de Planejamento Urbano
    prisma.activity.create({
      data: {
        title: 'Revitalização de Praças Públicas',
        description:
          'Projeto de revitalização e melhoria de praças em bairros periféricos.',
        area_expertise: ['urban_planning', 'environment'],
        tags: [
          'planejamento urbano',
          'praças',
          'revitalização',
          'comunidade',
          'espaço público',
        ],
        category: 'volunteer',
        address: 'Praças da Zona Oeste - Recife - PE',
        duration: '120 dias',
        start_date: new Date('2024-09-01'),
        end_date: new Date('2024-12-30'),
        volunteer_quantity: 35,
        photos: [
          'https://images.unsplash.com/photo-1543225827-44bb39171be5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 190,
        ong_id: ongs[7].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Mapeamento Participativo de Comunidades',
        description:
          'Envolvimento da comunidade no mapeamento e planejamento urbano local.',
        area_expertise: [
          'urban_planning',
          'social_services',
        ],
        tags: [
          'mapeamento',
          'participação',
          'comunidade',
          'planejamento',
          'cidadania',
        ],
        category: 'volunteer',
        address: 'Comunidades Periféricas - Recife - PE',
        duration: '75 dias',
        start_date: new Date('2024-10-01'),
        end_date: new Date('2024-12-15'),
        volunteer_quantity: 22,
        photos: [
          'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 155,
        ong_id: ongs[7].id,
      },
    }),

    // Atividades de Segurança Alimentar
    prisma.activity.create({
      data: {
        title: 'Distribuição de Cestas Básicas',
        description:
          'Arrecadação e distribuição de cestas básicas para famílias necessitadas.',
        area_expertise: [
          'food_security',
          'social_services',
        ],
        tags: [
          'cesta básica',
          'alimentação',
          'fome',
          'solidariedade',
          'distribuição',
        ],
        category: 'donation',
        address: 'Comunidades Carentes - Grande Recife',
        duration: '20 dias',
        start_date: new Date('2024-08-10'),
        end_date: new Date('2024-08-30'),
        volunteer_quantity: 45,
        photos: [
          'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'closed',
        pontuation: 175,
        ong_id: ongs[8].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Cozinha Comunitária Solidária',
        description:
          'Preparo e distribuição de refeições gratuitas para pessoas em situação de rua.',
        area_expertise: [
          'food_security',
          'social_services',
        ],
        tags: [
          'cozinha comunitária',
          'refeições',
          'solidariedade',
          'situação de rua',
          'alimentação',
        ],
        category: 'volunteer',
        address: 'Centro do Recife - PE',
        duration: '30 dias',
        start_date: new Date('2024-09-05'),
        end_date: new Date('2024-10-05'),
        volunteer_quantity: 28,
        photos: [
          'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'in_progress',
        pontuation: 165,
        ong_id: ongs[8].id,
      },
    }),

    // Atividades de Serviços Sociais
    prisma.activity.create({
      data: {
        title: 'Apoio a Famílias em Vulnerabilidade Social',
        description:
          'Programa integrado de apoio psicossocial e material a famílias vulneráveis.',
        area_expertise: ['social_services', 'human_rights'],
        tags: [
          'vulnerabilidade social',
          'apoio familiar',
          'assistência social',
          'psicossocial',
        ],
        category: 'volunteer',
        address:
          'Centro de Assistência Social - Recife - PE',
        duration: '90 dias',
        start_date: new Date('2024-08-20'),
        end_date: new Date('2024-11-20'),
        volunteer_quantity: 20,
        photos: [
          'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'in_progress',
        pontuation: 185,
        ong_id: ongs[9].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Programa de Capacitação Profissional',
        description:
          'Cursos de capacitação profissional para jovens e adultos em situação de desemprego.',
        area_expertise: ['education', 'social_services'],
        tags: [
          'capacitação',
          'emprego',
          'profissional',
          'qualificação',
          'mercado de trabalho',
        ],
        category: 'volunteer',
        address:
          'Centro de Capacitação - Jaboatão dos Guararapes - PE',
        duration: '120 dias',
        start_date: new Date('2024-09-15'),
        end_date: new Date('2025-01-15'),
        volunteer_quantity: 16,
        photos: [
          'https://images.unsplash.com/photo-1562549412-3762499674d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 200,
        ong_id: ongs[9].id,
      },
    }),

    // Atividades Mistas
    prisma.activity.create({
      data: {
        title: 'Feira de Saúde e Bem-Estar Comunitário',
        description:
          'Feira com serviços gratuitos de saúde, orientações nutricionais e atividades físicas.',
        area_expertise: [
          'health',
          'social_services',
          'food_security',
        ],
        tags: [
          'feira de saúde',
          'bem-estar',
          'comunidade',
          'prevenção',
          'qualidade de vida',
        ],
        category: 'volunteer',
        address: 'Praça da Comunidade - Camaragibe - PE',
        duration: '2 dias',
        start_date: new Date('2024-10-12'),
        end_date: new Date('2024-10-13'),
        volunteer_quantity: 50,
        photos: [
          'https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 145,
        ong_id: ongs[3].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Mutirão de Digitalização de Documentos',
        description:
          'Auxílio na digitalização e organização de documentos para famílias de baixa renda.',
        area_expertise: ['tecnology', 'social_services'],
        tags: [
          'digitalização',
          'documentos',
          'tecnologia',
          'inclusão digital',
          'organização',
        ],
        category: 'volunteer',
        address: 'Telecentros Comunitários - Recife - PE',
        duration: '25 dias',
        start_date: new Date('2024-09-25'),
        end_date: new Date('2024-10-20'),
        volunteer_quantity: 12,
        photos: [
          'https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 125,
        ong_id: ongs[4].id,
      },
    }),
    prisma.activity.create({
      data: {
        title:
          'Campanha de Preservação do Patrimônio Histórico',
        description:
          'Ações de conscientização e preservação do patrimônio histórico de Olinda.',
        area_expertise: ['culture', 'urban_planning'],
        tags: [
          'patrimônio histórico',
          'preservação',
          'cultura',
          'Olinda',
          'conscientização',
        ],
        category: 'volunteer',
        address: 'Centro Histórico de Olinda - PE',
        duration: '60 dias',
        start_date: new Date('2024-10-01'),
        end_date: new Date('2024-12-01'),
        volunteer_quantity: 30,
        photos: [
          'https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'open',
        pontuation: 160,
        ong_id: ongs[5].id,
      },
    }),
    prisma.activity.create({
      data: {
        title: 'Programa de Mentoria Jovem',
        description:
          'Mentoria de jovens universitários para estudantes do ensino médio.',
        area_expertise: ['education', 'social_services'],
        tags: [
          'mentoria',
          'jovens',
          'educação',
          'universitários',
          'ensino médio',
        ],
        category: 'volunteer',
        address: 'Universidades e Escolas - Recife - PE',
        duration: '180 dias',
        start_date: new Date('2024-08-01'),
        end_date: new Date('2025-02-01'),
        volunteer_quantity: 25,
        photos: [
          'https://images.unsplash.com/photo-1543193356-13eacb373b1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        status: 'in_progress',
        pontuation: 190,
        ong_id: ongs[2].id,
      },
    }),
  ]);

  // Criar SchoolActivities (relacionamentos entre escolas e atividades)
  const schoolActivities = [];

  // Cada escola participa de 3-4 atividades aleatórias
  for (let i = 0; i < schools.length; i++) {
    const numActivities = Math.floor(Math.random() * 2) + 3; // 3 ou 4 atividades
    const activityIndices: number[] = [];

    // Selecionar atividades aleatórias sem repetição
    while (activityIndices.length < numActivities) {
      const randomIndex = Math.floor(
        Math.random() * activities.length,
      );
      if (!activityIndices.includes(randomIndex)) {
        activityIndices.push(randomIndex);
      }
    }

    for (const activityIndex of activityIndices) {
      const statuses = ['open', 'in_progress', 'closed'];
      const randomStatus =
        statuses[
          Math.floor(Math.random() * statuses.length)
        ];
      const pontuation =
        Math.floor(Math.random() * 100) + 50; // 50-150 pontos

      schoolActivities.push({
        status: randomStatus as any,
        pontuation,
        activity_id: activities[activityIndex].id,
        school_id: schools[i].id,
      });
    }
  }

  await Promise.all(
    schoolActivities.map((schoolActivity) =>
      prisma.schoolActivity.create({
        data: schoolActivity,
      }),
    ),
  );

  console.log('🌱 Seed completed successfully!');
  console.log(`✅ Created ${addresses.length} addresses`);
  console.log(`✅ Created ${schools.length} schools`);
  console.log(`✅ Created ${ongs.length} ONGs`);
  console.log(`✅ Created ${allUsers.length} users`);
  console.log(`✅ Created ${activities.length} activities`);
  console.log(
    `✅ Created ${schoolActivities.length} school activities relationships`,
  );
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
