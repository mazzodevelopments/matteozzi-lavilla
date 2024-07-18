import Divider from './components/Divider';
import About from './pages/About';
import Contacto from './pages/Contacto';
import Hero from './pages/Hero';
import Info from './pages/Info';
import Navbar from './pages/Navbar';
import Servicios from './pages/Servicios';

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

export default function Home() {
    return (
        <div>
            <Navbar navBarItems={navItems} />
            <Hero />
            <Info />
            <Divider />
            <About />
            <Divider />
            <Servicios />
            <Divider />
            <Contacto />
        </div>
    );
}
