import SetLoading from "@/components/setLoading/setLoading";

export default function aboutUse() {
  return (
    <>
      <SetLoading/>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-24">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Termos e Condições de Uso
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Uso da Plataforma
              </h2>
              <p className="text-gray-600 leading-relaxed">
                O CIntegre+ é uma plataforma destinada exclusivamente para ONGs e 
                representantes de escolas públicas da rede municipal da cidade de Recife.
                <br/> Para as ONGs, O acesso à plataforma é realizado através da API do ConectaRecife 
                para validação do login. Já para as escolas, o acesso é feito mediante o cadastro e 
                posteriormente pela autenticação em nosso sistema.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Responsabilidades do Usuário
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A plataforma CIntegre+ foi desenvolvida para facilitar a
                integração entre escolas e ONGs na oferta de atividades
                que contribuem para o bem da comunidade. 
                <br/>Nosso objetivo é proporcionar um ambiente seguro,
                eficiente e colaborativo, onde as instituições possam se conectar
                e compartilhar recursos para o benefício dos alunos.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Coleta e Uso de Dados
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Coletamos nome da ONG, e-mail da ONG ou de algum representante da ONG,
                nome da escola, e-mail da escola, telefone da escola, endereço da escola e
                quantidade de alunos.
                <br/>Essas informações são utilizadas exclusivamente para a identificação e
                autenticação dos usuários na plataforma.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Segurança
              </h2>
              <p className="text-gray-600 leading-relaxed">
                As informações que temos são protegidas conforme as boas práticas de segurança da informação.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Encerramento de Conta
              </h2>
              <p className="text-gray-600 leading-relaxed">
                O usuário pode solicitar a exclusão de sua conta enviando um e-mail para o suporte.
                <br/>O CIntegre+ se reserva o direito de encerrar contas que violem os termos de uso.
              </p>
            </div>

            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Modificações nos Termos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                O CIntegre+ pode atualizar estes Termos e Condições conforme necessário 
                e notificará os usuários sobre quaisquer alterações significativas.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-center">
            Ao utilizar a plataforma CIntegre+, você concorda com estes Termos e Condições de Uso.
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