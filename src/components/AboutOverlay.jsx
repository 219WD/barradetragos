// AboutOverlay.jsx
import React from 'react';
import './AboutOverlay.css';
import useAboutOverlayAnimations from '../hooks/useAboutOverlayAnimations.js';
// import heroImage from '../assets/bartender-working.jpg';

const AboutOverlay = () => {
  const {
    sectionRef,
    quoteRef,
    titleRef,
    descriptionRef,
    authorRef,
    statsRef,
  } = useAboutOverlayAnimations();

  // Placeholder - reemplaza con tu imagen real
  const heroImage = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=800&fit=crop";

  return (
    <section ref={sectionRef} className="about-overlay-container">
      <div className="about-overlay-background">
        <img src={heroImage} alt="Nuestro equipo trabajando" />
        <div className="overlay-gradient"></div>
      </div>

      <div className="about-overlay-content">
        
        {/* Quote decorativo */}
        <div ref={quoteRef} className="quote-mark">"</div>

        {/* Título principal */}
        <h2 ref={titleRef} className="about-overlay-title">
          La mejor experiencia en coctelería<br />
          que hayas vivido en la ciudad.
        </h2>

        {/* Descripción */}
        <p ref={descriptionRef} className="about-overlay-description">
          Combinamos arte, pasión y años de experiencia para crear momentos 
          únicos. Cada cóctel es una historia, cada evento una celebración 
          memorable. Nuestro compromiso es superar tus expectativas.
        </p>

        {/* Autor/Firma */}
        <div ref={authorRef} className="about-overlay-author">
          <div className="author-line"></div>
          <p className="author-name">MARTINEZ COCKTAIL LOCALS</p>
        </div>

        {/* Stats opcionales */}
        <div ref={statsRef} className="about-overlay-stats">
          <div className="stat-item-overlay">
            <span className="stat-number-overlay">500+</span>
            <span className="stat-label-overlay">Eventos Realizados</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item-overlay">
            <span className="stat-number-overlay">10+</span>
            <span className="stat-label-overlay">Años de Experiencia</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item-overlay">
            <span className="stat-number-overlay">15k+</span>
            <span className="stat-label-overlay">Clientes Satisfechos</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOverlay;