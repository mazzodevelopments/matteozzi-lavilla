import Nosotros from './pages/Nosotros';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Info from './pages/Info';
import Servicios from './pages/Servicios';
import Staff from './pages/Staff';
import Contacto from './pages/Contacto';
// HERO
import hero1 from './assets/hero/hero1.jpg';
import hero2 from './assets/hero/hero2.jpg';
import hero3 from './assets/hero/hero3.jpg';
// NOSOTROS
import container from './assets/nosotros/containers.jpg';
import plane from './assets/nosotros/plane.jpg';
import software from './assets/nosotros/software.jpg';
// STAFF
import emiliano from './assets/emiliano.jpg';
// SERVICIO
import { GiCommercialAirplane, GiTruck, GiWorld } from 'react-icons/gi';
import { FaEnvelope, FaMapPin, FaPhone, FaMapLocation } from 'react-icons/fa6';

const links = [
    {
        texto: 'Servicios',
        link: 'servicios'
    },
    {
        texto: 'Nosotros',
        link: 'nosotros'
    },
    {
        texto: 'Equipo',
        link: 'staff'
    },
    {
        texto: 'Contacto',
        link: 'contacto'
    }
];

const hero = {
    imagenes: [hero1, hero2, hero3],
    navBarLinks: links
};

const info = {
    palabras: [
        'Profesionalidad',
        'Experiencia',
        'Confianza',
        'Fidelidad',
        'Estructura'
    ],
    frase: '¿Estás interesado en importar-exportar o deseas tener una mejor alternativa en su operativa de comercio exterior?',
    texto: 'Podés contar con Matteozzi-Lavilla como colaborador de tus operaciones de Comercio Internacional. Te brindamos:'
};

const servicios = [
    {
        titulo: 'Despachante de Aduana',
        descripcion:
            'Ofrecemos servicios en despachos de importación, permisos de embarque, importaciones y exportaciones temporales, actividades bancarias, obtención de regímenes especiales, gestiones ante organismos oficiales, permisos de embarque para exportación, y asesoramiento en el área bancaria.',
        icono: <GiCommercialAirplane />
    },
    {
        titulo: 'Agentes de Transporte Aduanero',
        descripcion:
            'Ofrecemos servicios de Agente de Transporte Aduanero: trasbordos, seguros y fletes nacionales e internacionales, tránsitos terrestres y aéreos, reembarcos, permisos de transporte, y coordinación de embarques. También brindamos atención personalizada, confección de documentos de carga, gestión de vuelos internacionales en el Aeropuerto de S.C. de Bariloche, logística internacional multimodal y servicios de estiba.',
        icono: <GiTruck />
    },
    {
        titulo: 'Consultoría en Comercio Internacional',
        descripcion:
            'Ofrecemos asesoría integral en comercio internacional, incluyendo análisis de costos, documentación, medios de pago, y asesoría legal aduanera. También gestionamos inscripciones para importadores y exportadores, y brindamos apoyo en regímenes promocionales y clasificaciones arancelarias.',
        icono: <GiWorld />
    }
];

const nosotros = [
    {
        titulo: 'Quienes Somos?',
        descripcion:
            'Somos una empresa integral en el ámbito del comercio internacional, ofreciendo servicios de consultoría, despacho de aduanas y transporte aduanero. Contamos con una estructura completa y ágil, personal experimentado, tecnología moderna y profundo conocimiento de las relaciones económicas internacionales. Somos un eslabón esencial en la economía moderna, proporcionando una colaboración indispensable para la industria y el comercio.',
        foto: container.src
    },
    {
        titulo: 'Nuestra Estructura',
        descripcion:
            'Ofrecemos una ubicación privilegiada en el corazón de San Carlos de Bariloche para nuestra oficina matriz. Contamos con una amplia red de servicios nacionales e internacionales y colaboramos con embarcadores para garantizar una cobertura completa. Nuestro sistema de información se actualiza constantemente, utilizando sistemas informáticos aduaneros y bases de datos de legislación. Contamos con un equipo de profesionales altamente capacitados en comercio exterior, listos para atender personalmente y ayudar a optimizar costos y ahorrar tiempo.',
        foto: plane.src
    },
    {
        titulo: 'Soporte Informático',
        descripcion:
            'Nos esforzamos por brindar servicios de excelencia en comercio internacional, integrados con sistemas informáticos clave. Utilizamos herramientas modernas como el Sistema Informático María, TARIFAR, SINTIA - ALPHA 2000 y WORKOUT. Además, tenemos conectividad permanente a Internet de banda ancha para cumplir eficientemente con los requerimientos actuales.',
        foto: software.src
    }
];

const staff = {
    parrafo:
        'Nuestro equipo está compuesto por profesionales apasionados y altamente capacitados en sus respectivas áreas. Con una combinación de experiencia, creatividad y compromiso, estamos dedicados a alcanzar la excelencia en todo lo que hacemos.',
    primarios: [
        {
            imagen: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=668&q=80',
            nombre: 'Cesar Matteozzi',
            rol: 'CEO'
        },
        {
            imagen: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=668&q=80',
            nombre: 'Emiliano Matteozzi',
            rol: 'CEO'
        },
        {
            imagen: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=668&q=80',
            nombre: 'Stella Lavilla',
            rol: 'CEO'
        }
    ],
    secundarios: [
        {
            id: 1,
            name: 'John Doe',
            designation: 'Software Engineer',
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
        },
        {
            id: 2,
            name: 'Robert Johnson',
            designation: 'Product Manager',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 3,
            name: 'Jane Smith',
            designation: 'Data Scientist',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
        }
    ]
};

const footer = {
    texto: 'Powered by © Mazzo Developments - 2024',
    contactDetails: [
        { icon: <FaEnvelope />, texto: 'info@matteozzi-lavilla.com.ar' },
        { icon: <FaPhone />, texto: '54-2944-422066' },
        {
            icon: <FaMapLocation />,
            texto: 'San Carlos de Bariloche, Río Negro, Argentina (8400)'
        },
        {
            icon: <FaMapPin />,
            texto: 'Mitre 125, 1er Piso, Oficinas 124-125'
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
