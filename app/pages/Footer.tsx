import { ReactNode } from 'react';

interface FooterProps {
    content: {
        text: string;
    };
}

export default function Footer({ content }: FooterProps) {
    const { text } = content;

    return (
        <footer className="bg-white text-center py-6">
            <div className="container mx-auto">
                <p className="text-sm md:text-md lg:text-l font-regular text-gray-400">
                    {text}
                </p>
            </div>
        </footer>
    );
}
