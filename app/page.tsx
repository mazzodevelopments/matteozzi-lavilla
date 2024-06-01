import Divider from './components/Divider';
import About from './pages/About';
import Contacto from './pages/Contacto';
import Hero from './pages/Hero';
import Info from './pages/Info';
import Navbar from './pages/Navbar';
import Servicios from './pages/Servicios';

export default function Home() {
    return (
        <div>
            <Navbar />
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
