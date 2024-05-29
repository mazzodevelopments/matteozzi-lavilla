'use client';
import { GoCodeOfConduct, GoDatabase, GoPeople, GoGear } from 'react-icons/go';
import { motion } from 'framer-motion';

export default function Info() {
    const infoContent = {
        items: [
            {
                title: 'Profesionalidad',
                icon: <GoCodeOfConduct />
            },
            {
                title: 'Experiencia',
                icon: <GoDatabase />
            },
            {
                title: 'Confianza + Fidelidad',
                icon: <GoPeople />
            },
            {
                title: 'Estructura',
                icon: <GoGear />
            }
        ],
        phrase: 'Está interesado en importar-exportar o desea tener una mejor alternativa en su operativa de comercio exterior?',
        paragraph:
            'Usted puede contar con Matteozzi-Lavilla como colaborador de sus operaciones de Comercio Internacional. Le brindamos:'
    };

    const { items, phrase, paragraph } = infoContent;

    const renderedItems = items.map((item, index) => (
        <motion.div
            key={index}
            className="bg-white rounded-lg p-4 text-center m-2 flex flex-col items-center"
            whileHover={{ scale: 1.1, y: -5, color: '#3B82F6' }}
        >
            <h2 className="text-sm font-bold mb-4">{item.title}</h2>
            <div className="text-9xl">{item.icon}</div>
        </motion.div>
    ));

    return (
        <section
            id="info"
            className="flex flex-col items-center justify-center min-h-screen p-4"
        >
            <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center max-w-4xl mb-8">
                {phrase}
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 text-center mb-8">
                {paragraph}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                {renderedItems}
            </div>
        </section>
    );
}
