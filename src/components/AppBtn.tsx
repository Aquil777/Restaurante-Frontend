import React from 'react'
import './appBtn.css'

function AppBtn({ name }: { name: string }) {

  const handleScrollTo = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      className='app-btn scrollto d-none d-lg-flex'
      onClick={() => handleScrollTo('book-a-table')}
    >
      {name}
    </a>
  )
}

export default AppBtn
