'use client'
import React, { useState, useEffect } from 'react'
import './topbar.css'

function TopBar() {
  const [scroll, setScroll] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

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
  }, []); // ✅ array de dependências vazio

  if (!isClient) return null;

  return (
    <div
      id="topbar"
      className={`topbar ${scroll > 100 ? "topbar-scrolled" : ""}`}
    >
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center text-gold">
            <span className="ps-2 text-white">
              (258) 877937188
            </span>
          </i>
          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span className="ps-2 text-white">
              Mon-Sat: 9:00AM - 10:00PM
            </span>
          </i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul className="d-flex flex-wrap list-unstyled m-0 text-gold">
            <li>EN</li>
            <li className="px-2 position-relative">
              <span className="separator">/</span>
              <a href="#" className="text-white">PT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopBar;
