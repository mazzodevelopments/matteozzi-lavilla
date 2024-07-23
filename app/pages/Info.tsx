'use client';
import React from 'react';
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
            className="flex flex-col p-4 m-2 text-center items-center"
            whileHover={{ scale: 1.1, y: -5, color: '#3B82F6' }}
            style={{ color: '#1E293B' }}
        >
            <div className="text-6xl sm:text-9xl mb-4">{item.icon}</div>
            <h2 className="text-sm sm:text-base font-semibold mb-4">
                {item.title}
            </h2>
        </motion.div>
    ));

    return (
        <section
            id="info"
            className="flex flex-col justify-center items-center min-h-screen p-4"
        >
            <h1 className="text-xl sm:text-xl md:text-3xl lg:text-5xl font-bold text-center max-w-5xl mb-4 pt-8">
                {phrase}
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm md:text-md lg:text-lg text-gray-600 font-medium text-center mb-8">
                {paragraph}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                {renderedItems}
            </div>
        </section>
    );
}
