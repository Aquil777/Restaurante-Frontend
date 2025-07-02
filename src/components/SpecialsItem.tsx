import React from 'react';
import Image from 'next/image';
import './specialsItem.css';

interface Props {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  active: boolean;
}

function SpecialsItem({ item }: { item: Props }) {
  return (
    <div
      className={`tab-pane ${item.active ? 'active show' : ''}`}
      id={`tab-${item.id}`}
    >
      <div className="row">
        <div className="col-lg-8 details order-2 order-lg-1">
          <h3>{item.title}</h3>
          <p className="fst-italic">{item.subtitle}</p>
          <p>{item.content}</p>
        </div>
        <div className="col-lg-4 text-center order-1 order-lg-2">
          <Image src={item.image} alt={item.title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default SpecialsItem;
