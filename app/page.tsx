import Nosotros from './pages/Nosotros';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Info from './pages/Info';
import Servicios from './pages/Servicios';
import Staff from './pages/Staff';
import Contacto from './pages/Contacto';
// HERO
import hero1 from './assets/hero1.jpg';
import hero2 from './assets/hero2.jpg';
import hero3 from './assets/hero3.jpg';
// NOSOTROS
import container from './assets/containers.jpg';
import plane from './assets/plane.jpg';
import software from './assets/software.jpg';
// STAFF
import emiliano from './assets/emiliano.jpg';
// SERVICIO
import { GiCommercialAirplane, GiTruck, GiWorld } from 'react-icons/gi';
import { FaEnvelope, FaMapPin, FaPhone, FaMapLocation } from 'react-icons/fa6';

const links = [
    {
        name: 'Servicios',
        link: 'servicios'
    },
    {
        name: 'Nosotros',
        link: 'nosotros'
    },
    {
        name: 'Staff',
        link: 'staff'
    },
    {
        name: 'Contacto',
        link: 'contacto'
    }
];

const hero = {
    images: [hero1, hero2, hero3],
    navBarLinks: links
};

const info = {
    words: [
        'Profesionalidad',
        'Experiencia',
        'Confianza',
        'Fidelidad',
        'Estructura'
    ],
    phrase: '¿Estás interesado en importar-exportar o deseas tener una mejor alternativa en su operativa de comercio exterior?',
    paragraph:
        'Podés contar con Matteozzi-Lavilla como colaborador de tus operaciones de Comercio Internacional. Te brindamos:'
};

const nosotros = [
    {
        title: 'Quienes Somos?',
        description:
            'Somos una empresa integral en el ámbito del comercio internacional, ofreciendo servicios de consultoría, despacho de aduanas y transporte aduanero. Contamos con una estructura completa y ágil, personal experimentado, tecnología moderna y profundo conocimiento de las relaciones económicas internacionales. Somos un eslabón esencial en la economía moderna, proporcionando una colaboración indispensable para la industria y el comercio.',
        photo: container.src
    },
    {
        title: 'Nuestra Estructura',
        description:
            'Ofrecemos una ubicación privilegiada en el corazón de San Carlos de Bariloche para nuestra oficina matriz. Contamos con una amplia red de servicios nacionales e internacionales y colaboramos con embarcadores para garantizar una cobertura completa. Nuestro sistema de información se actualiza constantemente, utilizando sistemas informáticos aduaneros y bases de datos de legislación. Contamos con un equipo de profesionales altamente capacitados en comercio exterior, listos para atender personalmente y ayudar a optimizar costos y ahorrar tiempo.',
        photo: plane.src
    },
    {
        title: 'Soporte Informático',
        description:
            'Nos esforzamos por brindar servicios de excelencia en comercio internacional, integrados con sistemas informáticos clave. Utilizamos herramientas modernas como el Sistema Informático María, TARIFAR, SINTIA - ALPHA 2000 y WORKOUT. Además, tenemos conectividad permanente a Internet de banda ancha para cumplir eficientemente con los requerimientos actuales.',
        photo: software.src
    }
];

const staff = [
    {
        rol: 'CEO',
        nombreCompleto: 'Emiliano Matteozzi',
        foto: emiliano.src
    },
    {
        rol: 'CEO',
        nombreCompleto: 'Emiliano Matteozzi',
        foto: emiliano.src
    },
    {
        rol: 'CEO',
        nombreCompleto: 'Emiliano Matteozzi',
        foto: emiliano.src
    },
    {
        rol: 'CEO',
        nombreCompleto: 'Emiliano Matteozzi',
        foto: emiliano.src
    },
    {
        rol: 'CEO',
        nombreCompleto: 'Emiliano Matteozzi',
        foto: emiliano.src
    }
];

const servicios = [
    {
        title: 'Despachante de Aduana',
        description:
            'Ofrecemos servicios en despachos de importación, permisos de embarque, importaciones y exportaciones temporales, actividades bancarias, obtención de regímenes especiales, gestiones ante organismos oficiales, permisos de embarque para exportación, y asesoramiento en el área bancaria.',
        icon: <GiCommercialAirplane />
    },
    {
        title: 'Agentes de Transporte Aduanero',
        description:
            'Ofrecemos servicios de Agente de Transporte Aduanero: trasbordos, seguros y fletes nacionales e internacionales, tránsitos terrestres y aéreos, reembarcos, permisos de transporte, y coordinación de embarques. También brindamos atención personalizada, confección de documentos de carga, gestión de vuelos internacionales en el Aeropuerto de S.C. de Bariloche, logística internacional multimodal y servicios de estiba.',
        icon: <GiTruck />
    },
    {
        title: 'Consultoría en Comercio Internacional',
        description:
            'Ofrecemos asesoría integral en comercio internacional, incluyendo análisis de costos, documentación, medios de pago, y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, y brindamos apoyo en regímenes promocionales y clasificaciones arancelarias.',
        icon: <GiWorld />
    }
];

const footer = {
    text: 'Powered by © Mazzo Developments - 2024',
    contactDetails: [
        { icon: <FaEnvelope />, text: 'info@matteozzi-lavilla.com.ar' },
        { icon: <FaPhone />, text: '54-2944-422066' },
        {
            icon: <FaMapLocation />,
            text: 'San Carlos de Bariloche, Río Negro, Argentina (8400)'
        },
        {
            icon: <FaMapPin />,
            text: 'Mitre 125, 1er Piso, Oficinas 124-125'
        }
    ],
    links: links
};

export default function Home() {
    return (
        <div>
            <Hero content={hero} />
            <Info content={info} />
            <Servicios content={servicios} />
            <Nosotros content={nosotros} />
            <Staff content={staff} />
            <Contacto />
            <Footer content={footer} />
        </div>
    );
}
