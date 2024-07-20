'use client';
import React from 'react';
import { GoCodeOfConduct, GoDatabase, GoPeople, GoGear } from 'react-icons/go';
import { motion } from 'framer-motion';

interface InfoProps {
    content: {
        items: {
            title: string;
            icon: React.ReactNode;
        }[];
        phrase: string;
        paragraph: string;
    };
}

export default function Info({ content }: InfoProps) {
    const { items, phrase, paragraph } = content;

    const renderedItems = items.map((item, index) => (
        <motion.div
            key={index}
            className="bg-white rounded-lg p-4 text-center m-2 flex flex-col items-center"
            whileHover={{ scale: 1.1, y: -5, color: '#3B82F6' }}
            style={{ color: '#1E293B' }}
        >
            <h2 className="text-sm sm:text-base font-semibold mb-4">
                {item.title}
            </h2>
            <div className="text-6xl sm:text-9xl">{item.icon}</div>
        </motion.div>
    ));

    return (
        <section
            id="info"
            className="flex flex-col justify-center items-center min-h-screen p-4"
        >
            <h1 className="text-xl sm:text-xl md:text-3xl lg:text-5xl font-bold text-center max-w-5xl mb-8 pt-8">
                {phrase}
            </h1>
            <p className="max-w-2xl text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-gray-600 text-center mb-8">
                {paragraph}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                {renderedItems}
            </div>
        </section>
    );
}
