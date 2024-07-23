'use client';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import { ImagesSlider } from '../components/ui/images-slider';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
    const images = [hero1, hero2, hero3];

    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center relative w-screen h-screen text-white"
        >
            <ImagesSlider
                images={images.map((image) => image.src)}
                overlay
                autoplay
                className="w-full h-full"
            />
            <div className="flex flex-col absolute inset-0 items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-center text-4xl font-bold text-white mix-blend-difference md:text-8xl">
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
                            className="inline-block mx-auto px-8 py-2 rounded-2xl bg-blue-600 text-white font-normal shadow-[0_4px_14px_0_rgb(0,118,255,25%)] hover:shadow-[0_6px_20px_rgba(0,118,255,50%)] hover:bg-blue-700 transition duration-200 ease-linear cursor-pointer"
                        >
                            Contáctanos
                        </ScrollLink>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
