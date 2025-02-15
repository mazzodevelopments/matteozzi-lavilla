import { useEffect } from "react";
import SectionContainer from "../components/SectionContainter";

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

      <div className="team flex flex-col items-center justify-center mt-16 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 w-[90%] lg:w-[80%] text-center mt-16">
          {/* CARD1 */}
          <div className="h-[400px] max-w-[400px] w-full mx-auto">
            <div className="relative flex flex-col h-[280px] rounded-2xl p-6 justify-between bg-gradient-to-r from-[#DEE3CD] to-[#93bec7]">
              <img
                src="/member3.png"
                alt="Member"
                className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-xl object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">César Amílcar Matteozzi</h3>
            <span className="text-sm sm:text-lg text-gray-600 mt-4 sm:mt-6 uppercase">
              Co-Fundador
            </span>
          </div>
          {/* CARD2 */}
          <div className="h-[400px] max-w-[400px] w-full mx-auto">
            <div className="relative flex flex-col h-[280px] rounded-2xl p-6 justify-between bg-[#93bec7]">
              <img
                src="/member2.png"
                alt="Member"
                className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-xl object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">Emiliano Mario Matteozzi</h3>
            <span className="text-sm sm:text-lg text-gray-600 mt-4 sm:mt-6 uppercase">
              Director
            </span>
          </div>
          {/* CARD3 */}
          <div className="h-[400px] max-w-[400px] w-full mx-auto">
            <div className="relative flex flex-col h-[280px] rounded-2xl p-6 justify-between bg-gradient-to-r from-[#93bec7] to-[#46939f]">
              <img
                src="/member4.png"
                alt="Member"
                className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-xl object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">Stella Maris Lavilla</h3>
            <span className="text-sm sm:text-lg text-gray-600 mt-4 sm:mt-6 uppercase">
              Co-Fundador
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
