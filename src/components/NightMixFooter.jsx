import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './NightMixFooter.css';

const NightMixFooter = () => {
  return (
    <footer className="nightmix-footer">
      <div className="footer-content">
        
        {/* Logo y branding */}
        <div className="footer-branding">
          <div className="footer-logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
            <span className="logo-text">NIGHTMIX EVENTS</span>
          </div>
          <p className="footer-subtitle">Coctelería Premium para tu Evento</p>
        </div>

        {/* Información de contacto */}
        <div className="footer-info">
          <div className="info-item">
            <h4 className="info-title">Contacto</h4>
            <p className="info-text">
              <a href="tel:+34123456789">+34 (123) 456-789</a>
            </p>
            <p className="info-text">
              <a href="mailto:reservas@nightmix.com">reservas@nightmix.com</a>
            </p>
          </div>

          <div className="info-item">
            <h4 className="info-title">Ubicación</h4>
            <p className="info-text">
              Calle Principal 42<br/>
              Madrid, España 28001
            </p>
          </div>

          <div className="info-item">
            <h4 className="info-title">Horarios</h4>
            <p className="info-text">
              Lun - Dom: 18:00 - 04:00<br/>
              Eventos Privados: Bajo solicitud
            </p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="#instagram" className="social-link" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#facebook" className="social-link" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#twitter" className="social-link" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#whatsapp" className="social-link" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

      </div>

      {/* Línea divisora */}
      <div className="footer-divider"></div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2024 NightMix Events. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#privacy">Política de Privacidad</a>
          <span className="divider">•</span>
          <a href="#terms">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default NightMixFooter;