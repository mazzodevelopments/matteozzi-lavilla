'use client';
import { useRef, useState, useEffect } from 'react';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll
} from 'react-locomotive-scroll';
import './globals.css';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Navigation from './components/Navbar';
import Partners from './pages/Partners';
import WhatsappButton from './components/WhatsappButton';

function ScrollHandler({ heroRef, setIsWhatsappVisible }) {
  const { scroll } = useLocomotiveScroll();
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    if (heroRef.current) {
      const updateHeroHeight = () => {
        const height = heroRef.current.getBoundingClientRect().height;
        setHeroHeight(height - 700);
      };

      updateHeroHeight();
      window.addEventListener('resize', updateHeroHeight);

      return () => window.removeEventListener('resize', updateHeroHeight);
    }
  }, [heroRef]);

  useEffect(() => {
    if (!scroll) return;

    const handleScroll = (instance) => {
      const scrollPosition = instance.scroll.y;
      setIsWhatsappVisible(scrollPosition > heroHeight);
    };

    scroll.on('scroll', handleScroll);

    return () => {
      scroll.off('scroll', handleScroll);
    };
  }, [scroll, heroHeight, setIsWhatsappVisible]);

  return null;
}

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [isWhatsappVisible, setIsWhatsappVisible] = useState(false);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <Navigation />
          <div ref={heroRef}>
            <Hero />
          </div>
          <About />
          <Service />
          <Team />
          <Partners />
          <Contact />
          <Footer />
          <ScrollHandler
            heroRef={heroRef}
            setIsWhatsappVisible={setIsWhatsappVisible}
          />
        </div>
      </LocomotiveScrollProvider>
      <WhatsappButton isVisible={isWhatsappVisible} />
    </>
  );
}
