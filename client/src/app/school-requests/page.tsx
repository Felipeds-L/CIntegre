import ActivityCard from '@/components/general/ActivityCard';

const sampleActivities = [
  {
    id: 1,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["educacao"],
  },
  {
    id: 2,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["social"],
  },
  {
    id: 3,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["meio-ambiente"],
  },
  {
    id: 4,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["educacao"],
  },
   {
    id: 5,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["educacao"],
  },
  {
    id: 6,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["social"],
  },
  {
    id: 7,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["meio-ambiente"],
  },
  {
    id: 8,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["educacao"],
  },
   {
    id: 9,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["educacao"],
  },
  {
    id: 10,
    title: "Título da Ação",
    ngoName: "Nome da ONG",
    date: "01/01/2001",
    description: "Descrição breve de até duas linhas, é só abrir o modal e ver mais!",
    imageUrl: "/miku.jpg",
    tags: ["social"],
  },
];

export default function SchoolRequestsPage() {
  return (
    <>
          <div className="h-5"></div>
          <div className="container mx-auto px-4 py-12 mt-8 mb-5">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              Pedidos de Ajuda
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sampleActivities.map((activity) => (
                  <ActivityCard key={activity.id} apiData={activity} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-22"></div> 
        </>
      );
    }