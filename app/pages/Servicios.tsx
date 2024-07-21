'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GiCommercialAirplane,
    GiPlanePilot,
    GiTowTruck,
    GiTransportationRings,
    GiTruck,
    GiWorld
} from 'react-icons/gi';

interface Servicio {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface ServiciosProps {
    content: Servicio[];
}

export default function Servicios({ content }: ServiciosProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            id="servicios"
            className="flex justify-center items-center min-h-screen"
        >
            <div className="w-full max-w-7xl p-8">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-relaxed lg:leading-snug mb-8 mx-auto">
                    Servicios
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                    {content.map((item, idx) => (
                        <div
                            key={item.title}
                            className="relative group block p-2 h-full w-full max-w-sm"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: {
                                                duration: 0.15,
                                                delay: 0.2
                                            }
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-transparent group-hover:border-gray-200 relative z-20 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                <div className="relative z-50 flex items-center mb-4 text-4xl text-blue-500">
                                    {item.icon}
                                </div>
                                <div className="p-4">
                                    <h4 className="text-zinc-800 font-bold tracking-wide mt-4 text-lg">
                                        {item.title}
                                    </h4>
                                    <p className="mt-4 text-zinc-600 tracking-wide leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
