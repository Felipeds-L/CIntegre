import SetLoading from "@/components/setLoading/setLoading";

export default function aboutPrivacy() {
  return (
    <>
      <SetLoading/>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
              Política de Privacidade
            </h1>

            <p className="text-gray-700 leading-relaxed text-center font-semibold">
              Valorizamos a privacidade e segurança dos dados dos nossos usuários. 
              <br/>Este documento explica como coletamos, usamos e protegemos suas informações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Dados Coletados
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Coletamos os seguintes dados dos usuários:
                <br/> <strong>ONGs:</strong> Nome, e-mail da ONG ou de algum representante dela.
                <br/> <strong>Escolas:</strong> Nome, e-mail, telefone, endereço, quantidade de alunos.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Forma de Coleta
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Os dados das ONGs são coletados através da API do ConectaRecife no momento do login
                e os dados das escolas são coletados no momento do cadastro na plataforma.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Finalidade da Coleta
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos esses dados para identificar os usuários na plataforma 
                e permitir o acesso às funcionalidades do sistema.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Compartilhamento de Dados
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Não compartilhamos os dados dos usuários com terceiros.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Segurança e Armazenamento
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Não utilizamos criptografia para armazenar os dados porque não há dados sensíveis no sistema, 
                mas seguimos as melhores práticas de segurança da informação para proteger as informações dos usuários.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Direitos dos Usuários
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Os usuários têm o direito de solicitas a remoçao de suas contas do sistema 
                entrando em contato com o suporte.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-center">
            Esta Política de Privacidade pode ser atualizada conforme necessário, quaisquer alterações serão comunicadas aos usuários.
          </p>

          <p className="text-gray-600 leading-relaxed text-center">
            <strong>Suporte:</strong>
            <br/>Para dúvidas ou solicitações relacionadas à privacidade dos dados, entre em contato com 
            o Product Owner do CIntegre+. 
            <br/> <strong>Nome:</strong> Lucas Torres⠀⠀⠀⠀<strong>E-mail:</strong> lrts@cin.ufpe.br
          </p>
        </div>
      </section>
    </>
  );
}