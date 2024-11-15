'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import SectionContainer from '../components/SectionContainter';

const buttonMotionConfig = {
  whileHover: {
    transition: { duration: 0.1 }
  },
  whileTap: {
    scale: 0.95
  }
};

const contactInfo = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-gray-600 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    text: '+54 2944 422066'
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-gray-600 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    text: 'info@matteozzi-lavilla.com.ar'
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-gray-600 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    text: 'Mitre 125, 1er Piso, Oficinas 124-125, San Carlos de Bariloche'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = '*Obligatorio';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      to_name: 'Matteozzi Lavilla',
      from_phone: formData.telefono,
      from_message: formData.mensaje
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log('SUCCESS!', response);
        setResponse('¡Mensaje enviado!');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
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
    <SectionContainer id="contact">
      {/* PRIMERA MITAD */}
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="flex flex-col items-start justify-center lg:w-[50%] h-full">
          <span className="text-[2.5vw] sm:text-sm uppercase tracking-wider text-gray-600 mb-4 py-1 px-3 border border-gray-600 rounded-xl">
            Contacto
          </span>
          <h1 className="text-3xl sm:text-[6.5vw] font-bold leading-tight sm:leading-[1] mb-4">
            Te leemos
          </h1>
          <p className="text-sm lg:text-[0.9vw] text-gray-600 mb-8 w-[90%]">
            Nuestros horarios de atención son 24/7 por lo que responderemos a
            tus inquietudes de inmediato. Estamos aquí para ayudarte con
            cualquier consulta sobre comercio internacional, despacho de aduanas
            o transporte aduanero.
          </p>
          <div className="w-[80%] space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 mr-3">{info.icon}</div>
                <span className="text-gray-600 text-sm lg:text-base">
                  {info.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* FORM */}
        <div className="w-full lg:w-[50%] mt-8 lg:mt-4 h-[100%]">
          <form
            onSubmit={handleSubmit}
            className="relative h-full flex flex-col justify-center space-y-4"
          >
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
              />
              {errors.nombre && (
                <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
              )}
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
              ></textarea>
              {errors.mensaje && (
                <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>
              )}
            </div>
            <div>
              <motion.button
                type="submit"
                {...buttonMotionConfig}
                className="w-full px-4 py-2 bg-black text-white rounded-xl hover:bg-cyan-500 transition duration-200 ease-in-out shadow-md"
              >
                Enviar
              </motion.button>
            </div>
          </form>
          {response && (
            <p className="mt-4 text-sm text-green-600 font-semibold">
              {response}
            </p>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
