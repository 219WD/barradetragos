// CocktailExperience.jsx
import React from 'react';
import './CocktailExperience.css';
import useCocktailExperienceAnimations from '../hooks/useCocktailExperienceAnimations.js';
import imagenNro1 from '../assets/01.jpg';
import imagenNro2 from '../assets/08.jpg';
import imagenNro3 from '../assets/09.jpg';
import imagenNro4 from '../assets/11.jpg';
import imagenNro5 from '../assets/12.jpg';
import imagenNro6 from '../assets/15.jpg';

const CocktailExperience = () => {
  const {
    sectionRef,
    mainImageLeftRef,
    centerCardRef,
    sideImageRightRef,
    decorativeBarRef,
    bottomImageLeftRef,
    textCardRef,
    interiorImageRef,
    sideImagesGridRef,
  } = useCocktailExperienceAnimations();

  // Placeholder para las imágenes - reemplaza con tus rutas reales
  const mainCocktail = imagenNro1;
  const pourImage = imagenNro2;
  const sideImage1 = imagenNro3;
  const interiorImage = imagenNro4;
  const sideImage2 = imagenNro5;
  const sideImage3 = imagenNro6;

  return (
   <section ref={sectionRef} className="cocktail-experience-container">
      <div className="cocktail-experience-content">
        
        {/* Sección Superior */}
        <div className="top-section">
          
          {/* Imagen principal izquierda */}
          <div ref={mainImageLeftRef} className="main-image-left">
            <img src={mainCocktail} alt="Cóctel signature" />
          </div>

          {/* Card central */}
          <div ref={centerCardRef} className="center-card">
            <div className="card-content">
              <h2 className="card-title">
                    BARRA DE CÓCTELES<br />
                <span className="premium-text">Premium</span>
              </h2>
              
              <div className="card-image">
                <img src={pourImage} alt="Preparación de cóctel" />
              </div>

              <p className="card-subtitle">
                TRANSFORMA TU EVENTO EN UNA<br />
                EXPERIENCIA INOLVIDABLE
              </p>

              <p className="card-description">
                Mixología profesional, bebidas artesanales y un servicio 
                excepcional para celebraciones corporativas, bodas, fiestas 
                privadas y eventos exclusivos. Cada cóctel es una obra de arte 
                diseñada para impresionar.
              </p>

              <button className="reserve-button">
                Reservar Barra Premium
              </button>

              <div className="card-badge">
                <div className="badge-icon">
                  <span>🍸</span>
                </div>
                <p className="badge-text">COCTELERÍA DE AUTOR</p>
              </div>
            </div>
          </div>

          {/* Imagen decorativa derecha */}
          <div ref={sideImageRightRef} className="side-image-right">
            <img src={sideImage1} alt="Detalle gastronómico" />
          </div>
        </div>

        {/* Barra decorativa */}
        <div ref={decorativeBarRef} className="decorative-bar"></div>

        {/* Sección Inferior */}
        <div className="bottom-section">
          
          {/* Imagen izquierda inferior */}
          <div ref={bottomImageLeftRef} className="bottom-image-left">
            <img src={sideImage2} alt="Cóctel artesanal" />
          </div>

          {/* Card de texto central */}
          <div ref={textCardRef} className="text-card">
            <h3 className="text-card-title">
              BARRA DE<br />
              CÓCTELES<br />
              PREMIUM
            </h3>
            
            <p className="text-card-subtitle">
              MIXOLOGÍA PROFESIONAL.<br />
              SERVICIO IMPECABLE.
            </p>

            <p className="text-card-description">
              Nuestro equipo de bartenders especializados lleva años 
              perfeccionando el arte de la coctelería. Desde clásicos 
              reinventados hasta creaciones exclusivas, cada bebida es 
              elaborada con ingredientes premium, técnicas innovadoras 
              y una presentación espectacular que sorprenderá a tus 
              invitados y elevará tu evento a otro nivel.
            </p>
          </div>

          {/* Imagen central interior */}
          <div ref={interiorImageRef} className="interior-image">
            <img src={interiorImage} alt="Interior del restaurante" />
          </div>

          {/* Imágenes pequeñas derecha */}
          <div ref={sideImagesGridRef} className="side-images-grid">
            <div className="small-image">
              <img src={sideImage2} alt="Plato gourmet" />
            </div>
            <div className="small-image">
              <img src={sideImage3} alt="Detalle culinario" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CocktailExperience;