export default function Home() {
  return (
    <main>
      <section className="bg-[#286ED4]">
        <h1 className="text-white text-center">
          <span className="text-red-500 font-bold m-1">ATENÇÃO</span>Não pedimos
          nenhum depósito de serviço adiantado
          <span className="text-red-500 font-bold m-1">ATENÇÃO</span>
        </h1>
      </section>
      <header
        id="Header"
        className="bg-cover bg-center bg-[url('/assets/bg/1.png')] py-6 h-[500px] flex flex-col justify-evenly"
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <img
            src="/assets/logotipo black.png"
            alt="Logotipo da Altuori Finanças"
            className="w-48"
          />
          <nav className="flex space-x-4 text-xl">
            <ul className="flex space-x-16 text-gray-800">
              <li className="hover:text-blue-700 cursor-pointer">Início</li>
              <li className="hover:text-blue-700 cursor-pointer">Empresa</li>
              <li className="hover:text-blue-700 cursor-pointer">Serviços</li>
              <li className="hover:text-blue-700 cursor-pointer">Contato</li>
            </ul>
          </nav>
          <a
            href=""
            className="bg-blue-600 text-2xl text-center text-white py-2 px-4 rounded-full hover:bg-blue-700"
          >
            Portal do Cliente
          </a>
        </div>
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold text-gray-800">
            PRECISANDO DE UMA FORÇA?
          </h1>
          <p className="mt-4 text-gray-600">
            CONTE COM A ALTUORI FINANÇAS PARA TE AJUDAR
          </p>
          <a
            href=""
            className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700"
          >
            SAIBA MAIS
          </a>
        </div>
      </header>
      <section id="serviços" className="bg-[#EEF0EE] py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 border-l-[40px] border-blue-400 pl-4">
              SERVIÇOS
            </h1>
            <p className="mt-4 text-gray-600">
              Confira os serviços oferecidos pela Altuori Finanças
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col justify-between">
              <div>
                <img
                  src="/assets/icones/1.png"
                  alt="Ícone de emprestimo consignado"
                  className="mx-auto mb-4 h-16 w-16"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  EMPRÉSTIMO CONSIGNADO
                </h1>
                <p className="text-gray-600 mb-4">
                  Contrate um novo empréstimo consignado com as melhores taxa do
                  mercado.
                </p>
              </div>
              <a
                href=""
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full w-32 m-auto hover:bg-blue-700"
              >
                SAIBA MAIS
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col justify-between">
              <div>
                <img
                  src="/assets/icones/2.png"
                  alt="Ícone de redução de empréstimo consignado"
                  className="mx-auto mb-4 h-16 w-16"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  REDUÇÃO DE DESCONTO DE CONSIGNADO
                </h1>
                <p className="text-gray-600 mb-4">
                  Reduza o valor das suas parcelas de empréstimo consignado.
                </p>
              </div>
              <a
                href=""
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full w-32 m-auto hover:bg-blue-700"
              >
                SAIBA MAIS
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col justify-between">
              <div>
                <img
                  src="/assets/icones/3.png"
                  alt="Ícone de repactuação de dívidas"
                  className="mx-auto mb-4 h-16 w-16"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  REPACTUAÇÃO DE DÍVIDAS
                </h1>
                <p className="text-gray-600 mb-4">
                  Renegocie suas dívidas e consiga taxas mais atrativas.
                </p>
              </div>
              <a
                href=""
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full w-32 m-auto hover:bg-blue-700"
              >
                SAIBA MAIS
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col justify-between">
              <div>
                <img
                  src="/assets/icones/4.png"
                  alt="Ícone de portabilidade de dívida"
                  className="mx-auto mb-4 h-16 w-16"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  PORTABILIDADE DE DÍVIDA
                </h1>
                <p className="text-gray-600 mb-4">
                  Traga seu empréstimo para um banco com taxas melhores.
                </p>
              </div>
              <a
                href=""
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full w-32 m-auto hover:bg-blue-700"
              >
                SAIBA MAIS
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col justify-between">
              <div>
                <img
                  src="/assets/icones/5.png"
                  alt="Ícone de juros abusivos"
                  className="mx-auto mb-4 h-16 w-16"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  JUROS ABUSIVOS
                </h1>
                <p className="text-gray-600 mb-4">
                  Revise as taxas de juros cobradas em financiamento e pague
                  menos taxas.
                </p>
              </div>
              <a
                href=""
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full w-32 m-auto hover:bg-blue-700"
              >
                SAIBA MAIS
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col justify-between">
              <div>
                <img
                  src="/assets/icones/6.png"
                  alt="Ícone de empréstimo pessoal"
                  className="mx-auto mb-4 h-16 w-16"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  EMPRÉSTIMO PESSOAL
                </h1>
                <p className="text-gray-600 mb-4">
                  Contrate um novo empréstimo pessoal com as melhores condições
                  do mercado.
                </p>
              </div>
              <a
                href=""
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full w-32 m-auto hover:bg-blue-700"
              >
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="sobre"
        className="bg-[url('/assets/bg/2.png')] bg-cover bg-center h-[500px] w-full flex items-center justify-center"
      >
        <div className="text-white text-center px-6">
          <div className="mb-12 flex justify-end items-center">
            <h1 className="text-4xl font-bold text-end pr-4 border-r-[40px] border-blue-400">
              QUEM SOMOS
            </h1>
          </div>
          <p className="text-2xl leading-relaxed max-w-4xl mx-auto">
            Bem-vindo à Altuori Finanças, um nome sinônimo de confiança,
            inovação e soluções financeiras integradas. Nossa jornada começou
            com a ambição de não ser apenas mais uma empresa de consultoria
            financeira, mas um ecossistema completo de soluções financeiras,
            incluindo serviços de empréstimo sob medida para atender às suas
            necessidades específicas.
          </p>
        </div>
      </section>
      <section
        id="portal"
        className="bg-[url('/assets/bg/3.png')] bg-cover bg-center py-16 w-full"
      >
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col items-start">
            <h1 className="text-4xl font-light text-gray-800 border-l-[40px] border-blue-400 pl-4">
              PORTAL DO CLIENTE
            </h1>
            <p className="mt-4 text-gray-700 w-full md:w-2/3 text-end">
              Com tecnologia de ponta, disponibilizamos para o cliente nosso
              portal do cliente, onde o cliente poderá acompanhar todas as suas
              solicitações e processos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/assets/img/1.png"
                alt="Imagem de um computador com o sistema na tela"
                className="mb-8"
              />
              <img
                src="/assets/img/3.png"
                alt="Imagem de um checklist de vantagens do sistema"
                className="mb-8"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/img/4.png"
                alt="Imagem de um celular com o sistema na tela"
                className="mb-8 hidden sm:block"
              />
              <img
                src="/assets/img/2.png"
                alt="Imagem de um checklist de vantagens do sistema"
                className="mb-8"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="bg-[url('/assets/bg/4.png')] bg-cover bg-left py-16 h-[500px]"
      >
        <div className="container mx-auto px-6">
          <div className="mb-12 flex justify-end items-center">
            <h1 className="text-4xl font-bold text-white">CONTATO</h1>
            <div className="border-l-[40px] border-blue-400 ml-4 h-10"></div>
          </div>
          <p className="mt-4 text-white text-right text-xl">
            Entre em contato a qualquer momento e seja super bem atendido por
            nossos atendentes
          </p>
          <div className="flex justify-end mt-8 space-x-6">
            <a href="">
              <img
                src="/assets/icones/7.png"
                alt="Ícone de uma mensagem simbolizando um e-mail"
                className="h-20 w-20"
              />
            </a>
            <a href="">
              <img
                src="/assets/icones/8.png"
                alt="Ícone de um telefone simbolizando uma ligação"
                className="h-20 w-20"
              />
            </a>
            <a href="">
              <img
                src="/assets/icones/9.png"
                alt="Ícone do WhatsApp simbolizando uma forma de mandar mensagem"
                className="h-20 w-20"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="mapa" className="bg-[#EEF0EE] py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex justify-start items-center">
            <h1 className="text-4xl font-bold text-gray-800 border-l-[40px] border-blue-400 pl-4 h-10">
              ONDE ESTAMOS
            </h1>
          </div>
          <p className="mt-4 text-gray-600">
            Av. Pres. Vargas, 292 - Centro, Duque de Caxias - RJ, 25070-330
          </p>
          <div className="mt-8">
            <a href="">
              <img
                src="/assets/bg/5.png"
                alt="Imagem do mapa de localização da empresa"
                className="w-full h-[400px]"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="social" className="bg-[#EEF0EE] py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex justify-start items-center">
            <h1 className="text-4xl font-bold text-gray-800 border-l-[40px] border-blue-400 pl-4 h-10">
              SIGAM-NOS NAS REDES SOCIAIS
            </h1>
          </div>
          <div className="flex justify-center space-x-16 mt-8">
            <div className="text-center">
              <a href="">
                <img
                  src="/assets/icones/10.png"
                  alt="Ícone do Instagram"
                  className="mx-auto h-12 w-12"
                />
              </a>
              <p className="mt-2 text-gray-800">@altuorifinanças</p>
            </div>
            <div className="text-center">
              <a href="">
                <img
                  src="/assets/icones/11.png"
                  alt="Ícone do Facebook"
                  className="mx-auto h-12 w-12"
                />
              </a>
              <p className="mt-2 text-gray-800">/altuorifinanças</p>
            </div>
            <div className="text-center">
              <a href="">
                <img
                  src="/assets/icones/12.png"
                  alt="Ícone do LinkedIn"
                  className="mx-auto h-12 w-12"
                />
              </a>
              <p className="mt-2 text-gray-800">/altuorifinanças</p>
            </div>
          </div>
        </div>
      </section>
      <footer id="Footer" className="bg-[#4E8AE1] text-white">
        <div className="container mx-auto text-center py-8 px-6">
          <img
            src="/assets/logotipo.png"
            alt="Logotipo do footer"
            className="mx-auto mb-2 w-32"
          />
          <p className="text-lg">Mudando o seu jeito de lidar com o dinheiro</p>
        </div>
        <div className="bg-[#286ED4] py-4 text-center">
          <p>Todos os direitos reservados. | © 2020 ALTUORI FINANÇAS</p>
          <a href="" className="text-white">
            Uma empresa do Grupo Altuori
          </a>
        </div>
      </footer>
    </main>
  );
}
