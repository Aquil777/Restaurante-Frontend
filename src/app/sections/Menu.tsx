'use client'

import React, { useState, useEffect } from 'react'
import { filters } from '../../data/menu'
import './menu.css'
import MenuItem from '@/components/MenuItem'
import SectionTitle from '@/components/SectionTitle'
import Preloader from '@/components/Preloader'

function Menu() {
  const [items, setItems] = useState<any[]>([]) // Todos os itens do menu
  const [filteredItems, setFilteredItems] = useState<any[]>([]) // Itens filtrados
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/menu')
        const data = await res.json()
        setItems(data)
        setFilteredItems(data) // Inicializa com todos os itens
      } catch (e) {
        console.error('Erro ao buscar o menu:', e)
      } finally {
        setLoading(false)
      }
    }

    getMenu()
  }, [])

  const handleFilterChangeActive = (id: number) =>
  {
    filters.map(filter => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = (id: number, category: string) => {
    handleFilterChangeActive(id);

    if (category === 'all') {
      setFilteredItems(items) // Exibe todos os itens
    } else {
      setFilteredItems(items.filter((item: { category: string }) => item.category === category)) // Filtra os itens
    }
  }

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Our Menu" subtitle="Check Our Tasty Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              {filters.map(filter => (
                <li
                  key={filter.id}
                  className={filter.active ? 'filter-active' : ''}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
          {loading ? (
            <Preloader />
          ) : (
            filteredItems.map((item) => (
              <MenuItem
                key={item.id}
                item={{
                  id: item.id,
                  name: item.name,
                  preview: item.preview,
                  price: item.price,
                  ingredients: item.ingredients
                }}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Menu
