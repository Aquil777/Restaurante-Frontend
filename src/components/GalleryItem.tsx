import React, { useEffect } from 'react'
import Image from 'next/image'
import GLightbox from 'glightbox'
import './galleryItem.css'

type Props = {
  id: number;
  image: string;
}

export default function GalleryItem({ item }: { item: Props }) {
  useEffect(() => {
    GLightbox({
      selector: '.gallery-lightbox',
    });
  }, []);

  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a
          href={item.image}
          className="gallery-lightbox"
          data-gall="gallery-item"
        >
          <Image
            width={500}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
            }}
            src={item.image}
            alt=""
            className="img-fluid"
          />
        </a>
      </div>
    </div>
  );
}
