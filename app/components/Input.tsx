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
    const styles =
        'shadow-inner appearance-none bg-gray-100 dark:text-white rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 hover:bg-gray-200';
    const labelStyles =
        'block text-gray-700 dark:text-white text-sm font-bold mb-2 text-left';
    return (
        <div className="mb-4 text-left">
            <label className={labelStyles}>{label}:</label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`${styles} pb-20`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`${styles}`}
                />
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
