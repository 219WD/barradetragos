import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const usePromoEventoGsap = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Logo con fade-in
      gsap.fromTo(".promo-logo", {
        y: -30, opacity: 0
      }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".seccion-promo-evento", start: "top 75%" }
      });

      // Título principal letra por letra
      gsap.fromTo(".promo-titulo-letra", {
        y: 60, opacity: 0, rotationX: -30
      }, {
        y: 0, opacity: 1, rotationX: 0,
        duration: 0.7,
        stagger: 0.04,
        ease: "back.out(1.2)",
        scrollTrigger: { trigger: ".promo-titulo", start: "top 75%" }
      });

      // Subtítulo en script
      gsap.fromTo(".promo-subtitulo", {
        x: -40, opacity: 0
      }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".promo-subtitulo", start: "top 78%" }
      });

      // Descripción
      gsap.fromTo(".promo-descripcion", {
        y: 30, opacity: 0
      }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".promo-descripcion", start: "top 80%" }
      });

      // Botón con efecto elástico
      gsap.fromTo(".promo-boton", {
        y: 25, opacity: 0, scale: 0.95
      }, {
        y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".promo-boton", start: "top 85%" }
      });

      // Imagen del cóctel con zoom
      gsap.fromTo(".promo-imagen", {
        scale: 0.9, opacity: 0
      }, {
        scale: 1, opacity: 1, duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: ".promo-imagen", start: "top 75%" }
      });

    });

    return () => ctx.revert();
  }, []);
};

export default usePromoEventoGsap;