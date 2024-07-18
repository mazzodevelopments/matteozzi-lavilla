'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface NavBarProps {
    navBarItems: {
        name: string;
        link: string;
    }[];
}

export default function Navbar({ navBarItems }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
            className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-sm px-2 py-1.5 dark:border-gray-800 transition-transform duration-300 ${
                showNavbar
                    ? 'transform translate-y-0'
                    : 'transform -translate-y-full border-b border-gray-200'
            } h-[60px]`}
        >
            <div className="flex justify-between items-center h-full">
                <div className="ml-4 flex items-center space-x-4">
                    <button
                        className="block md:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <FiX className="w-6 h-6 text-black dark:text-white" />
                            ) : (
                                <FiMenu className="w-6 h-6 text-black dark:text-white" />
                            )}
                        </motion.div>
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="hidden md:flex items-center space-x-4">
                        {navBarItems.map((item) => (
                            <ScrollLink
                                className="text-sm font-semibold text-black dark:text-white hover:text-gray-500 py-4 px-2 cursor-pointer"
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
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-[60px] left-0 right-0 bg-white dark:bg-black z-50"
                    >
                        <div className="flex flex-col items-center">
                            {navBarItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.1
                                    }}
                                    className="mb-4 w-full"
                                >
                                    <ScrollLink
                                        className="text-sm font-semibold text-black dark:text-white py-2 px-4 cursor-pointer block w-full text-center"
                                        to={item.link}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
