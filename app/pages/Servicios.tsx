'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

    const renderedItems = content.map((item, idx) => (
        <motion.div
            key={idx}
            className="flex flex-col items-start mb-4 p-4"
            whileHover={{ scale: 1.05, y: -5, color: '#3B82F6' }}
            style={{ color: '#1E293B' }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-xl mb-3">
                {item.icon}
            </div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-md">{item.description}</p>
        </motion.div>
    ));

    return (
        <section
            id="servicios"
            className="flex flex-col min-h-screen max-h-screen p-8"
        >
            <div className="w-full max-w-4xl mx-auto mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-3 mt-6">
                    Servicios
                </h1>
                <p className="text-lg text-gray-500 text-left">
                    Explora los servicios que ofrecemos para vos.
                </p>
            </div>
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-start overflow-scroll space-y-8 p-6 rounded-3xl bg-gray-50">
                {renderedItems}
            </div>
        </section>
    );
}
