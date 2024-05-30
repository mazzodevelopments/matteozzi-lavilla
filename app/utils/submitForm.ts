import emailjs from 'emailjs-com';

interface ContactState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export const submitForm = (
    formData: ContactState,
    setResponse: Function,
    setFormData: Function
) => {
    const serviceId = ''; // Agrega tu ID de servicio de emailjs
    const templateId = ''; // Agrega tu ID de plantilla de emailjs
    const publicKey = ''; // Agrega tu clave pública de emailjs

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
