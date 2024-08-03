'use client';
import React from 'react';
import { FlipWords } from '../components/ui/flip-words';

interface InfoProps {
    content: {
        palabras: string[];
        frase: string;
        texto: string;
    };
}

export default function Info({ content }: InfoProps) {
    const { palabras, frase, texto } = content;

    return (
        <section
            id="info"
            className="relative flex flex-col justify-center items-center min-h-screen p-4 bg-pattern"
        >
            <div className="text-center mb-12 w-full max-w-5xl relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {frase}
                </h1>
                <p className="text-sm sm:text-md md:text-lg text-gray-500 font-medium max-w-2xl mx-auto">
                    {texto}
                </p>
            </div>

            <div className="flex justify-center items-center w-full relative z-10">
                <FlipWords
                    words={palabras}
                    className="font-bold text-4xl sm:text-6xl md:text-7xl text-blue-600"
                />
            </div>
        </section>
    );
}
