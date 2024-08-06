'use client';
import React from 'react';
import { AnimatedTooltip } from '../components/ui/animated-tooltip';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

interface StaffProps {
    content: {
        parrafo: string;
        primarios: {
            imagen: string;
            nombre: string;
            rol: string;
        }[];
        secundarios: {
            id: number;
            name: string;
            designation: string;
            image: string;
        }[];
    };
}

export default function Staff({ content }: StaffProps) {
    const { primarios, secundarios, parrafo } = content;
    return (
        <section
            id="staff"
            className="flex justify-center items-center w-full max-w-6xl py-4 min-h-screen mx-auto"
        >
            <div className="flex flex-col md:flex-row w-full items-center">
                {/* Texto en la mitad izquierda */}
                <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3">
                        Nuestro Equipo
                    </h2>
                    <p className="text-sm sm:text-md md:text-lg text-gray-500 mb-8">
                        {parrafo}
                    </p>
                    <ScrollLink
                        to="nosotros"
                        smooth={true}
                        duration={500}
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Saber más sobre nosotros →
                    </ScrollLink>
                </div>
                {/* Imágenes en la mitad derecha */}
                <div className="flex flex-col items-center w-full md:w-1/2 p-4 pt-16 md:pt-0">
                    <div className="flex justify-center items-end space-x-4">
                        {primarios.map((person, index) => (
                            <div
                                key={index}
                                className={`relative group ${
                                    index === 1
                                        ? 'transform -translate-y-6'
                                        : ''
                                }`}
                            >
                                <Image
                                    src={person.imagen}
                                    alt={`${person.nombre} ${person.rol}`}
                                    width={200}
                                    height={250}
                                    className="h-40 sm:h-64 md:h-64 lg:h-64 object-cover rounded-3xl shadow-lg"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-85 rounded-3xl">
                                    <h3 className="text-sm md:text-base font-bold text-white">
                                        {person.nombre}
                                    </h3>
                                    <p className="text-xs">{person.rol}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex justify-center">
                        <AnimatedTooltip items={secundarios} />
                    </div>
                </div>
            </div>
        </section>
    );
}
