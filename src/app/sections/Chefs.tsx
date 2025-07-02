import ChefsItem from '@/components/ChefsItem';
import SectionTitle from '@/components/SectionTitle';
import React from 'react'

async function getChefsData() {
    const res = await fetch('http://localhost:3000/api/chefs');
    return res.json();
}

async function Chefs() {
    const items: [] = await getChefsData();

  return (
    <section id="chefs" className="chefs">
        <div className="container" data-aos="fade-up">
            <SectionTitle title="Chefs" subtitle="Our Proffesional Chefs" />

            <div className="row">
                {items &&
                    items.length > 0 &&
                    items.map((item: {
                        id: number;
                        photo: string;
                        name: string;
                        position: string;
                        delay: string;
                    }) => (
                        <ChefsItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Chefs