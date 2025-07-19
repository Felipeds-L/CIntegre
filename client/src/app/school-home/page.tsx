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
];

export default function SchoolHomePage() {
  const schoolName = "Nome da Escola";
  return (
    <>
      <section className="bg-gradient-to-r from-blue-30 to-blue-200 px-8 py-16 text-slate-800">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">
            <span className="block">Boas Vindas,</span>
            <span className="block">{schoolName}</span>
          </h1>
          <p className="mt-2 text-lg">
            Veja os últimos pedidos de ONGs!
          </p>
        </div>
      </section>
      <div className="h-5"></div>
      <div className="container mx-auto px-4 py-12 mt-8 mb-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Todos os Pedidos
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
