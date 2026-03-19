// src/hooks/useAboutOverlayAnimations.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAboutOverlayAnimations = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const authorRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      });

      // ── IMAGEN DE FONDO ─────────────────────────────────────────────

      // Zoom-in suave en la imagen de fondo
      tl.fromTo(
        sectionRef.current.querySelector('.about-overlay-background img'),
        {
          scale: 1.2,
          filter: 'brightness(0.3) contrast(1.1)'
        },
        {
          scale: 1,
          filter: 'brightness(0.5) contrast(1.1)',
          duration: 2,
          ease: 'power2.out'
        }
      )

      // Gradiente overlay: fade in
      .fromTo(
        sectionRef.current.querySelector('.overlay-gradient'),
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'power2.inOut'
        },
        '-=1.8'
      )

      // ── CONTENIDO PRINCIPAL ─────────────────────────────────────────

      // Quote mark: fade desde arriba
      .fromTo(
        quoteRef.current,
        {
          opacity: 0,
          y: -40,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.5)'
        },
        '-=1.2'
      )

      // Título: fade desde abajo con split
      .fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.8'
      )

      // Descripción: fade desde abajo
      .fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out'
        },
        '-=0.6'
      )

      // Autor/Firma: fade con línea expandiéndose
      .fromTo(
        authorRef.current.querySelector('.author-line'),
        {
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.inOut'
        },
        '-=0.4'
      )

      .fromTo(
        authorRef.current.querySelector('.author-name'),
        {
          opacity: 0,
          y: 10
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        },
        '-=0.4'
      )

      // ── STATS - CASCADA FINAL ───────────────────────────────────────

      // Stats items: cascada desde abajo con counter
      .fromTo(
        statsRef.current.querySelectorAll('.stat-item-overlay'),
        {
          opacity: 0,
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.5)'
        },
        '-=0.3'
      )

      // Counter animado para los números
      .to({}, {
        duration: 0.01,
        onStart: () => {
          const statNumbers = statsRef.current.querySelectorAll('.stat-number-overlay');
          
          statNumbers.forEach((numberEl) => {
            const text = numberEl.textContent;
            const hasPlus = text.includes('+');
            const hasK = text.includes('k');
            const cleanText = text.replace(/[^\d]/g, '');
            const finalValue = parseInt(cleanText);
            const counter = { value: 0 };
            
            gsap.to(counter, {
              value: finalValue,
              duration: 2.5,
              ease: 'power2.out',
              onUpdate: () => {
                let suffix = '';
                if (hasK) suffix = 'k';
                if (hasPlus) suffix += '+';
                numberEl.textContent = Math.floor(counter.value) + suffix;
              }
            });
          });
        }
      }, '-=1.5')

      // Divisores: fade in
      .fromTo(
        statsRef.current.querySelectorAll('.stat-divider'),
        {
          scaleY: 0,
          opacity: 0
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out'
        },
        '-=2.0'
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    quoteRef,
    titleRef,
    descriptionRef,
    authorRef,
    statsRef,
  };
};

export default useAboutOverlayAnimations;