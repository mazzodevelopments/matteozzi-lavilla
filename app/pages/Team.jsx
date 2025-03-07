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
    <section
      id="team"
      className="z-50 justify-center items-center py-10 lg:mt-24 mb-4 lg:mb-0"
      data-scroll-section
    >
      <div className="team flex flex-col items-center justify-center lg:px-0 px-6">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center  bg-gradient-to-r from-[#93bec7] to-[#46939f] h-screen lg:h-[500px] rounded-3xl">
          {/* Featured Member */}
          <div className="h-1/2 lg:h-full w-full lg:w-2/5 overflow-hidden">
            <div className="relative flex flex-col w-full h-full rounded-t-3xl lg:rounded-l-2xl overflow-hidden">
              <img
                src="/member2.png"
                alt="Featured Member"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="lg:w-3/5 lg:h-full w-full h-1/2 flex rounded-b-3xl lg:rounded-r-3xl justify-center items-center bg-white border-gray-300 border p-10">
            <div className="relative mt-10">
              <svg
                className="absolute -top-10 -left-2 w-16 h-16 text-[#93bec7] opacity-30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-lg lg:text-xl font-medium text-gray-700 mt-6 lg:mt-0 pl-6">
                Llevamos más de cinco décadas facilitando negocios
                internacionales, brindando tranquilidad y soluciones a medida.
                Nuestra misión es transformar ideas en innovación para impulsar
                el crecimiento y éxito de nuestros clientes con excelencia y
                calidad.
              </p>
              <div className="w-16 h-1 bg-[#93bec7] mt-8 ml-6"></div>

              <div className=" p-2 z-20 w-full">
                <span className="text-sm sm:text-lg text-gray-600 mt-4 uppercase block text-left ml-4">
                  Director
                </span>
                <h3 className="text-xl text-black font-semibold text-left ml-4">
                  Emiliano Mario Matteozzi
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
