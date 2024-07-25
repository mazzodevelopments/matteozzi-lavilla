'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface NosotrosItem {
    titulo: string;
    descripcion: string;
    foto: string;
}

interface NosotrosProps {
    content: NosotrosItem[];
}

export default function About({ content }: NosotrosProps) {
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
        <section id="nosotros" className="min-h-screen mb-16">
            <div className="max-w-6xl mx-auto pt-16 pb-16 px-8">
                <div className="mb-12 text-center">
                    <p className="text-sm sm:text-md md:text-lg text-gray-600">
                        Nosotros
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                        ¿Quiénes somos?
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                    {content.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-lg flex flex-col"
                            onClick={() => openModal(item)}
                        >
                            <div className="w-full h-60 relative rounded-t-2xl overflow-hidden">
                                <Image
                                    src={item.foto}
                                    alt={item.titulo}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-2xl"
                                />
                            </div>
                            <div className="p-6 flex-1">
                                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                    {item.titulo}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-9">
                                    {item.descripcion}
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

            {/* MODAL */}
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
                                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl max-w-screen-lg w-full mx-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative w-full h-64 sm:h-80 md:h-96">
                                    <Image
                                        src={selectedItem.foto}
                                        alt={selectedItem.titulo}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                        {selectedItem.titulo}
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base overflow-auto">
                                        {selectedItem.descripcion}
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
