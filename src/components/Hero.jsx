import { useState } from "react";
import useSliderCocktailGsap from "../hooks/useSliderCocktailGsap.js";
import ModalConsulta from "./ModalConsulta/ModalConsulta.jsx";
import "./Hero.css";
import img1 from "../assets/15.jpg";
import img2 from "../assets/16.jpg";
import img3 from "../assets/17.jpg";

const SLIDES = [
  {
    id: 1,
    imagen: img1,
    titulo: "TUS MOMENTOS",
    destacado: "MERECEN ESTILO",
    subtitulo: "Coctelería Premium para Eventos Inolvidables",
    ctaPrincipal: "RESERVAR AHORA",
    ctaSecundario: "VER MENÚ",
    badge: "✨ Barman en tu domicilio"
  },
  {
    id: 2,
    imagen: img2,
    titulo: "EXPERIENCIAS",
    destacado: "ÚNICAS",
    subtitulo: "Sorprende a tus invitados con los mejores cocktails",
    ctaPrincipal: "RESERVAR AHORA",
    ctaSecundario: "VER MENÚ",
    badge: "🌟 Servicio Exclusivo"
  },
  {
    id: 3,
    imagen: img3,
    titulo: "CELEBRA CON",
    destacado: "EXCLUSIVIDAD",
    subtitulo: "Eventos Corporativos y Privados con sello de calidad",
    ctaPrincipal: "RESERVAR AHORA",
    ctaSecundario: "VER MENÚ",
    badge: "⭐ +100 Eventos Satisfechos"
  }
];

const Hero = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const {
    slideActual,
    irA,
    siguiente,
    anterior,
    sliderRef,
    textoRef,
    pauseAutoplay,
    resumeAutoplay
  } = useSliderCocktailGsap(SLIDES.length);

  const handleVerMenu = () => {
    console.log("Mostrando menú...");
  };

  return (
    <>
      <section
        className="hero-slider-cocktail"
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
      >
        {/* Slider de imágenes */}
        <div className="slider-imagenes" ref={sliderRef}>
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider-imagen ${index === slideActual ? 'activo' : ''}`}
              style={{ backgroundImage: `url(${slide.imagen})` }}
            />
          ))}
        </div>

        {/* Overlay oscuro */}
        <div className="slider-overlay" />

        {/* Contenido centrado con CTAs */}
        <div className="slider-contenido">
          <div className="slider-texto" ref={textoRef}>
            <h1 className="slider-titulo">
              {SLIDES[slideActual].titulo}{' '}
              <span className="slider-titulo-destacado">
                {SLIDES[slideActual].destacado}
              </span>
            </h1>
            <h2 className="slider-subtitulo">
              {SLIDES[slideActual].subtitulo}
            </h2>

            {/* Badge de confianza */}
            <div className="slider-badge">
              {SLIDES[slideActual].badge}
            </div>

            {/* Botones CTA */}
            <div className="slider-acciones">
              <button
                onClick={() => setModalAbierto(true)}
                className="cta-button cta-button--primario"
              >
                {SLIDES[slideActual].ctaPrincipal}
                <span className="cta-button__icon">→</span>
              </button>

              <button
                onClick={handleVerMenu}
                className="cta-button cta-button--secundario"
              >
                {SLIDES[slideActual].ctaSecundario}
                <span className="cta-button__icon">🍸</span>
              </button>
            </div>
          </div>
        </div>

        {/* Controles de navegación */}
        <button
          className="slider-control slider-control--prev"
          onClick={anterior}
          aria-label="Anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="slider-control slider-control--next"
          onClick={siguiente}
          aria-label="Siguiente"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Indicadores de puntos */}
        <div className="slider-indicadores">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`indicador ${index === slideActual ? 'activo' : ''}`}
              onClick={() => irA(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Modal — fuera del section para evitar conflictos con z-index y overflow */}
      <ModalConsulta
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
        whatsappNumero="5493815991845"
      />
    </>
  );
};

export default Hero;