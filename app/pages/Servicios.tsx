'use client';
import React from 'react';
import {
    GiCommercialAirplane,
    GiPlanePilot,
    GiTowTruck,
    GiTransportationRings,
    GiTruck,
    GiWorld
} from 'react-icons/gi';
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
            icon: <GiCommercialAirplane />
        },
        {
            title: 'Agentes de Transporte Aduanero',
            description:
                'Ofrecemos servicios de Agente de Transporte Aduanero: trasbordos, seguros y fletes nacionales e internacionales, tránsitos terrestres y aéreos, reembarcos, permisos de transporte, y coordinación de embarques. También brindamos atención personalizada, confección de documentos de carga, gestión de vuelos internacionales en el Aeropuerto de S.C. de Bariloche, logística internacional multimodal y servicios de estiba.',
            icon: <GiTruck />
        },
        {
            title: 'Consultoría en Comercio Internacional',
            description:
                'Ofrecemos asesoría integral en comercio internacional, incluyendo análisis de costos, documentación, medios de pago, y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, y brindamos apoyo en regímenes promocionales y clasificaciones arancelarias.',
            icon: <GiWorld />
        }
    ];

    return (
        <section
            id="servicios"
            className="flex justify-center items-center min-h-screen text-center bg-gray-50"
        >
            <div className="w-full max-w-6xl p-8">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-relaxed lg:leading-snug mb-8 mx-auto">
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
