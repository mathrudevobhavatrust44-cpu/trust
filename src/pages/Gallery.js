import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaImages, FaSearch, FaTimes, FaChevronLeft, FaChevronRight, FaFilter } from "react-icons/fa";
import "./Gallery.css";

const data = [
  { id: 1, src: "/Images/donation.jpg", title: "Education Drive", tag: "Education" },
  { id: 2, src: "/Images/donation1.jpg", title: "Community Kitchen", tag: "Food" },
  { id: 3, src: "/Images/donation2.jpg", title: "Safe Shelter", tag: "Shelter" },
  { id: 4, src: "/Images/about-block-img.jpg", title: "Care With Dignity", tag: "Volunteers" },
  { id: 5, src: "/Images/banner-2-slide-1.jpg", title: "Health Camp", tag: "Events" },
  { id: 6, src: "/Images/banner-2-slide-2.jpg", title: "Festive Meals", tag: "Food" },
  { id: 7, src: "/Images/banner-2-slide-3.jpg", title: "Reading Circle", tag: "Education" },
  { id: 8, src: "/Images/about-img.png", title: "Home Care Support", tag: "Shelter" }
];

const tags = ["All", "Education", "Food", "Shelter", "Events", "Volunteers"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const wrapperRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.15 });
    if (wrapperRef.current) io.observe(wrapperRef.current);
    return () => io.disconnect();
  }, []);

  const items = useMemo(() => {
    const base = active === "All" ? data : data.filter(d => d.tag === active);
    if (!q.trim()) return base;
    const s = q.toLowerCase();
    return base.filter(d => d.title.toLowerCase().includes(s) || d.tag.toLowerCase().includes(s));
  }, [active, q]);

  const openAt = (idx) => setLightbox({ open: true, index: idx });
  const close = () => setLightbox({ open: false, index: 0 });
  const prev = () => setLightbox(s => ({ open: true, index: (s.index - 1 + items.length) % items.length }));
  const next = () => setLightbox(s => ({ open: true, index: (s.index + 1) % items.length }));

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open, items.length]);

  return (
    <div className="gallery-page">
      <Navbar />
      <section className={`gallery-section1 ${show ? "show" : ""}`} ref={wrapperRef}>
        <div className="gal-container">
          <div className="gal-head">
            <div className="gal-titlewrap">
              <span className="gal-sub"><FaImages /> Gallery</span>
              <h1 className="gal-title">Moments of care and hope</h1>
              <p className="gal-desc">Snapshots from education, food, and shelter initiatives for seniors.</p>
            </div>
            <div className="gal-actions">
              <div className="gal-filter">
                <FaFilter className="gal-filter-ico" />
                <div className="gal-tags">
                  {tags.map(t => (
                    <button
                      key={t}
                      className={`gal-tag ${active === t ? "active" : ""}`}
                      onClick={() => setActive(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="gal-search">
                <FaSearch className="gal-search-ico" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search photos"
                  aria-label="Search photos"
                />
              </div>
            </div>
          </div>

          <div className="gal-grid">
            {items.map((it, i) => (
              <figure className="gal-card" key={it.id} style={{ animationDelay: `${i * 0.03}s` }}>
                <div className="gal-media" onClick={() => openAt(i)}>
                  <img src={it.src} alt={it.title} />
                  <span className="gal-chip">{it.tag}</span>
                </div>
                <figcaption className="gal-cap">{it.title}</figcaption>
              </figure>
            ))}
            {!items.length && (
              <div className="gal-empty">No results</div>
            )}
          </div>
        </div>

        {lightbox.open && items[lightbox.index] && (
          <div className="gal-lightbox" onClick={close}>
            <button className="gal-x" onClick={close}><FaTimes /></button>
            <button className="gal-nav gal-left" onClick={(e) => { e.stopPropagation(); prev(); }}><FaChevronLeft /></button>
            <button className="gal-nav gal-right" onClick={(e) => { e.stopPropagation(); next(); }}><FaChevronRight /></button>
            <div className="gal-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={items[lightbox.index].src} alt={items[lightbox.index].title} />
              <div className="gal-lightbox-meta">
                <span className="gal-lightbox-tag">{items[lightbox.index].tag}</span>
                <h3 className="gal-lightbox-title">{items[lightbox.index].title}</h3>
              </div>
            </div>
          </div>
        )}

        <span className="gal-bubble b1" />
        <span className="gal-bubble b2" />
        <span className="gal-bubble b3" />
      </section>
      <Footer />
    </div>
  );
}
