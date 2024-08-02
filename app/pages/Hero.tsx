'use client';
import { StaticImageData } from 'next/image';
import { ImagesSlider } from '../components/ui/images-slider';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

interface HeroProps {
    content: {
        imagenes: StaticImageData[];
        navBarLinks: {
            texto: string;
            link: string;
        }[];
    };
}

export default function Hero({ content }: HeroProps) {
    const { imagenes, navBarLinks } = content;

    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center w-screen h-screen text-white"
        >
            <ImagesSlider
                images={imagenes.map((imagen) => imagen.src)}
                overlay
                autoplay
                className="w-full h-full"
            />
            <nav className="absolute top-0 left-0 right-0 z-10 px-2 py-1.5">
                <div className="flex justify-between items-center h-full">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="flex items-center space-x-4">
                            {navBarLinks.map((item) => (
                                <ScrollLink
                                    className="text-sm font-semibold text-gray-300 hover:text-blue-500 py-4 px-2 cursor-pointer"
                                    key={item.texto}
                                    to={item.link}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {item.texto}
                                </ScrollLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col absolute inset-0 items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-bold text-white mix-blend-difference ">
                        Matteozzi Lavilla
                    </h1>
                    <TextGenerateEffect
                        className="max-w-2xl text-center text-base font-medium text-white mix-blend-difference md:text-4xl mb-6"
                        words="Simplificamos el comercio internacional a través de servicios aduaneros, logísticos y asesoría estratégica. Tu socio confiable para un éxito sin fronteras."
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ScrollLink
                            to="contacto"
                            smooth={true}
                            duration={500}
                            className="inline-block mx-auto text-xs sm:text-sm md:text-base lg:text-md px-4 md:px-6 lg:px-6 py-2 sm:py-2.5 md:py-2 lg:py-2 rounded-full bg-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out cursor-pointer"
                        >
                            Contactanos
                        </ScrollLink>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
