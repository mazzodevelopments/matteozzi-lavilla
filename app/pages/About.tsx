'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        photo: hero1.src
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

export default function About() {
    const [selectedItem, setSelectedItem] = useState<NosotrosItem | null>(null);

    const openModal = (item: NosotrosItem) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <section id="nosotros" className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto pt-16 pb-16 px-5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12">
                    Nosotros
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-start justify-start cursor-pointer"
                            onClick={() => openModal(item)}
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
                                <p className="text-gray-700 text-sm line-clamp-9">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex items-center justify-center"
                            onClick={closeModal}
                        >
                            <motion.div
                                className="bg-white rounded-lg overflow-hidden"
                                style={{ maxWidth: '600px' }}
                            >
                                <div className="relative w-full h-80">
                                    <Image
                                        src={selectedItem.photo}
                                        alt={selectedItem.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {selectedItem.title}
                                    </h2>
                                    <p className="text-gray-700">
                                        {selectedItem.description}
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
