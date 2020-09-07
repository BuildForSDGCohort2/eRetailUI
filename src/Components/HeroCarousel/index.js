import React from 'react';

export const HeroCarousel = () => (
    <section className="section-margin mt-0">
    <div className="owl-carousel owl-theme hero-carousel">
      <div className="hero-carousel__slide">
        <img src="static/img/home/hero-slide1.png" alt="heroslide" className="img-fluid" />
        <a href="/" className="hero-carousel__slideOverlay">
          <h3>Wireless Headphone</h3>
          <p>Accessories Item</p>
        </a>
      </div>
      <div className="hero-carousel__slide">
        <img src="static/img/home/hero-slide2.png" alt="heroslide2" className="img-fluid" />
        <a href="/" className="hero-carousel__slideOverlay">
          <h3>Wireless Headphone</h3>
          <p>Accessories Item</p>
        </a>
      </div>
      <div className="hero-carousel__slide">
        <img src="static/img/home/hero-slide3.png" alt="heroslide3" className="img-fluid" />
        <a href="/" className="hero-carousel__slideOverlay">
          <h3>Wireless Headphone</h3>
          <p>Accessories Item</p>
        </a>
      </div>
    </div>
  </section>
)