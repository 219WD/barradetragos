import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const useSliderCocktailGsap = (totalSlides) => {
  const [slideActual, setSlideActual] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const sliderRef = useRef(null);
  const textoRef = useRef(null);
  const intervalRef = useRef(null);

  const irA = useCallback((indice) => {
    setSlideActual(indice);
    setAutoplayPaused(false);
  }, []);

  const siguiente = useCallback(() => {
    setSlideActual((prev) => (prev + 1) % totalSlides);
    setAutoplayPaused(false);
  }, [totalSlides]);

  const anterior = useCallback(() => {
    setSlideActual((prev) => (prev - 1 + totalSlides) % totalSlides);
    setAutoplayPaused(false);
  }, [totalSlides]);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (autoplayPaused) return;
    
    intervalRef.current = setInterval(() => {
      setSlideActual((prev) => (prev + 1) % totalSlides);
    }, 6000);
  }, [totalSlides, autoplayPaused]);

  const pauseAutoplay = useCallback(() => setAutoplayPaused(true), []);
  const resumeAutoplay = useCallback(() => setAutoplayPaused(false), []);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slides = sliderRef.current.querySelectorAll(".slider-imagen");
    
    slides.forEach((slide, i) => {
      gsap.to(slide, {
        opacity: i === slideActual ? 1 : 0,
        duration: 1.2,
        ease: "power2.inOut"
      });
    });

    if (textoRef.current) {
      gsap.killTweensOf(textoRef.current.children);
      
      gsap.fromTo(textoRef.current.children,
        {
          y: 50,
          opacity: 0,
          rotationX: -15
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          clearProps: "rotationX"
        }
      );
    }
  }, [slideActual]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slideActual, startAutoplay]);

  useEffect(() => {
    if (autoplayPaused && intervalRef.current) {
      clearInterval(intervalRef.current);
    } else if (!autoplayPaused) {
      startAutoplay();
    }
  }, [autoplayPaused, startAutoplay]);

  return {
    slideActual,
    irA,
    siguiente,
    anterior,
    sliderRef,
    textoRef,
    pauseAutoplay,
    resumeAutoplay
  };
};

export default useSliderCocktailGsap;