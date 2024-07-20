import Divider from './components/Divider';
import About from './pages/About';
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

const footerContent = {
    text: 'Powered by © Mazzo Developments - 2024'
};

export default function Home() {
    return (
        <div>
            <Navbar navBarItems={navItems} />
            <Hero />
            <Info />
            <Divider />
            <About />
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
