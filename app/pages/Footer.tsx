'use client';
import { ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface FooterProps {
    content: {
        texto: string;
        contactDetails: {
            icon: ReactNode;
            texto: string;
        }[];
        links: {
            texto: string;
            link: string;
        }[];
    };
}

export default function Footer({ content }: FooterProps) {
    const { texto, contactDetails, links } = content;

    return (
        <footer className="bg-gray-50 text-gray-700 pt-6">
            <div className="container mx-auto flex flex-col lg:flex-row justify-start items-start p-6">
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-black mb-4">
                        Enlaces
                    </h2>
                    <ul className="space-y-2">
                        {links.map((link, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <ScrollLink
                                    to={link.link}
                                    smooth={true}
                                    duration={500}
                                    className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                >
                                    {link.texto}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-black mb-4">
                        Datos
                    </h2>
                    <div>
                        {contactDetails.map((item, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <div className="mr-3 text-xl text-[#0070f3]">
                                    {item.icon}
                                </div>
                                <p className="text-sm text-gray-600 hover:text-gray-900">
                                    {item.texto}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full p-4 text-center bg-gray-100">
                <p className="text-sm p-4 font-regular text-gray-500">
                    {texto}
                </p>
            </div>
        </footer>
    );
}
