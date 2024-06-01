'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import ContactDetail from '../components/ContactDetail';
import { FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { submitForm } from '../utils/submitForm';

interface ContactState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const buttonMotionConfig = {
    whileHover: {
        scale: 1.01,
        transition: { duration: 0.1 }
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
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        const newErrors: { [key: string]: string } = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (value.trim() === '') {
                newErrors[key] = '*Obligatorio';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        submitForm(formData, setResponse, setFormData);
    };

    const contactDetails = [
        { icon: <FaEnvelope />, text: 'info@matteozzi-lavilla.com.ar' },
        { icon: <FaPhone />, text: '54-2944-422066' },
        {
            icon: <FaMapLocation />,
            text: 'San Carlos de Bariloche, Río Negro, Argentina (8400)'
        },
        {
            icon: <FaMapPin />,
            text: 'Mitre 125, 1er Piso, Oficinas 124-125'
        }
    ];

    return (
        <section
            id="contacto"
            className="min-h-screen pt-16 pb-16 bg-gray-50 dark:bg-gray-800"
        >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black dark:text-white mb-12">
                Contacto
            </h1>
            <div className="container mx-auto flex flex-col lg:flex-row lg:divide-x divide-gray-300 dark:divide-gray-700">
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">
                        Datos:
                    </h2>
                    <div>
                        {contactDetails.map((item, index) => (
                            <ContactDetail
                                key={index}
                                icon={item.icon}
                                text={item.text}
                            />
                        ))}
                    </div>
                    <div className="mt-8">
                        <iframe
                            className="rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.036365258706!2d-71.306176!3d-41.133732099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b72164b0f6f%3A0x9db38445b9cde801!2sMitre%20250%2C%20R8400%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1717110888489!5m2!1ses-419!2sar"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 p-8">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Input
                            label="Nombre"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <div className="flex flex-wrap">
                            <div className="w-1/2 pr-2">
                                <Input
                                    label="Mail"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                            </div>
                            <div className="w-1/2 pl-2">
                                <Input
                                    label="Teléfono"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                />
                            </div>
                        </div>
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
                                className="w-full px-8 py-3 bg-blue-600 rounded-md text-white shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out"
                            >
                                Enviar
                            </motion.button>
                        </div>
                        {response && (
                            <p className="mt-4 text-lg text-blue-600 font-semibold">
                                {response}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
