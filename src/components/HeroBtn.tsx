import React from 'react'
import './HeroBtn.css'

function HeroBtn({ name, target }: { name: string, target: string }) {
  const handleScrollTo = (section: string) => {
    //nothing yet
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollTo ${name.includes('book') ? 'ms-4' : undefined}`}
    >
      {name}
    </a>
  );
}

export default HeroBtn;
