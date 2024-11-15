'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const clients = [
  { name: 'Aerolineas', src: '/clientes/aerolineas.png' },
  { name: 'Coto', src: '/clientes/coto.png' },
  { name: 'CNEA', src: '/clientes/cnea.png' },
  { name: 'Lan', src: '/clientes/lan.png' },
  { name: 'Altec', src: '/clientes/altec.png' },
  { name: 'Abc Cargas', src: '/clientes/abccargas.png' },
  { name: 'Cruz del sur', src: '/clientes/cruzdelsur.png' },
  { name: 'Arsat', src: '/clientes/arsat.png' },
  { name: 'Llao Llao', src: '/clientes/llaollao.png' },
  { name: 'Cencosud', src: '/clientes/cencosud.png' },
  { name: 'Flybondi', src: '/clientes/flybondi.png' },
  { name: 'Invap', src: '/clientes/invap.png' },
  { name: 'Jet Smart', src: '/clientes/jetsmart.png' },
  { name: 'Latam', src: '/clientes/latam.png' },
  { name: 'YPF', src: '/clientes/ypf.png' }
];

const Hero = () => {
  const { scroll } = useLocomotiveScroll();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (scroll) {
      scroll.scrollTo('#contact', {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0]
      });
    }
  };

  return (
    <section
      id="hero"
      className="w-screen h-screen sm:py-[10vw] py-[30vw] lg:py-0 relative flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      <div className="w-full h-full absolute top-0 left-0 filter-shadow opacity-80 z-10"></div>
      <div className="w-full h-auto absolute top-0 left-0">
        <Image
          src="/mountains.jpg"
          alt="Hero image"
          width={1920}
          height={1080}
          className="w-full h-screen object-cover"
          sizes="100vw"
          priority
          data-scroll
          data-scroll-speed="-3"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center relative w-[90%] lg:w-[80%] h-auto my-auto z-20 px-4">
        <h1 className="w-full lg:w-[80%] text-[8.5vw] md:text-[5.5vw] leading-[1.1] font-semibold bg-gradient-to-br from-white via-white to-gray-400 text-transparent bg-clip-text">
          Tu socio confiable para un éxito sin fronteras.
        </h1>
        <p className="w-full lg:w-[45%] text-sm lg:text-[1vw] leading-[1.3] text-gray-100 tracking-wider mt-4">
          Más de 50 años simplificando el comercio internacional a través de
          servicios aduaneros, logísticos y asesoría estratégica.
        </p>
        <div className="mt-8 lg:mt-10">
          <a
            href="#contact"
            onClick={handleContactClick}
            className="border border-gray-300 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl lg:text-[1vw] text-sm hover:bg-gray-300 hover:text-black transition duration-300"
          >
            Contactar
          </a>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 z-50">
        <Marquee className="opacity-100 filter-none">
          <div className="flex items-center">
            {clients.map((client, index) => (
              <Image
                key={index}
                className="lg:mr-40 mr-10"
                src={client.src}
                alt={client.name}
                width={90}
                height={90}
                style={{
                  objectFit: 'contain',
                  width: 'clamp(70px, 8vw, 90px)',
                  height: 'auto'
                }}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
