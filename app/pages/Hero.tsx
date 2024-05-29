'use client';
import Link from 'next/link';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import { ImagesSlider } from '../components/ui/images-slider';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { motion } from 'framer-motion';

export default function Hero() {
    const images = [hero1, hero2, hero3];

    return (
        <section
            id="home"
            className="w-screen flex flex-col items-center justify-center text-white h-[calc(100vh-60px)] mt-[60px] relative"
        >
            <ImagesSlider
                images={images.map((image) => image.src)}
                overlay
                autoplay
                className="w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
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
                        <Link
                            href="#contacto"
                            className="inline-block mx-auto px-8 py-2 bg-[#0070f3] rounded-md text-white font-normal shadow-[0_4px_14px_0_rgb(0,118,255,25%)] hover:shadow-[0_6px_20px_rgba(0,118,255,50%)] hover:bg-[rgba(0,118,255,0.9)] transition duration-200 ease-linear"
                        >
                            Contáctanos
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
