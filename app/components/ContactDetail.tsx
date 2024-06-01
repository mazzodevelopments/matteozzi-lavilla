interface ContactDetailProps {
    icon: React.ReactNode;
    text: string;
}

export default function ContactDetail({ icon, text }: ContactDetailProps) {
    return (
        <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl text-[#0070f3]">{icon}</div>
            <p className="text-lg font-medium text-black dark:text-white">
                {text}
            </p>
        </div>
    );
}
