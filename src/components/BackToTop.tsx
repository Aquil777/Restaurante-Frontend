'use client'
import React, { useState, useEffect } from 'react'
import './backToTop.css'

function BackToTop() {
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

  const backToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (!isClient) return null

  return (
    <a
      onClick={backToTop}
      className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : ''}`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}

export default BackToTop
