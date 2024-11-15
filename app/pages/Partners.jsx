'use client';

import Image from 'next/image';
import SectionContainer from '../components/SectionContainter';

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

export default function Partners() {
  return (
    <SectionContainer id="clients">
      <div className="flex flex-col items-center text-center">
        <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
          Empresas que confían en nosotros
        </span>
        <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-tight sm:leading-[1]">
          Clientes
        </h1>
        <p className="text-sm lg:text-[0.9vw] text-gray-600 mt-4 sm:mt-4 md:w-[80%] lg:w-[60%]">
          Nuestra lista de clientes refleja la confianza en nuestra capacidad y
          calidad. Trabajamos directamente con equipos clave de cada
          organización y abarcamos distintos niveles de la industria,
          adaptándonos a sus necesidades específicas. Estos representan solo
          algunos de nuestros clientes más destacados.
        </p>

        <div className="w-full sm:w-[85%] grid grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 my-8 sm:my-12 ">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center bg-white border border-gray-300 rounded-xl p-2 sm:p-4 aspect-square"
            >
              <Image
                className="invert opacity-90"
                src={client.src}
                width={500}
                height={500}
                alt={client.name}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
