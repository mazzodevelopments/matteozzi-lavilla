'use client';
import React from 'react';
import { AnimatedTooltip } from '../components/ui/animated-tooltip';
import Image from 'next/image';

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
            className="flex justify-center items-center w-full max-w-6xl p-4 min-h-screen mx-auto"
        >
            <div className="flex flex-col md:flex-row w-full items-center">
                {/* Texto en la mitad izquierda */}
                <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3">
                        Nuestro Staff
                    </h2>
                    <p className="text-sm sm:text-md md:text-lg text-gray-500 mb-6">
                        {parrafo}
                    </p>
                    <a
                        href="#Nosotros"
                        className="text-blue-500 hover:underline"
                    >
                        Saber más sobre nosotros →
                    </a>
                </div>
                {/* Imágenes en la mitad derecha */}
                <div className="flex flex-col items-center w-full md:w-1/2 p-4">
                    <div className="flex justify-center items-end space-x-4">
                        <Image
                            src={primarios[0].imagen}
                            alt={primarios[0].nombre + ' ' + primarios[0].rol}
                            width={150}
                            height={250}
                            className="h-64 object-cover rounded-3xl shadow-lg"
                        />
                        <div className="relative flex flex-col items-center transform -translate-y-6">
                            <Image
                                src={primarios[1].imagen}
                                alt={
                                    primarios[1].nombre + ' ' + primarios[1].rol
                                }
                                width={150}
                                height={250}
                                className="h-64 object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                        <Image
                            src={primarios[2].imagen}
                            alt={primarios[2].nombre + ' ' + primarios[2].rol}
                            width={150}
                            height={250}
                            className="h-64 object-cover rounded-3xl shadow-lg"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <AnimatedTooltip items={secundarios} />
                    </div>
                </div>
            </div>
        </section>
    );
}
