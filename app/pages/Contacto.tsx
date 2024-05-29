'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Input from '../components/Input';

interface ContactState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const buttonMotionConfig = {
    whileHover: {
        scale: 1.1,
        transition: { duration: 0.3 }
    },
    whileTap: {
        scale: 0.9
    }
};

export default function Contacto() {
    const [formData, setFormData] = useState<ContactState>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [response, setResponse] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        // Clear error message when user starts typing again
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        // Check for empty fields
        const newErrors: { [key: string]: string } = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (value.trim() === '') {
                newErrors[key] = '*Obligatorio';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            // If there are errors, set the state to display them
            setErrors(newErrors);
            return; // Prevent form submission
        }

        const serviceId = '';
        const templateId = '';
        const publicKey = '';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            to_name: 'Emiliano Matteozzi',
            message: formData.message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
            (response) => {
                console.log('SUCCESS!', response);
                setResponse('Message sent!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setTimeout(() => {
                    setResponse(null);
                }, 2000);
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <section
            id="contact"
            className="min-h-screen pt-8 pb-16 py-4 bg-gray-50 dark:bg-gray-950 text-center"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-relaxed lg:leading-snug mb-8 mx-auto">
                Contacto
            </h1>
            <div>
                <form
                    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto p-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Input
                        label="Nombre"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <Input
                        label="Mail"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <Input
                        label="Teléfono"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                    />
                    <Input
                        label="Asunto"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={errors.subject}
                    />
                    <Input
                        label="Mensaje"
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        isTextarea
                    />
                    <div className="flex justify-center">
                        <motion.button
                            onClick={handleSubmit}
                            {...buttonMotionConfig}
                            className="relative inline-block px-8 py-2 bg-[#0070f3] rounded-md text-white font-normal shadow-[0_4px_14px_0_rgb(0,118,255,25%)] hover:shadow-[0_6px_20px_rgba(0,118,255,50%)] hover:bg-[rgba(0,118,255,0.9)] transition duration-200 ease-linear"
                        >
                            Enviar
                        </motion.button>
                    </div>
                    {response && (
                        <p className="mt-2 text-sm text-[#0070f3] font-semibold">
                            {response}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
