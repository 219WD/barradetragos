import { useState, useEffect, useCallback } from "react";
import "./ModalConsulta.css";

// ─── CONSTANTES ───────────────────────────────────────────
const TIPOS_EVENTO = [
  "Boda",
  "Corporativo",
  "Cumpleaños",
  "Quinceaños",
  "Graduación",
  "Fiesta privada",
  "Lanzamiento",
  "Otro",
];

const ESTILOS_BARRA = [
  { value: "", label: "Seleccioná una opción" },
  { value: "Open bar completo", label: "Open bar completo" },
  { value: "Barra de tragos / cocktails", label: "Barra de tragos / cocktails" },
  { value: "Mocktails + sin alcohol", label: "Mocktails + sin alcohol" },
  { value: "Mixto (clásico + especiales)", label: "Mixto (clásico + especiales)" },
  { value: "Aún no lo decidí", label: "Aún no lo decidí" },
];

const RANGOS_PRESUPUESTO = [
  { value: "", label: "Aún no lo sé" },
  { value: "Menos de $500.000", label: "Menos de $500.000" },
  { value: "$500.000 – $1.000.000", label: "$500.000 – $1.000.000" },
  { value: "$1.000.000 – $2.000.000", label: "$1.000.000 – $2.000.000" },
  { value: "Más de $2.000.000", label: "Más de $2.000.000" },
  { value: "Lo charlamos según propuesta", label: "Lo charlamos según propuesta" },
];

const CANALES = [
  { value: "", label: "Seleccioná" },
  { value: "Instagram", label: "Instagram" },
  { value: "Facebook", label: "Facebook" },
  { value: "Recomendación", label: "Recomendación" },
  { value: "Google", label: "Google" },
  { value: "Otro", label: "Otro" },
];

const ESTADO_INICIAL = {
  nombre: "",
  telefono: "",
  fecha: "",
  ciudad: "",
  salon: "",
  invitados: 100,
  tiposEvento: [],
  marcas: "",
  estilo: "",
  presupuesto: "",
  canal: "",
  extras: "",
};

// ─── HELPERS ──────────────────────────────────────────────
function calcularPct(value, min, max) {
  return ((value - min) / (max - min)) * 100;
}

function formatearFecha(fecha) {
  if (!fecha) return "No indicada";
  return new Date(fecha + "T00:00:00").toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function armarMensajeWhatsapp(form) {
  const tipos = form.tiposEvento.join(", ") || "No especificado";
  return `🍸 *CONSULTA DE EVENTO — NightMix*

👤 *Nombre:* ${form.nombre}
📱 *WhatsApp:* ${form.telefono}

━━━━━━━━━━━━━━━━━
🎉 *EVENTO*
━━━━━━━━━━━━━━━━━
• *Tipo:* ${tipos}
• *Fecha:* ${formatearFecha(form.fecha)}
• *Ciudad:* ${form.ciudad}
• *Salón/Lugar:* ${form.salon || "No definido aún"}
• *Personas estimadas:* ${form.invitados}

━━━━━━━━━━━━━━━━━
🥃 *BARRA*
━━━━━━━━━━━━━━━━━
• *Estilo:* ${form.estilo || "A definir"}
• *Marcas/Bebidas:* ${form.marcas || "A charlar"}

━━━━━━━━━━━━━━━━━
💰 *INVERSIÓN Y CONTACTO*
━━━━━━━━━━━━━━━━━
• *Presupuesto estimado:* ${form.presupuesto || "A definir"}
• *Nos conoció por:* ${form.canal || "No indicado"}

━━━━━━━━━━━━━━━━━
📝 *ADICIONALES*
━━━━━━━━━━━━━━━━━
${form.extras || "Sin comentarios adicionales"}

_Enviado desde el formulario de NightMix Events_`;
}

// ─── ÍCONOS ───────────────────────────────────────────────
const IconoLogo = () => (
  <svg className="nm-logo-icono" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconoCerrar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconoInfo = () => (
  <svg className="nm-aviso-icono" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconoWhatsapp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconoFlecha = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────
/**
 * ModalConsulta — Modal de filtro de leads para NightMix Events
 *
 * Props:
 *  - isOpen    {boolean}  — controla si el modal está visible
 *  - onClose   {function} — callback para cerrarlo
 *  - whatsappNumero {string} — número WA sin + (ej: "5493816000000")
 *
 * Uso desde cualquier componente:
 *   const [modalAbierto, setModalAbierto] = useState(false);
 *   <ModalConsulta isOpen={modalAbierto} onClose={() => setModalAbierto(false)} whatsappNumero="5493816000000" />
 *   <button onClick={() => setModalAbierto(true)}>Abrir</button>
 */
const ModalConsulta = ({ isOpen, onClose, whatsappNumero = "5493816000000" }) => {
  const [saliendo, setSaliendo] = useState(false);
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [error, setError] = useState("");

  // ── Cerrar con animación ──
  const cerrar = useCallback(() => {
    setSaliendo(true);
    setTimeout(() => {
      setSaliendo(false);
      onClose();
    }, 250);
  }, [onClose]);

  // ── ESC key ──
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") cerrar(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, cerrar]);

  // ── Bloquear scroll del body ──
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  // ── Handlers ──
  const handleChange = (campo) => (e) => {
    setForm((prev) => ({ ...prev, [campo]: e.target.value }));
    if (error) setError("");
  };

  const handleSlider = (e) => {
    setForm((prev) => ({ ...prev, invitados: Number(e.target.value) }));
  };

  const toggleTipo = (tipo) => {
    setForm((prev) => ({
      ...prev,
      tiposEvento: prev.tiposEvento.includes(tipo)
        ? prev.tiposEvento.filter((t) => t !== tipo)
        : [...prev.tiposEvento, tipo],
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) cerrar();
  };

  const handleEnviar = () => {
    if (!form.nombre.trim() || !form.telefono.trim() || !form.fecha || !form.ciudad.trim()) {
      setError("Por favor completá: nombre, WhatsApp, fecha y ciudad.");
      return;
    }
    const mensaje = armarMensajeWhatsapp(form);
    const url = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const pct = calcularPct(form.invitados, 30, 800);

  return (
    <div
      className={`nm-overlay${saliendo ? " nm-saliendo" : ""}`}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div className="nm-modal" role="dialog" aria-modal="true" aria-labelledby="nm-titulo">

        {/* ── HEADER ── */}
        <div className="nm-header">
          <div className="nm-logo">
            <IconoLogo />
            <div>
              <span className="nm-logo-nombre">NightMix</span>
              <span className="nm-logo-sub">Events</span>
            </div>
          </div>

          <button className="nm-cerrar" onClick={cerrar} aria-label="Cerrar modal">
            <IconoCerrar />
          </button>

          <h2 id="nm-titulo" className="nm-titulo">
            Contame tu Evento
            <span className="nm-titulo-italic">100% personalizado</span>
          </h2>
          <p className="nm-bajada">
            Cada barra es única. Me ocupo personalmente de cada cliente — sin paquetes genéricos.
            Completá los datos y te armo una propuesta a medida.
          </p>
        </div>

        <div className="nm-divisor" />

        {/* ── BODY ── */}
        <div className="nm-body">

          {/* 01 · Datos personales */}
          <div className="nm-seccion">
            <div className="nm-seccion-label">01 · Tus datos</div>
            <div className="nm-grid">
              <div className="nm-campo">
                <label>Nombre y apellido <span className="req">*</span></label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={handleChange("nombre")}
                />
              </div>
              <div className="nm-campo">
                <label>WhatsApp <span className="req">*</span></label>
                <input
                  type="tel"
                  placeholder="+54 9 ..."
                  value={form.telefono}
                  onChange={handleChange("telefono")}
                />
              </div>
            </div>
          </div>

          {/* 02 · Tipo de evento */}
          <div className="nm-seccion">
            <div className="nm-seccion-label">02 · Tipo de evento</div>
            <div className="nm-chips">
              {TIPOS_EVENTO.map((tipo) => (
                <div
                  key={tipo}
                  className={`nm-chip${form.tiposEvento.includes(tipo) ? " nm-chip-activo" : ""}`}
                  onClick={() => toggleTipo(tipo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && toggleTipo(tipo)}
                >
                  {tipo}
                </div>
              ))}
            </div>
          </div>

          {/* 03 · Detalles */}
          <div className="nm-seccion">
            <div className="nm-seccion-label">03 · Detalles del evento</div>

            <div className="nm-grid" style={{ marginBottom: "1rem" }}>
              <div className="nm-campo">
                <label>Fecha del evento <span className="req">*</span></label>
                <input
                  type="date"
                  value={form.fecha}
                  onChange={handleChange("fecha")}
                />
              </div>
              <div className="nm-campo">
                <label>Ciudad / Localidad <span className="req">*</span></label>
                <input
                  type="text"
                  placeholder="¿Dónde es el evento?"
                  value={form.ciudad}
                  onChange={handleChange("ciudad")}
                />
              </div>
            </div>

            <div className="nm-campo" style={{ marginBottom: "1rem" }}>
              <label>Salón o lugar (si ya lo tenés)</label>
              <input
                type="text"
                placeholder="Nombre del salón o lugar"
                value={form.salon}
                onChange={handleChange("salon")}
              />
            </div>

            <div className="nm-campo">
              <label>Cantidad estimada de personas <span className="req">*</span></label>
              <div className="nm-rango-display">
                <span className="nm-rango-valor">{form.invitados}</span>
                <span className="nm-rango-etiqueta">personas</span>
              </div>
              <input
                className="nm-slider"
                type="range"
                min={30}
                max={800}
                step={10}
                value={form.invitados}
                style={{ "--pct": `${pct}%` }}
                onChange={handleSlider}
              />
            </div>
          </div>

          {/* 04 · Bebidas */}
          <div className="nm-seccion">
            <div className="nm-seccion-label">04 · Preferencias de bebidas</div>
            <div className="nm-grid nm-grid-1">
              <div className="nm-campo">
                <label>Marcas o bebidas que querés (si tenés idea)</label>
                <textarea
                  placeholder="Ej: Johnnie Walker Black, Aperol, espumantes... Si no sabés, lo charlamos."
                  value={form.marcas}
                  onChange={handleChange("marcas")}
                />
              </div>
              <div className="nm-campo">
                <label>Estilo de la barra</label>
                <select value={form.estilo} onChange={handleChange("estilo")}>
                  {ESTILOS_BARRA.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 05 · Presupuesto */}
          <div className="nm-seccion">
            <div className="nm-seccion-label">05 · Presupuesto y contacto</div>
            <div className="nm-grid" style={{ marginBottom: "1rem" }}>
              <div className="nm-campo">
                <label>Rango de inversión estimado</label>
                <select value={form.presupuesto} onChange={handleChange("presupuesto")}>
                  {RANGOS_PRESUPUESTO.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
              </div>
              <div className="nm-campo">
                <label>¿Cómo nos conociste?</label>
                <select value={form.canal} onChange={handleChange("canal")}>
                  {CANALES.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="nm-campo">
              <label>¿Algo más que quieras contarme?</label>
              <textarea
                placeholder="Temática, servicios extra, dudas, lo que sea..."
                value={form.extras}
                onChange={handleChange("extras")}
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <p style={{
              color: "#ff6b6b",
              fontSize: "0.78rem",
              fontFamily: "var(--fuente-sans, 'Montserrat', sans-serif)",
              marginBottom: "1rem",
              paddingLeft: "0.5rem",
              borderLeft: "2px solid #ff6b6b",
            }}>
              {error}
            </p>
          )}

          {/* Aviso personalización */}
          <div className="nm-aviso">
            <IconoInfo />
            <p className="nm-aviso-texto">
              <strong>Sin paquetes genéricos.</strong> Me ocupo personalmente de cada cliente.
              Una vez que reciba tus datos te contacto para charlar y armar una propuesta 100% a medida:
              marcas, cantidad, salón, horarios y todo lo que necesitás.
            </p>
          </div>

          {/* Botón enviar */}
          <button className="nm-btn-enviar" onClick={handleEnviar}>
            <IconoWhatsapp />
            Enviar consulta por WhatsApp
            <IconoFlecha className="nm-flecha" />
          </button>

          <p className="nm-privacidad">
            Tu info es solo para armar tu propuesta. <span>Sin spam, sin listas.</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default ModalConsulta;