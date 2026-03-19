import usePromoEventoGsap from "../hooks/usePromoEventoGsap.js";
import "./SeccionPromoEvento.css";

const SeccionPromoEvento = () => {
  usePromoEventoGsap();

  const titulo = "EVENTOS";
  const letras = titulo.split("");

  return (
    <section className="seccion-promo-evento">

      {/* Columna izquierda: Contenido */}
      <div className="promo-contenido">

        {/* Logo/Badge superior */}
        <div className="promo-logo">
          <svg className="logo-icono" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <div className="logo-texto">
            <span className="logo-nombre">NightMix</span>
            <span className="logo-ciudad">Events</span>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="promo-titulo">
          {letras.map((letra, i) => (
            <span key={i} className="promo-titulo-letra">
              {letra}
            </span>
          ))}
        </h1>

        {/* Subtítulo en script */}
        <h2 className="promo-subtitulo">Premium</h2>

        {/* Descripción */}
        <p className="promo-descripcion">
          Transforma tu evento en una experiencia inolvidable con nuestra
          barra de cócteles premium. Mixología profesional, bebidas artesanales
          y un servicio excepcional para celebraciones corporativas, bodas,
          fiestas privadas y más.
        </p>

        {/* Botón de reserva */}
        <button className="promo-boton">
          Reserva tu Evento
          <svg className="boton-flecha" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

      </div>

      {/* Columna derecha: Imagen del cóctel */}
      <div className="promo-imagen-wrapper">
        <img
          src="https://images.unsplash.com/photo-1546171753-97d7676e4602?w=1200&q=90"
          alt="Cóctel signature"
          className="promo-imagen"
        />

        {/* Badge flotante con oferta */}
        <div className="promo-badge">
          <span className="badge-oferta">Consulta por</span>
          <span className="badge-titulo">Paquetes Especiales</span>
        </div>
      </div>

    </section>
  );
};

export default SeccionPromoEvento;