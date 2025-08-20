import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { FiMail, FiInstagram, FiGithub, FiMenu, FiX } from "react-icons/fi";
import WhatsAppButton from "./components/WhatsAppButton";

const proyectos = [
  { id: 1, titulo: "Broshur", imagenes: [
    `${import.meta.env.BASE_URL}img/broshur 1.jpg`,
    `${import.meta.env.BASE_URL}img/broshur 2.jpg`,
    `${import.meta.env.BASE_URL}img/broshur 3.jpg`,
    `${import.meta.env.BASE_URL}img/broshur 4.jpg`
  ], descripcion: "Folletos y brochures con enfoque editorial." },

  { id: 2, titulo: "Cerveza Nómada", imagenes: [
    `${import.meta.env.BASE_URL}img/nomada beer.jpg`,
    `${import.meta.env.BASE_URL}img/cerveza nomada2.jpg`,
    `${import.meta.env.BASE_URL}img/cerveza nomada3.png`
  ], descripcion: "Branding y packaging para cerveza artesanal." },

  { id: 3, titulo: "Chocolate Bolivianatte", imagenes: [
    `${import.meta.env.BASE_URL}img/bolivianatte mkp 1.jpg`,
    `${import.meta.env.BASE_URL}img/bolivianatte mkp 2.jpg`,
    `${import.meta.env.BASE_URL}img/bolivianatte mkp 3.jpg`
  ], descripcion: "Packaging y material promocional." },

  { id: 4, titulo: "Album Cover", imagenes: [
    `${import.meta.env.BASE_URL}img/album cov1.png`,
    `${import.meta.env.BASE_URL}img/album cov2-min.png`,
    `${import.meta.env.BASE_URL}img/album cov3-min.png`,
    `${import.meta.env.BASE_URL}img/album cov4-min.png`
  ], descripcion: "Diseño de portadas de álbumes y arte musical." }
];

const testimonials = [
  { name: "San Pedro", text: "Transformó nuestra identidad en algo memorable. Altamente recomendable." },
  { name: "Legacy", text: "Atención al detalle y propuestas creativas que realmente funcionan." },
  { name: "Ria", text: "Entrega puntual y estética impecable." }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(null);
  const [formStatus, setFormStatus] = useState("");

  function openCase(project) {
    setActiveCase(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function closeCase() {
    setActiveCase(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("Enviando...");
    setTimeout(() => {
      setFormStatus("¡Mensaje enviado! Gracias 🙂");
      e.target.reset();
      setTimeout(() => setFormStatus(""), 3500);
    }, 900);
  }

  return (
    <div className="site">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="brand">Natastock</div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="nav-icons">
          <a href="mailto:natusanchez12@gmail.com" title="Email"><FiMail /></a>
          <a href="https://www.instagram.com/natastock" title="Instagram"><FiInstagram /></a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu toggle">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-inner">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: 0.2 }}>
            Natastock — Diseño gráfico & Branding
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            Identidad visual, packaging y dirección de arte. Creaciones con intención, estética y estrategia.
          </motion.p>

          <div className="hero-ctas">
            <a className="btn primary" href="#projects">Ver trabajos destacados</a>
            <a className="btn ghost" href="#contact">Contactar</a>
          </div>

          <motion.div className="hero-feature" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale:1, opacity:1 }} transition={{ delay: 0.6 }}>
            <div className="feature-card">
              <img src={`${import.meta.env.BASE_URL}img/album cov2-min.png`} alt="Destacado" />
              <div className="feature-tag">Proyecto destacado</div>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        <section id="about" className="about">
          <div className="about-inner">
            <div className="about-text">
              <h2>Hola, soy Natalia</h2>
              <p className="lead">Diseñadora gráfica especializada en branding, packaging y dirección de arte. Me interesa transformar ideas en piezas visuales que cuenten historias y conecten con el público.</p>
              <p>Trabajo tanto en proyectos conceptuales como en producciones listas para impresión y medios digitales. Me apasiona experimentar con tipografía, color y composición para lograr identidades memorables.</p>

              <ul className="skills">
                <li>Branding & Identidad</li>
                <li>Packaging</li>
                <li>Dirección de arte</li>
                <li>Ilustración & Collage</li>
              </ul>

              <div className="cta-row">
                <a className="btn primary" href="#contact">Solicitar presupuesto</a>
                <a className="btn outline" href="#projects">Ver portafolio</a>
              </div>
            </div>

            <div className="about-visual">
              <div className="portrait-frame">
                <div className="portrait-glass">
                  <img src={`${import.meta.env.BASE_URL}img/profile.jpg`} alt="Natalia - diseñadora" />
                </div>
                <div className="portrait-stamp">Diseñadora Gráfica</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <h2>Servicios</h2>
          <div className="services-grid">
            <motion.div className="service" whileHover={{ y:-6 }} transition={{ type:"spring", stiffness: 200 }}>
              <h3>Branding</h3>
              <p>Estrategia de marca, logotipo, guía visual y aplicaciones.</p>
            </motion.div>
            <motion.div className="service" whileHover={{ y:-6 }} transition={{ type:"spring", stiffness: 200 }}>
              <h3>Packaging</h3>
              <p>Concepto, estructura y diseño para productos físicos.</p>
            </motion.div>
            <motion.div className="service" whileHover={{ y:-6 }} transition={{ type:"spring", stiffness: 200 }}>
              <h3>Editorial</h3>
              <p>Maquetación, folletos, portadas y piezas impresas.</p>
            </motion.div>
            <motion.div className="service" whileHover={{ y:-6 }} transition={{ type:"spring", stiffness: 200 }}>
              <h3>Dirección de Arte</h3>
              <p>Dirección creativa para campañas y producción fotográfica.</p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>Proyectos destacados</h2>
          <div className="masonry">
            {proyectos.map(p => (
              <motion.article key={p.id} className="project-card" whileHover={{ scale: 1.03 }} onClick={() => openCase(p)} role="button" tabIndex={0}>
                <img src={p.imagenes[0]} alt={p.titulo} />
                <div className="project-meta">
                  <h3>{p.titulo}</h3>
                  <p>{p.descripcion}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <h2>Testimonios</h2>
          <div className="testi-wrap">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500 }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              className="testi-swiper"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <blockquote className="testimonial">
                    <p>"{t.text}"</p>
                    <footer>— {t.name}</footer>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-inner">
            <div className="contact-info">
              <h2>Contacto</h2>
              <p>¿Tienes un proyecto o idea? Hablemos.</p>
              <ul className="contact-list">
                <li><FiMail /> <a href="mailto:natusanchez12@gmail.com">natusanchez12@gmail.com</a></li>
                <li><FiInstagram /> <a href="https://www.instagram.com/natastock">@natastock</a></li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Tu nombre" required />
              <input type="email" name="email" placeholder="Tu correo" required />
              <textarea name="message" rows="6" placeholder="Cuéntame sobre el proyecto..." required />
              <div className="form-row">
                <button type="submit" className="btn primary">Enviar</button>
                <div className="form-status">{formStatus}</div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Natalia — Natastock</div>
        <div className="small-muted">Diseño y dirección de arte</div>
      </footer>
      <WhatsAppButton />

      {activeCase && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-inner">
            <button className="modal-close" onClick={closeCase} aria-label="Cerrar">✕</button>
            <h3>{activeCase.titulo}</h3>
            <p className="muted">{activeCase.descripcion}</p>
            <div className="modal-gallery">
              {activeCase.imagenes.map((src, idx) => (
                <div className="modal-img" key={idx}>
                  <img src={src} alt={`${activeCase.titulo} ${idx+1}`} />
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <a className="btn outline" href="#contact">Solicitar este estilo</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
