'use client';
import React, { useState, useEffect } from 'react';
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
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <section id="nosotros" className="min-h-screen bg-gray-100">
            <div className="max-w-6xl mx-auto pt-16 pb-16 px-6 text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-relaxed lg:leading-snug mb-8 mx-auto">
                    Nosotros
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg flex flex-col"
                            onClick={() => openModal(item)}
                        >
                            <div className="w-full h-56 relative rounded-t-2xl overflow-hidden">
                                <Image
                                    src={item.photo}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-2xl"
                                />
                            </div>
                            <div className="p-6 flex-1">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-9">
                                    {item.description}
                                </p>
                            </div>
                            <button
                                onClick={() => openModal(item)}
                                className="bg-blue-600 text-white py-3 rounded-b-2xl w-full hover:bg-blue-700 transition-colors duration-300"
                            >
                                Conocer más
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center"
                            onClick={closeModal}
                        >
                            <motion.div
                                className="bg-white rounded-2xl overflow-hidden shadow-xl max-w-5xl max-h-[90vh] w-full"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative w-full h-96">
                                    <Image
                                        src={selectedItem.photo}
                                        alt={selectedItem.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                        {selectedItem.title}
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        {selectedItem.description}
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-300"
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
