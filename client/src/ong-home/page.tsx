import Button from '@/components/ui/button';
import ActionCard from '@/components/ong/actioncard';

// dados de exemplo
const sampleActions = [
    { id: 1, title: "Ação de Reflorestamento", ongName: "ONG Verde", date: "10/07/2025", description: "Plantio de 1000 árvores na serra.", imageUrl: "/miku.jpg", tag: "educacao", status: "open" },
    { id: 2, title: "Campanha do Agasalho", ongName: "ONG Aquece", date: "11/07/2025", description: "Arrecadação de roupas de frio.", imageUrl: "/miku.jpg", tag: "social", status: "open" },
    { id: 3, title: "Limpeza da Praia", ongName: "ONG Mar Limpo", date: "01/06/2025", description: "Mutirão de limpeza na praia.", imageUrl: "/miku.jpg", tag: "meio-ambiente", status: "finished" },
    { id: 4, title: "Aula de Reforço", ongName: "ONG Aprender", date: "15/05/2025", description: "Aulas para crianças carentes.", imageUrl: "/miku.jpg", tag: "educacao", status: "finished" },
];

export default function OngHomePage() {
  const ongName = "Nome da ONG";

  return (
    
    <>
      <section className="bg-blue-400 p-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">
            Bem-Vinda, {ongName}!
          </h1>
          <Button className="bg-blue-700 hover:bg-blue-800">
            Criar uma nova ação
          </Button>
        </div>
      </section>

      {/* conteudo da página */}
      <div className="container mx-auto p-8">
        {/* filtros */}
        <div className="mb-6">
          <button className="text-xl font-bold text-blue-600 border-b-2 border-blue-600 pb-1 mr-4">
            Todos os Pedidos
          </button>
          <button className="text-xl font-bold text-gray-500 hover:text-blue-600 transition-colors">
            Pedidos Finalizados
          </button>
        </div>

        {/* grade de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleActions.map((action) => (
            <ActionCard
              key={action.id}
              title={action.title}
              ongName={action.ongName}
              date={action.date}
              description={action.description}
              imageUrl={action.imageUrl}
              tag={action.tag}
            />
          ))}
        </div>
      </div>
    </>
  );
}