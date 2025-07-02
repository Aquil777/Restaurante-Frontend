'use client'
import React, { useState, useEffect } from 'react'
import './header.css'
import Image from 'next/image';
import AppBtn from './AppBtn'
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });

function Header() {
  const [scroll, setScroll] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScroll(window.scrollY)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  if (!isClient) return null

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled' : ''}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between ps-md-5">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">Restaurant</a>
          {/* Uncomment bellow quando tiver logo para o restaurante
              <a href="index.html" className="logo me-auto me-lg-0">
                <Image src="assets/img/logo.png" alt="" className="img-fluid" />
              </a> */}
        </h1>

        <Navbar />
        <AppBtn name="Book a table" />
      </div>
    </header>
  )
}

export default Header
