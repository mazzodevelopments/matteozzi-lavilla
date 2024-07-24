'use client';
import React from 'react';
import { FlipWords } from '../components/ui/flip-words';

interface InfoProps {
    content: {
        words: string[];
        phrase: string;
        paragraph: string;
    };
}

export default function Info({ content }: InfoProps) {
    const { words, phrase, paragraph } = content;

    return (
        <section
            id="info"
            className="flex flex-col justify-center items-center min-h-screen p-4"
        >
            <div className="text-center mb-12 w-full max-w-6xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    {phrase}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 font-medium max-w-3xl mx-auto">
                    {paragraph}
                </p>
            </div>

            <div className="flex justify-center items-center w-full ">
                <FlipWords
                    words={words}
                    className="font-bold text-5xl sm:text-6xl md:text-7xl text-blue-600"
                />
            </div>
        </section>
    );
}
