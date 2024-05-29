import Divider from './components/Divider';
import Contacto from './pages/Contacto';
import Hero from './pages/Hero';
import Info from './pages/Info';
import Navbar from './pages/Navbar';
import Servicios from './pages/Servicios';
import DatosContacto from './pages/DatosContacto';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Info />
            <Divider />
            <Servicios />
            <Divider />
            <Contacto />
            <Divider />
            <DatosContacto />
        </div>
    );
}
