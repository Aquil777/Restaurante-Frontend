import React from "react";
import Image from "next/image";
import "./about.css";
import aboutImage from "../../../public/assets/images/about.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="" />
            </div>
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Lorem Ipsum Dolor Sit Amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Tempor incididunt ut
                labore et dolore magna aliqua.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Excepteur sint occaecat
                cupidatat non proident.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
