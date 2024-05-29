import React from 'react';

interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    error: string;
    isTextarea?: boolean;
}

export default function Input({
    label,
    type,
    name,
    value,
    onChange,
    error,
    isTextarea = false
}: InputProps) {
    const inputStyles =
        'shadow-inner dark:shadow-gray-850 appearance-none bg-gray-200 dark:bg-gray-900 dark:text-white rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-600';
    const textareaStyles =
        'shadow-inner dark:shadow-gray-850 appearance-none bg-gray-200 dark:bg-gray-900 dark:text-white rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-600';
    const labelStyles =
        'block text-gray-700 dark:text-white text-sm font-bold mb-2 text-left';
    const inputHoverStyles =
        'hover:bg-blue-100 transition duration-200 ease-linear';

    return (
        <div className="mb-4 text-left">
            <label className={labelStyles}>{label}:</label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`${textareaStyles} ${inputHoverStyles}`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`${inputStyles} ${inputHoverStyles}`}
                />
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
