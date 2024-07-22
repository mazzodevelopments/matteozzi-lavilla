'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface NavBarProps {
    navBarItems: {
        name: string;
        link: string;
    }[];
}

export default function Navbar({ navBarItems }: NavBarProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 px-2 py-1.5 transition-transform duration-300 ${
                isVisible ? 'bg-white shadow hidden' : ''
            } `}
        >
            <div className="flex justify-between items-center h-full">
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex items-center space-x-4">
                        {navBarItems.map((item) => (
                            <ScrollLink
                                className="text-sm font-semibold text-gray-100 hover:text-blue-500 py-4 px-2 cursor-pointer"
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
        </nav>
    );
}
