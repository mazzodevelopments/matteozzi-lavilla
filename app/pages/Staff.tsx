'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface StaffMember {
    rol: string;
    nombreCompleto: string;
    foto: string;
}

interface StaffProps {
    content: StaffMember[];
}

export default function Staff({ content }: StaffProps) {
    return (
        <section
            id="staff"
            className="min-h-screen py-16 flex items-center justify-center"
        >
            <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center">
                {/* Contenedor de texto */}
                <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-8 text-center lg:text-left">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white leading-relaxed lg:leading-snug mb-6">
                        Nuestro Equipo
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Conoce a los miembros de nuestro equipo, apasionados y
                        dedicados a ofrecerte el mejor servicio. Cada uno de
                        ellos aporta su experiencia y habilidades para lograr
                        nuestros objetivos y brindar soluciones efectivas.
                    </p>
                </div>

                {/* Contenedor de ítems */}
                <div className="lg:w-2/3 flex flex-wrap justify-center gap-8">
                    {content.map((member, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="relative w-48 h-48 flex flex-col items-center justify-center" // Tamaño reducido
                        >
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 hover:border-blue-500">
                                <Image
                                    src={member.foto}
                                    alt={member.nombreCompleto}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white p-2">
                                        {' '}
                                        {/* Ajustado padding */}
                                        <h2 className="text-sm font-semibold mb-1">
                                            {' '}
                                            {/* Tamaño de texto reducido */}
                                            {member.nombreCompleto}
                                        </h2>
                                        <p className="text-xs">
                                            {' '}
                                            {/* Tamaño de texto reducido */}
                                            {member.rol}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
