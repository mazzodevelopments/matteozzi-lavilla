import { GoCodeOfConduct, GoDatabase, GoGear, GoPeople } from 'react-icons/go';
import Divider from './components/Divider';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Info from './pages/Info';
import Navbar from './pages/Navbar';
import Servicios from './pages/Servicios';
import Staff from './pages/Staff';

const navItems = [
    {
        name: 'Inicio',
        link: 'home'
    },
    {
        name: 'Nosotros',
        link: 'nosotros'
    },
    {
        name: 'Servicios',
        link: 'servicios'
    },
    {
        name: 'Contacto',
        link: 'contacto'
    }
];

const infoContent = {
    items: [
        {
            title: 'Profesionalidad',
            icon: <GoCodeOfConduct />
        },
        {
            title: 'Experiencia',
            icon: <GoDatabase />
        },
        {
            title: 'Confianza + Fidelidad',
            icon: <GoPeople />
        },
        {
            title: 'Estructura',
            icon: <GoGear />
        }
    ],
    phrase: '¿Está interesado en importar-exportar o desea tener una mejor alternativa en su operativa de comercio exterior?',
    paragraph:
        'Usted puede contar con Matteozzi-Lavilla como colaborador de sus operaciones de Comercio Internacional. Le brindamos:'
};

const footerContent = {
    text: 'Powered by © Mazzo Developments - 2024'
};

export default function Home() {
    return (
        <div>
            <Navbar navBarItems={navItems} />
            <Hero />
            <Info content={infoContent} />
            <Divider />
            <Nosotros />
            <Divider />
            <Staff />
            <Divider />
            <Servicios />
            <Divider />
            <Contacto />
            <Divider />
            <Footer content={footerContent} />
        </div>
    );
}
