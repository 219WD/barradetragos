import React from 'react';
import './VesubioBartenders.css';
import cocktailImage from '../assets/01.jpg';

const VesubioBartenders = () => {
  return (
    <section className="bartenders-section">
      {/* Divisor vertical */}
      <div className="bartenders-divider"></div>

      {/* Lado izquierdo - Imagen */}
      <div className="bartenders-left">
        <div className="bartenders-image-wrapper">
          <img 
            src={cocktailImage}
            alt="Cocktail Premium"
            className="bartenders-image"
          />
          <div className="image-caption">
            <span className="caption-text">Mixología Artesanal</span>
          </div>
        </div>
      </div>

      {/* Lado derecho - Contenido */}
      <div className="bartenders-right">
        
        {/* Header con líneas */}
        <div className="bartenders-header">
          <span className="header-line"></span>
          <span className="header-eyebrow">PREMIUM EXPERIENCE</span>
          <span className="header-line"></span>
        </div>

        {/* Título grande */}
        <h1 className="bartenders-title">
          EXPERTLY CRAFTED
          <span className="highlight">in TRADITION,</span>
          PERFECTED IN
          <span className="highlight">INNOVATION.</span>
        </h1>

        {/* Descripción */}
        <p className="bartenders-description">
          Nuestros bartenders premium transforman cada evento en una experiencia inolvidable.
          Cócteles artesanales, técnicas ancestrales y creatividad contemporánea se unen
          para cautivar a tus invitados. Cada copa es una obra de arte.
        </p>

        {/* Botón CTA */}
        <button className="bartenders-cta">
          RESERVAR EVENTO
        </button>

      </div>
    </section>
  );
};

export default VesubioBartenders;