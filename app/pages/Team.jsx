"use client";

import { useEffect } from "react";
import SectionContainer from "../components/SectionContainer";

export default function Team() {
  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll(".team");

      elements.forEach((element) => {
        if (viewportWidth < 1024) {
          element.setAttribute("data-scroll-speed", "0");
        }
      });
    };

    updateScrollSpeed();
    window.addEventListener("resize", updateScrollSpeed);

    return () => {
      window.removeEventListener("resize", updateScrollSpeed);
    };
  }, []);

  return (
    <SectionContainer id="team">
      <div className="team flex flex-col items-start justify-start w-full pt-6 lg:pt-0">
        <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
          Team
        </span>
        <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-tight sm:leading-[1]">
          Nuestro Equipo
        </h1>
        <p className="text-sm lg:text-[0.9vw] text-gray-600 mt-4 sm:mt-6">
          Conformado por un staff de profesionales altamente capacitados y
          comprometidos con la innovación y el éxito de cada proyecto.
        </p>
      </div>

      <div className="team flex flex-col items-center justify-center mt-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Featured Member */}
          <div className="h-[400px] max-w-[400px] w-full mx-auto mt-20">
            <div className="relative flex flex-col h-[280px] rounded-2xl p-6 justify-between bg-gradient-to-r from-[#93bec7] to-[#46939f]">
              <img
                src="/member2.png"
                alt="Featured Member"
                className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-xl object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center">
              Emiliano Mario Matteozzi
            </h3>
            <span className="text-sm sm:text-lg text-gray-600 mt-2 uppercase block text-center">
              Director
            </span>
          </div>

          {/* Quote Section */}
          <div className="max-w-[500px] w-full">
            <div className="relative">
              <svg
                className="absolute -top-10 -left-2 w-16 h-16 text-[#93bec7] opacity-30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-lg lg:text-xl italic text-gray-700 mt-6 lg:mt-0 pl-6">
                Nuestra misión es transformar ideas en soluciones innovadoras
                que impulsen el crecimiento y éxito de nuestros clientes. Cada
                proyecto es una oportunidad para demostrar nuestro compromiso
                con la excelencia y la calidad.
              </p>
              <div className="w-16 h-1 bg-[#93bec7] mt-6 ml-6"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
