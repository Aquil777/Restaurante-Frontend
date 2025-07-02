'use client'
import React, { useState, useEffect } from 'react'
import './navbar.css'
import { useRouter, usePathname } from 'next/navigation'
import { navbar } from '../data/navbar'

function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [navlist, setNavList] = useState(navbar)
  const [open, setOpen] = useState(false)
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

  const handleToggleMenu = () => {
    setOpen(!open)
  }

  const handleScrollTo = (section: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    let header: HTMLElement | null = document.querySelector('#header')
    let offset = header?.offsetHeight
    let targetEl: HTMLElement | null = document.querySelector('#' + section)

    if (pathname === '/hero') {
      let elementPosition = targetEl?.offsetTop
      if (elementPosition !== undefined && offset !== undefined) {
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    } else {
      router.push(`#${section}`)
    }
  }

  const handleNavActive = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const position = scroll + 200

    const updatedNavList = navlist.map((nav) => {
      const targetSection = document.querySelector(`#${nav.target}`) as HTMLElement
      const isActive =
        targetSection &&
        position >= targetSection.offsetTop &&
        position <= targetSection.offsetTop + targetSection.offsetHeight

      return { ...nav, active: !!isActive }
    })

    setNavList(updatedNavList)
  }

  useEffect(() => {
    handleNavActive()
  }, [scroll])

  if (!isClient) return null

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}
    >
      <ul>
        {navlist.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.target}`}
              className={`nav-link scrollto ${nav.active ? 'active' : ''}`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name === 'Home' ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>

      <i
        className={`bi ${open ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
        onClick={handleToggleMenu}
      ></i>
    </nav>
  )
}

export default Navbar
