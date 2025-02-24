require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { SMTPClient, Message } = require('emailjs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const client = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    host: process.env.EMAIL_HOST,
    ssl: true, // Usa true si tu proveedor SMTP requiere SSL
    port: process.env.EMAIL_PORT || 465, // Puerto SMTP (465 para SSL, 587 para TLS)
});

app.post('/send-email', async (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    try {
        const emailMessage = new Message({
            text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'Nuevo mensaje de contacto',
        });

        await client.send(emailMessage);

        res.json({ success: true, message: 'Correo enviado exitosamente' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
