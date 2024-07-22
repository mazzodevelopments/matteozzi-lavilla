'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Input from '../components/Input';

interface ContactState {
    name: string;
    email: string;
    phone: string;
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

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Matteozzi Lavilla',
            phone: formData.phone,
            message: formData.message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
            (response) => {
                console.log('SUCCESS!', response);
                setResponse('¡Mensaje enviado!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
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
            id="contacto"
            className="flex justify-center items-center mb-16"
        >
            <div className="bg-blue-600 rounded-3xl p-8 w-full max-w-7xl flex">
                {/* Primer y segundo tercio: texto */}
                <div className="w-2/3 pr-8 flex flex-col text-white">
                    <span className="text-md font-semibold mb-2">
                        A TU DISPOSICIÓN
                    </span>
                    <h1 className="text-5xl font-bold mb-4">
                        ¿Aún con dudas? Escríbenos y recibe toda la información
                    </h1>
                    <p className="text-xl">
                        Nuestros horarios de atención son 24/7 por lo que
                        responderemos a tus inquietudes de inmediato.
                    </p>
                </div>

                {/* Tercer tercio: formulario */}
                <div className="w-2/3 flex justify-center items-center">
                    <div className="w-full max-w-lg">
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
                                label="Mensaje"
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                error={errors.message}
                                isTextarea
                            />
                            <div className="flex justify-center mt-4">
                                <motion.button
                                    onClick={handleSubmit}
                                    {...buttonMotionConfig}
                                    className="w-full px-8 py-3 bg-blue-800 rounded-md text-white shadow-lg hover:bg-blue-900 transition duration-200 ease-in-out"
                                >
                                    Enviar
                                </motion.button>
                            </div>
                            {response && (
                                <p className="mt-4 text-lg text-blue-200 font-semibold">
                                    {response}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
