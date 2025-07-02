'use client';
import About from "./sections/About";
import Booking from "./sections/Booking";
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('./sections/Gallery'), { ssr: false });

import Chefs from "./sections/Chefs";
import Contact from "./sections/Contact";
import Events from "./sections/Events";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
   <>
    <Hero />
    <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials/>
        <Events />
        <Booking />
        <Testimonials />
        <Gallery />
        <Chefs />
        <Contact />
    </main>
   </>
  );
}
