import Hero from './pages/Hero';
import Info from './pages/Info';
import Navbar from './pages/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Info />
        </div>
    );
}
