'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

interface NosotrosItem {
    title: string;
    description: string;
    photo: string;
}

const items: NosotrosItem[] = [
    {
        title: 'Quienes Somos?',
        description:
            'Somos una empresa integral en el ámbito del comercio internacional, ofreciendo servicios de consultoría, despacho de aduanas y transporte aduanero. Contamos con una estructura completa y ágil, personal experimentado, tecnología moderna y profundo conocimiento de las relaciones económicas internacionales. Somos un eslabón esencial en la economía moderna, proporcionando una colaboración indispensable para la industria y el comercio.',
        photo: hero1.src // Ruta relativa a la carpeta "public"
    },
    {
        title: 'Nuestra Estructura',
        description:
            'Ofrecemos una ubicación privilegiada en el corazón de San Carlos de Bariloche para nuestra oficina matriz. Contamos con una amplia red de servicios nacionales e internacionales y colaboramos con embarcadores para garantizar una cobertura completa. Nuestro sistema de información se actualiza constantemente, utilizando sistemas informáticos aduaneros y bases de datos de legislación. Contamos con un equipo de profesionales altamente capacitados en comercio exterior, listos para atender personalmente y ayudar a optimizar costos y ahorrar tiempo.',
        photo: hero2.src
    },
    {
        title: 'Soporte Informático',
        description:
            'Nos esforzamos por brindar servicios de excelencia en comercio internacional, integrados con sistemas informáticos clave. Utilizamos herramientas modernas como el Sistema Informático María, TARIFAR, SINTIA - ALPHA 2000 y WORKOUT. Además, tenemos conectividad permanente a Internet de banda ancha para cumplir eficientemente con los requerimientos actuales.',
        photo: hero3.src
    }
];

const About: React.FC = () => {
    return (
        <section className="min-h-screen py-10 px-5 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Nosotros
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-start justify-start cursor-pointer"
                        >
                            <div className="w-full h-48 relative rounded-md overflow-hidden">
                                <Image
                                    src={item.photo}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="text-left mt-3">
                                <h2 className="text-2xl font-semibold mt-4 mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
