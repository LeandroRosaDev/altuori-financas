'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  function scrollToTop() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main>
      <section className="bg-[#286ED4]" id="home">
        <h1 className="text-white text-center">
          <span className="text-red-500 font-bold m-1">ATENÇÃO</span>Não pedimos
          nenhum depósito de serviço adiantado
          <span className="text-red-500 font-bold m-1">ATENÇÃO</span>
        </h1>
      </section>
      <header
        id="Header"
        className="bg-cover bg-center bg-[url('/assets/bg/1.png')] py-6 h-[500px] flex flex-col justify-evenly relative"
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <nav className="flex items-center space-x-4 text-xl justify-between w-full">
            <img
              src="/assets/logotipo black.png"
              alt="Logotipo da Altuori Finanças"
              className="w-48"
            />
            <ul
              className={`hidden lg:flex space-x-16 text-gray-800 font-medium ${
                menuOpen ? 'hidden' : 'flex'
              }`}
            >
              <Link href="#home">
                <li className="hover:text-blue-700">Início</li>
              </Link>

              <Link href="#sobre">
                <li className="hover:text-blue-700 ">Empresa</li>
              </Link>

              <Link href="#servicos">
                <li className="hover:text-blue-700 ">Serviços</li>
              </Link>

              <Link href="#contato">
                <li className="hover:text-blue-700 ">Contato</li>
              </Link>
            </ul>
            <a
              href=""
              className={`hidden lg:block bg-blue-600 text-2xl text-center text-white py-2 px-4 rounded-full hover:bg-blue-700 ${
                menuOpen ? 'hidden' : 'block'
              }`}
            >
              Portal do Cliente
            </a>
            {menuOpen ? (
              ''
            ) : (
              <button
                onClick={toggleMenu}
                className="lg:hidden focus:outline-none"
              >
                <div className="relative w-8 h-8 flex flex-col justify-between items-center">
                  <span className="block w-full h-1 bg-blue-600 rounded-md"></span>
                  <span className="block w-full h-1 bg-blue-600 rounded-md"></span>
                  <span className="block w-full h-1 bg-blue-600 rounded-md"></span>
                </div>
              </button>
            )}
          </nav>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity- flex flex-col items-center  text-white">
            <button
              onClick={toggleMenu}
              className="absolute top-10 right-10 focus:outline-none"
            >
              <div className="relative w-8 h-8 flex flex-col justify-between items-center mt-6">
                <span className="absolute block w-full h-1  bg-blue-600 -rotate-45" />
                <span className="absolute block w-full h-1  bg-blue-600 transform rotate-45" />
              </div>
            </button>
            <ul className="space-y-12 text-xl text-center mt-[20%]">
              <li className="hover:text-blue-400 cursor-pointer">
                <Link href="#home" onClick={closeMenu}>
                  Início
                </Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link href="#sobre" onClick={closeMenu}>
                  Empresa
                </Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link href="#servicos" onClick={closeMenu}>
                  Serviços
                </Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link href="#contato" onClick={closeMenu}>
                  Contato
                </Link>
              </li>
            </ul>
            <a
              href=""
              className="mt-12 bg-blue-600 text-2xl text-center text-white py-2 px-4 rounded-full hover:bg-blue-700"
            >
              Portal do Cliente
            </a>
          </div>
        )}
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold text-gray-800">
            PRECISANDO DE UMA FORÇA?
          </h1>
          <p className="mt-4 text-gray-600">
            CONTE COM A ALTUORI FINANÇAS PARA TE AJUDAR
          </p>
          <a
            href="#contato"
            className="mt-6 inline-block font-medium bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700"
          >
            SAIBA MAIS
          </a>
        </div>
      </header>
      <section id="servicos" className="bg-[#EEF0EE] py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 border-l-[40px] border-blue-400 pl-4">
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
                href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre o emprestimo consignado! Eu vim através do site de vocês!!"
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
                href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre a redução das parcelas do emprestimo consignado! Eu vim através do site de vocês!!"
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
                href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre a repactuação de dívidas! Eu vim através do site de vocês!!"
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
                href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre a portabilidade de dívidas! Eu vim através do site de vocês!!"
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
                href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os juros! Eu vim através do site de vocês!!"
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
                href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre o empréstimo pessoal! Eu vim através do site de vocês!!"
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
          <div className="mb-12 flex justify-center md:justify-end items-center">
            <h1 className="text-3xl sm:text-4xl font-bold pr-4 border-r-[40px] border-blue-400">
              QUEM SOMOS
            </h1>
          </div>
          <p className="text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto">
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 border-l-[40px] border-blue-400 pl-4">
              PORTAL DO CLIENTE
            </h1>
            <p className="mt-4 text-lg text-gray-700 w-full md:w-2/3 text-end">
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
                src="/assets/img/2.png"
                alt="Imagem de um checklist de vantagens do sistema"
                className="mb-8 md:order-1"
              />
              <img
                src="/assets/img/4.png"
                alt="Imagem de um celular com o sistema na tela"
                className="mb-8 md:order-0"
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
          <div className="mb-12 flex justify-center md:justify-end items-center">
            <h1 className="text-4xl font-bold text-white">CONTATO</h1>
            <div className="border-l-[40px] border-blue-400 ml-4 h-10"></div>
          </div>
          <p className="mt-4 text-white text-center md:text-right text-xl">
            Entre em contato a qualquer momento e seja super bem atendido por
            nossos atendentes
          </p>
          <div className="flex justify-center md:justify-end mt-8 space-x-6">
            <a href="mailto:marketing@altuori.com">
              <img
                src="/assets/icones/7.png"
                alt="Ícone de uma mensagem simbolizando um e-mail"
                className="h-20 w-20"
              />
            </a>
            <a href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
              <img
                src="/assets/icones/8.png"
                alt="Ícone de um telefone simbolizando uma ligação"
                className="h-20 w-20"
              />
            </a>
            <a href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
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
          <div className="mb-12 flex justify-center md:justify-start items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-l-[40px] border-blue-400 pl-4 h-10">
              ONDE ESTAMOS
            </h1>
          </div>
          <p className="mt-4 font-semibold text-center md:text-start text-gray-600">
            Av. Pres. Vargas, 292 - Centro, Duque de Caxias - RJ, 25070-330
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3732837763105!2d-43.31173092390603!3d-22.788628233660347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997aea6643b655%3A0xe4516119cb567fb5!2sAv.%20Pres.%20Vargas%2C%292%20-%20Centro%2C%20Duque%20de%20Caxias%2C%20RJ%2C%25070-330!5e!3m2!1spt-BR!2sbr!4v1719441922450!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-80 xl:h-96 mt-8"
        ></iframe>
      </section>
      <section id="social" className="bg-[#EEF0EE] py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex justify-center md:justify-start items-center">
            <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 border-l-[40px] border-blue-400 pl-4 sm:h-10 ">
              SIGAM-NOS NAS REDES SOCIAIS
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 mt-8 justify-center md:justify-start">
            <div className="text-center ">
              <a href="https://www.instagram.com/altuori.consultoria/">
                <img
                  src="/assets/icones/10.png"
                  alt="Ícone do Instagram"
                  className="mx-auto h-12 w-12"
                />
              </a>
              <p className="mt-2 text-gray-800">@altuorifinanças</p>
            </div>

            <div className="text-center">
              <a href="https://www.facebook.com/altuori.consultoria">
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
        <div className="flex items-center">
          {isVisible && (
            <button onClick={scrollToTop}>
              <img
                src="/assets/icones/15.png"
                alt=""
                className="w-10 md:w-16 bottom-12 left-5 md:left-10 fixed"
              />
            </button>
          )}
          <a href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
            <img
              src="/assets/icones/13.png"
              alt=""
              className="w-16 md:w-24 bottom-8 right-5 md:right-10 fixed"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
