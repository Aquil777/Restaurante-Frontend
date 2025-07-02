"use client";
import React, { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
import HeroBtn from "@/components/HeroBtn";
import "./hero.css";

function Hero() {
  useEffect(() => {
    import("glightbox").then((module) => {
      const GLightbox = module.default;
      GLightbox({ selector: ".glightbox" });
      console.log("GLightbox carregado e inicializado");
    });
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container text-center text-lg-start aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>Restaurant</span>
            </h1>
            <h2>Delivering great food for more than 18 years</h2>
            <div className="btns">
              <HeroBtn name="our menu" target="menu" />
              <HeroBtn name="book a table" target="book-a-table" />
            </div>
          </div>

          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=mK3cGscQRU8"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
