import React from 'react'
import './whyUs.css'
import WhyUsCard from '../../components/WhyUsCard';
import SectionTitle from '@/components/SectionTitle';

export async function getWhyUsData() {
  const res = fetch('http://localhost:3000/api/whyUs');
  return (await res).json();
}

async function WhyUs() {
  const items: [] = await getWhyUsData();

  return (
    <section id='why-us' className='why-us'>
      <div className="container">
        <SectionTitle title="Why Us" subtitle="Why Choose Our Restaurant" />
        <div className="row">
          {items &&
            items.length > 0 &&
            items.map((item: any) => (
              <WhyUsCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
