import React from 'react';

interface Servicio {
    titulo: string;
    descripcion: string;
    icono: JSX.Element;
}

interface ServiciosProps {
    content: Servicio[];
}

export default function Servicios({ content }: ServiciosProps) {
    return (
        <section id="servicios" className="min-h-screen p-8">
            <div className="w-full max-w-6xl mx-auto mb-6 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3 mt-6">
                    Servicios
                </h1>
                <p className="text-sm sm:text-md md:text-lg text-gray-500">
                    Explora los servicios que ofrecemos para vos.
                </p>
            </div>
            <div className="w-full max-w-6xl mx-auto flex flex-col space-y-8 p-6 rounded-3xl bg-gray-100">
                {content.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-start mb-4 p-4"
                    >
                        <div className="bg-blue-600 text-white font-bold rounded-full py-2 px-4 mb-3">
                            {item.icono}
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            {item.titulo}
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-md md:text-lg lg:text-lg">
                            {item.descripcion}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
