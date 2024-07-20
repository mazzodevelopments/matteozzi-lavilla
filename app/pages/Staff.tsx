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
        <section id="staff" className="min-h-screen bg-white py-16 relative">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-relaxed lg:leading-snug mb-16 mx-auto">
                    Nuestro Equipo
                </h1>
                <div className="relative flex flex-wrap justify-center gap-x-20">
                    {content.map((member, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="relative w-60 h-60 flex flex-col items-center justify-center"
                        >
                            <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200">
                                <Image
                                    src={member.foto}
                                    alt={member.nombreCompleto}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white p-4">
                                        <h2 className="text-lg font-semibold mb-1">
                                            {member.nombreCompleto}
                                        </h2>
                                        <p className="text-sm">{member.rol}</p>
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
