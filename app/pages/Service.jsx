import React, { useEffect } from "react";
import { GiCommercialAirplane, GiTruck, GiWorld } from "react-icons/gi";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import SectionContainer from "../components/SectionContainer";

export default function Service() {
  const { scroll } = useLocomotiveScroll();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (scroll) {
      scroll.scrollTo("#contact", {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };

  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll(".service");

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

  const services = [
    {
      icon: GiCommercialAirplane,
      title: "Despachante de Aduana",
      description:
        "Ofrecemos servicios especializados en despachos de importación, permisos de embarque, importaciones y exportaciones temporales, gestiones ante organismos oficiales, asesoramiento en el área bancaria, y obtención de regímenes especiales, garantizando un proceso ágil y eficiente.",
    },
    {
      icon: GiTruck,
      title: "Transporte Aduanero",
      description:
        "Ofrecemos servicios de Agente de Transporte Aduanero para los medios de transporte aéreo, terrestre y marítimo, así como multimodal. Gestionamos tránsitos, reembarcos, transbordos, fletes y seguros internacionales. Asimismo, coordinamos embarques para asegurar una logística eficiente y sin contratiempos.",
    },
    {
      icon: GiWorld,
      title: "Asesoría Integral",
      description:
        "Ofrecemos asesoría integral en comercio internacional, abarcando análisis de costos, documentación, clasificación arancelaria, medios de pago y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, brindamos apoyo en regímenes promocionales.",
    },
  ];

  return (
    <SectionContainer id="services">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
          ¿Que ofrecemos?
        </span>
        <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-tight sm:leading-[1]">
          Servicios
        </h1>
        <p className="text-sm lg:text-[0.9vw] text-gray-600 mt-4 sm:mt-4 md:w-[80%] lg:w-[60%]">
          Descubre nuestra amplia gama de servicios diseñados para satisfacer
          tus necesidades de importación y/o exportación y aquellas relacionadas
          con la logística y el transporte internacional. Desde soluciones
          aéreas hasta terrestres, estamos aquí para ayudarte.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 lg:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 w-[100%] lg:w-[100%]">
          {services.map((service, index) => (
            <div
              key={index}
              className="service flex flex-col h-[400px] lg:h-[30vw] border border-gray-300 rounded-2xl py-8 px-6 hover:shadow-lg justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-4">
                  <service.icon
                    className="text-black text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="lg:text-[1.60vw] sm:text-2xl font-bold leading-tight sm:leading-[1]">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-[0.95vw] text-gray-600 flex-grow mt-2">
                  {service.description}
                </p>
              </div>
              <button
                onClick={handleContactClick}
                className="w-full bg-black text-white hover:bg-cyan-500 py-2 rounded-xl mt-4 font-semibold transition duration-400"
              >
                Consultar →
              </button>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
