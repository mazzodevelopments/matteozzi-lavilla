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
    const commonStyles =
        'w-full px-4 py-3 border rounded-lg text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800';
    const labelStyles =
        'block text-white dark:text-white text-sm font-medium mb-2 text-left';
    const inputStyles =
        'bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 rounded-3xl';

    return (
        <div className="mb-4">
            <label className={labelStyles}>{label}:</label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    rows={4}
                    className={`${commonStyles} ${inputStyles} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`${commonStyles} ${inputStyles}`}
                />
            )}
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}
