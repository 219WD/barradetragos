// src/hooks/useCocktailExperienceAnimations.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useCocktailExperienceAnimations = () => {
  const sectionRef = useRef(null);
  const mainImageLeftRef = useRef(null);
  const centerCardRef = useRef(null);
  const sideImageRightRef = useRef(null);
  const decorativeBarRef = useRef(null);
  const bottomImageLeftRef = useRef(null);
  const textCardRef = useRef(null);
  const interiorImageRef = useRef(null);
  const sideImagesGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      });

      // ── SECCIÓN SUPERIOR ────────────────────────────────────────────

      // Imagen principal izquierda: clipPath desde la izquierda
      tl.fromTo(
        mainImageLeftRef.current,
        {
          clipPath: 'inset(0 100% 0 0)',
          scale: 1.2
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          scale: 1,
          duration: 1.2,
          ease: 'power3.inOut'
        }
      )

      // Card central: escala desde el centro
      .fromTo(
        centerCardRef.current,
        {
          opacity: 0,
          scale: 0.85,
          y: 40
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'back.out(1.5)'
        },
        '-=0.8'
      )

      // Título del card: fade desde arriba
      .fromTo(
        centerCardRef.current.querySelector('.card-title'),
        {
          opacity: 0,
          y: -30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.6'
      )

      // Imagen dentro del card: zoom desde abajo
      .fromTo(
        centerCardRef.current.querySelector('.card-image'),
        {
          opacity: 0,
          scale: 0.9,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out'
        },
        '-=0.5'
      )

      // Textos del card: cascada
      .fromTo(
        [
          centerCardRef.current.querySelector('.card-subtitle'),
          centerCardRef.current.querySelector('.card-description')
        ],
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out'
        },
        '-=0.4'
      )

      // Botón de reserva: rebote elástico
      .fromTo(
        centerCardRef.current.querySelector('.reserve-button'),
        {
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.6)'
        },
        '-=0.3'
      )

      // Badge: entrada final
      .fromTo(
        centerCardRef.current.querySelector('.card-badge'),
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        },
        '-=0.4'
      )

      // Imagen derecha superior: desde la derecha
      .fromTo(
        sideImageRightRef.current,
        {
          opacity: 0,
          x: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out'
        },
        '-=0.8'
      )

      // ── BARRA DECORATIVA ────────────────────────────────────────────

      // Barra: expansión desde el centro
      .fromTo(
        decorativeBarRef.current,
        {
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.inOut'
        },
        '-=0.4'
      )

      // Efecto de brillo en la barra
      .to(
        decorativeBarRef.current,
        {
          filter: 'brightness(1.3)',
          duration: 0.5,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: 1
        },
        '-=0.4'
      )

      // ── SECCIÓN INFERIOR ────────────────────────────────────────────

      // Imagen izquierda inferior: desde abajo
      .fromTo(
        bottomImageLeftRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out'
        },
        '-=0.6'
      )

      // Card de texto: slide desde la izquierda
      .fromTo(
        textCardRef.current,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out'
        },
        '-=0.7'
      )

      // Contenido del card de texto: cascada
      .fromTo(
        [
          textCardRef.current.querySelector('.text-card-title'),
          textCardRef.current.querySelector('.text-card-subtitle'),
          textCardRef.current.querySelector('.text-card-description')
        ],
        {
          opacity: 0,
          x: -20
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out'
        },
        '-=0.6'
      )

      // Imagen interior: clipPath desde abajo
      .fromTo(
        interiorImageRef.current,
        {
          clipPath: 'inset(100% 0 0 0)',
          scale: 1.15
        },
        {
          clipPath: 'inset(0% 0 0 0)',
          scale: 1,
          duration: 1.1,
          ease: 'power3.inOut'
        },
        '-=0.8'
      )

      // Grid de imágenes pequeñas: cascada desde arriba
      .fromTo(
        sideImagesGridRef.current?.children || [],
        {
          opacity: 0,
          y: -40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'back.out(1.5)'
        },
        '-=0.7'
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    mainImageLeftRef,
    centerCardRef,
    sideImageRightRef,
    decorativeBarRef,
    bottomImageLeftRef,
    textCardRef,
    interiorImageRef,
    sideImagesGridRef,
  };
};

export default useCocktailExperienceAnimations;