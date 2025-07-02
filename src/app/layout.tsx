import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'glightbox/dist/css/glightbox.css';

import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google'
import "./globals.css";
import dynamic from 'next/dynamic';

const BackToTop = dynamic(() => import('../components/BackToTop'), { ssr: false });
const TopBar = dynamic(() => import('../components/TopBar'), { ssr: false });
const Header = dynamic(() => import('../components/Header'), { ssr: false });
import Footer from './sections/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Restaurante Profissional",
  description: "restaurante perto de mim | restaurante à margem do rio | à terra restaurante menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <TopBar />
        <Header />
        <div id="preloader"></div>
        {children}
        <Footer />
        <BackToTop />
      </body>
{/*       <script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js" 
      integrity='sha384-HEQp+vqQ6Kl3jlkhq+8vhXoHs2V9QwicrY9mL0Mf9n0fkzQpVb6vKHPOeJpy23tm'
      crossOrigin='anonymous'
      ></script> */}
    </html>
  );
}
