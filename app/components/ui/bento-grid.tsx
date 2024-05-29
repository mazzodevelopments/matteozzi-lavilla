import React from 'react';
import { cn } from '../../utils/cn';

// BentoGrid component
export const BentoGrid = ({
    className,
    children
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                'grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto', // Ajustar el número de columnas según el tamaño de la pantalla
                className
            )}
        >
            {children}
        </div>
    );
};

// BentoGridItem component
export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    width // Ancho personalizado para el artículo
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    width?: string; // Ancho personalizado para el artículo
}) => {
    return (
        <div
            className={cn(
                'rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white border border-gray-200', // Estilos de la tarjeta
                className
            )}
            style={{ width }} // Establecer el ancho personalizado
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 p-6">
                {icon}
                <div className="font-sans font-bold text-neutral-700 dark:text-neutral-200 mb-4 mt-2 text-lg">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 text-sm">
                    {description}
                </div>
            </div>
        </div>
    );
};
