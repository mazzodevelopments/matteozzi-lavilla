'use client';
import React from 'react';
import { GiTowTruck, GiTransportationRings } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface Servicio {
    title: string;
    description: string;
    icon: JSX.Element;
}

export default function Servicios() {
    const items: Servicio[] = [
        {
            title: 'Despachante de Aduana',
            description:
                'Ofrecemos servicios en despachos de importación, permisos de embarque, importaciones y exportaciones temporales, actividades bancarias, obtención de regímenes especiales, gestiones ante organismos oficiales, permisos de embarque para exportación, y asesoramiento en el área bancaria.',
            icon: <GiTowTruck />
        },
        {
            title: 'Agentes de Transporte Aduanero',
            description:
                'Ofrecemos diversos servicios como Agente de Transporte Aduanero, tales como trasbordos, seguros aduaneros, tránsitos terrestres e internacionales, contratación de fletes, coordinación de embarques, atención de vuelos internacionales de carga y pasajeros, servicios en áreas aduaneras especiales, logística internacional y estiba.',
            icon: <GiTransportationRings />
        },
        {
            title: 'Agentes de Transporte Aduanero',
            description:
                'Ofrecemos diversos servicios como Agente de Transporte Aduanero, tales como trasbordos, seguros aduaneros, tránsitos terrestres e internacionales, contratación de fletes, coordinación de embarques, atención de vuelos internacionales de carga y pasajeros, servicios en áreas aduaneras especiales, logística internacional y estiba.',
            icon: <GiTransportationRings />
        },
        {
            title: 'Agentes de Transporte Aduanero',
            description:
                'Ofrecemos diversos servicios como Agente de Transporte Aduanero, tales como trasbordos, seguros aduaneros, tránsitos terrestres e internacionales, contratación de fletes, coordinación de embarques, atención de vuelos internacionales de carga y pasajeros, servicios en áreas aduaneras especiales, logística internacional y estiba.',
            icon: <GiTransportationRings />
        }
    ];

    return (
        <section
            id="servicios"
            className="flex justify-center items-center min-h-screen"
        >
            <div className="w-full max-w-6xl p-8">
                <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold mb-8 lg:mb-16 text-center">
                    Servicios
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border border-gray-100"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center mb-2 text-3xl text-blue-500">
                                {item.icon}
                            </div>
                            <h3 className="text-l font-semibold mb-2 text-left">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 text-left">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
