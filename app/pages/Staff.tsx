'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface StaffMember {
    rol: string;
    nombreCompleto: string;
    foto: string;
}

interface StaffProps {
    content: StaffMember[];
}

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-gray-700 hover:text-gray-900 z-10"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-gray-700 hover:text-gray-900 z-10"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </div>
    );
}

export default function Staff({ content }: StaffProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots: any) => (
            <div>
                <ul className="flex justify-center space-x-2">{dots}</ul>
            </div>
        ),
        customPaging: (i: any) => (
            <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
        )
    };

    const colors = ['bg-gray-50', 'bg-gray-100', 'bg-gray-200'];
    const textPositions = ['text-center', 'text-left', 'text-right'];

    return (
        <section id="staff" className="py-16 min-h-screen">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-3 mt-6">
                            Nuestro Equipo
                        </h1>
                        <p className="text-lg text-gray-500 text-left w-full max-w-2xl">
                            Conoce a los miembros de nuestro equipo, apasionados
                            y dedicados a ofrecerte el mejor servicio. Cada uno
                            de ellos aporta su experiencia y habilidades para
                            lograr nuestros objetivos y brindar soluciones
                            efectivas.
                        </p>
                    </div>
                </div>

                <div className="relative md:col-span-1">
                    <Slider {...settings}>
                        {content.map((member, index) => (
                            <motion.div
                                key={index}
                                className="p-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div
                                    className={`${
                                        colors[index % colors.length]
                                    } rounded-3xl overflow-hidden h-96 transform transition duration-500 hover:shadow-xl`}
                                >
                                    <div className="relative w-full h-3/4">
                                        <Image
                                            src={member.foto}
                                            alt={member.nombreCompleto}
                                            layout="fill"
                                            objectFit="cover"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className={`p-6 ${
                                            textPositions[
                                                index % textPositions.length
                                            ]
                                        }`}
                                    >
                                        <h2 className="text-xl font-bold text-gray-800 transition duration-500">
                                            {member.nombreCompleto}
                                        </h2>
                                        <p className="text-gray-600 font-semibold">
                                            {member.rol}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
