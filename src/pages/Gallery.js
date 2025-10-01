import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css";

const dist = Array.from({ length: 11 }, (_, i) => `/Images/distribution${i + 1}.jpg`);
const events = ["/Images/event1.jpg", "/Images/event2.jpg", "/Images/event3.jpg"];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = useMemo(() => {
    const pool = [...dist, ...events];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        io.unobserve(node);
      }
    }, { threshold: 0.15 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const openAt = (idx) => setLightbox({ open: true, index: idx });
  const close = () => setLightbox({ open: false, index: 0 });
  const prev = () => setLightbox((s) => ({ open: true, index: (s.index - 1 + images.length) % images.length }));
  const next = () => setLightbox((s) => ({ open: true, index: (s.index + 1) % images.length }));

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open, images.length]);

  return (
    <div className="gallery-page">
      <Navbar />
      <section className={`gallery-section1 ${visible ? "show" : ""}`} ref={sectionRef}>
        <div className="gallery-section1-container">
          <header className="gallery-section1-head">
            <div className="gallery-section1-head-inner">
              <h1 className="gallery-section1-title">Trust Gallery</h1>
              <p className="gallery-section1-sub">A formal visual record of distributions, events, and community service.</p>
            </div>
          </header>
          <div className="gallery-section1-grid" role="list">
            {images.map((src, i) => (
              <figure className="gallery-section1-card" role="listitem" key={`${src}-${i}`} style={{ animationDelay: `${i * 0.02}s` }}>
                <button className="gallery-section1-media" onClick={() => openAt(i)} aria-label="Open image">
                  <img src={src} alt="Trust activity" loading="lazy" />
                </button>
              </figure>
            ))}
          </div>
        </div>

        {lightbox.open && images[lightbox.index] && (
          <div className="gallery-section1-lightbox" onClick={close}>
            <button className="gallery-section1-x" onClick={close} aria-label="Close">
              <FaTimes />
            </button>
            <button className="gallery-section1-nav gallery-section1-left" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <button className="gallery-section1-nav gallery-section1-right" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
              <FaChevronRight />
            </button>
            <div className="gallery-section1-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={images[lightbox.index]} alt="Gallery preview" />
            </div>
          </div>
        )}
      </section>

      <section className="gallery-section2">
        <div className="gallery-section2-container">
          <header className="gallery-section2-head">
            <h2 className="gallery-section2-title">Community Highlights</h2>
            <p className="gallery-section2-sub">
              A curated look at trust activities, from health camps to festive events.
            </p>
          </header>
          <div className="gallery-section2-grid" role="list">
            {images.slice(0, 9).map((src, i) => (
              <figure
                className="gallery-section2-card"
                role="listitem"
                key={`s2-${src}-${i}`}
                style={{ animationDelay: `${i * 0.02}s` }}
              >
                <img src={src} alt="Community moment" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
