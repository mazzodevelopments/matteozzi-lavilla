'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = [
        {
            name: 'Inicio',
            link: 'home'
        },
        {
            name: 'Nosotros',
            link: 'nosotros'
        },
        {
            name: 'Servicios',
            link: 'servicios'
        },
        {
            name: 'Contacto',
            link: 'contacto'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setShowNavbar(false);
                setIsOpen(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`bg-gray-50 dark:bg-gray-950 shadow-sm px-2 py-1.5 border-b border-gray-200 dark:border-gray-800 fixed top-0 w-full z-50 transition-transform duration-300 ${
                showNavbar
                    ? 'transform translate-y-0'
                    : 'transform -translate-y-full'
            } ${showNavbar ? 'h-[60px]' : ''}`}
            style={{ height: showNavbar ? '60px' : 'auto' }}
        >
            <div className="flex justify-between items-center h-full">
                <button
                    className="md:hidden block focus:outline-none ml-4"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? (
                            <FiX className="w-6 h-6 text-gray-500 dark:text-white" />
                        ) : (
                            <FiMenu className="w-6 h-6 text-gray-500 dark:text-white" />
                        )}
                    </motion.div>
                </button>
                <div className="hidden md:flex-1 md:flex md:justify-center items-center space-x-4">
                    {navItems.map((item) => (
                        <ScrollLink
                            className="py-2 px-4 font-normal text-sm text-gray-500 dark:text-white hover:text-black cursor-pointer"
                            key={item.name}
                            to={item.link}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                </div>
                <div className="md:hidden w-6 mr-4"></div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, delayChildren: 0.1 }}
                        className="md:hidden flex flex-col items-center mt-4 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md w-full" // Ajuste para cubrir completamente el área
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.1
                                }}
                                className="flex flex-col items-center justify-center p-2" // Añadir clases de Flexbox
                            >
                                <ScrollLink
                                    className="text-center w-full py-2 px-4 font-normal text-sm text-gray-500 dark:text-white hover:text-black hover:font-medium cursor-pointer"
                                    to={item.link}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {item.name}
                                </ScrollLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
