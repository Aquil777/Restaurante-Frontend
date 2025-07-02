"use client"
import React, { useState, useEffect } from 'react'
import './header.css'
import AppBtn from './AppBtn';
import Navbar from './Navbar';

function Header() {
    const [scroll, setScroll] = useState(0);

     useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [scroll]);

    return (
        <header
            id="header"
            className={`fixed-top d-flex align-items-center ${scroll > 100 ? "header-scrolled" : ""}`}

        >
            <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between ps-md-5'>
              <h1 className='logo me-auto me-lg-0'>
                <a href='/'>Restaurant</a>

                {/* Uncomment bellow quando tiver logo para o restaurante
                  <a href="index.html" className="logo me-auto me-lg-0"> <img src="assets/img/logo.png" alt="" class="img-fluid"></a>                 */}
              </h1>

              <Navbar />
              <AppBtn name='Book a table' />
            </div>
        </header>
    )
}

export default Header