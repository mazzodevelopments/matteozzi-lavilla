import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  const items = [
    {
      title: "Estructura",
      description:
        "Ofrecemos una ubicación privilegiada en el corazón de San Carlos de Bariloche para nuestra oficina matriz. Contamos con una amplia red de servicios nacionales e internacionales y colaboramos con embarcadores para garantizar una cobertura completa.",
    },
    {
      title: "Soporte Informático",
      description:
        "Nos esforzamos por brindar servicios de excelencia en comercio internacional, integrados con sistemas informáticos clave. Utilizamos herramientas modernas como el Sistema Informático Malvina, TARIFAR, SINTIA - ALPHA 2000 y LAKAUT. ",
    },
  ];

  useEffect(() => {
    const updateScrollSpeed = () => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll(".about");

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
    <section
      id="about"
      className="bg-white text-black lg:p-4 lg:pt-20 sm:pt-16 pb-8 relative overflow-hidden"
      data-scroll-section
    >
      <div className="lg:w-[80%] w-[90%] mx-auto relative z-10 py-6 sm:py-32">
        {/* LADO IZQUIERDO */}
        <div
          className="about flex flex-col items-start justify-center w-full sm:w-[27.5%] "
          // data-scroll-speed="2"
          // data-scroll
        >
          <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
            ¿Quiénes Somos?
          </span>
          <h1 className="text-3xl sm:text-[7.5vw] font-bold leading-tight sm:leading-[1]">
            Sobre Nosotros
          </h1>
          <p className="text-sm sm:text-[0.9vw] text-gray-600 mt-4 sm:mt-6">
            Somos una empresa integral en el ámbito del comercio internacional,
            ofreciendo servicios de consultoría, despachante de aduanas y agente
            de transporte aduanero. Contamos con una estructura completa y ágil,
            personal experimentado, tecnología moderna y profundo conocimiento
            de las relaciones económicas internacionales.
          </p>
        </div>
        {/* FOTO */}
        <div
          className="about sm:absolute sm:inset-0 sm:-z-10 sm:flex sm:items-center sm:justify-center sm:w-[40%] sm:mx-auto"
          // data-scroll
          // data-scroll-speed="1"
        >
          <div className="w-full aspect-video mt-8 mb-8 sm:hidden">
            <Image
              src="/cargo.jpg"
              alt="Comercio Internacional"
              width={1600}
              height={900}
              className="rounded-xl object-cover"
            />
          </div>
          <Image
            src="/cargo.jpg"
            alt="Comercio Internacional"
            width={500}
            height={500}
            className="rounded-2xl hidden sm:block object-cover"
          />
        </div>
        {/* LADO DERECHO */}
        <div className="w-full sm:w-[27.5%] sm:absolute sm:right-0 sm:top-1/2 sm:transform sm:-translate-y-1/2">
          <div
            className="about space-y-6"
            // data-scroll
            // data-scroll-speed="-0.25"
            // data-scroll-direction="horizontal"
          >
            {items.map((item, index, array) => (
              <div key={index}>
                <div className="flex flex-col text-black py-4 sm:py-6">
                  <h4 className="text-[5vw] sm:text-[1.75vw] font-bold mb-2">
                    {item.title}
                  </h4>
                  <span className="text-[3vw] sm:text-[1vw] text-gray-600">
                    {item.description}
                  </span>
                </div>
                {index !== array.length - 1 && (
                  <hr className="border-t border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
