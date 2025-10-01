import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaHeart, FaHandsHelping, FaCheck, FaAngleDoubleRight, FaPhoneAlt, FaChild, FaUsers, FaGift, FaGlobeAmericas, FaBullseye, FaEye, FaHistory } from "react-icons/fa";
import "./About.css";

function StatsCounter({ end, duration = 1500 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return <>{val.toLocaleString()}</>;
}

function AboutStatsSection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setShow(true);
    }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const items = [
    { icon: <FaChild />, number: 260, label: "Total Happy Children" },
    { icon: <FaUsers />, number: 110, label: "Total Our Volunteer" },
    { icon: <FaGift />, number: 190, label: "Our Products & Gifts" },
    { icon: <FaGlobeAmericas />, number: 560, label: "Worldwide Donor" }
  ];
  return (
    <section className={`about-stats-wrapper ${show ? "show" : ""}`} ref={ref}>
      <div className="about-stats-container">
        <div className="about-stats-row">
          {items.map((it, i) => (
            <div className="about-stats-card" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="about-stats-icon">{it.icon}</div>
              <div className="about-stats-number">
                {show ? <StatsCounter end={it.number} duration={1400 + i * 200} /> : 0}
                <span>+</span>
              </div>
              <div className="about-stats-text">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
      <span className="about-stats-bubble b1" />
      <span className="about-stats-bubble b2" />
    </section>
  );
}

function AboutSection3() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setShow(true);
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const dist = Array.from({ length: 11 }, (_, i) => `/Images/distribution${i + 1}.jpg`);
  const evts = ["/Images/event1.jpg", "/Images/event2.jpg", "/Images/event3.jpg"];
  const pool = [...dist, ...evts];
  const pick = n => [...pool].sort(() => Math.random() - 0.5).slice(0, n);
  const blocks = [
    {
      key: "mission",
      title: "Our Mission",
      icon: <FaBullseye />,
      heading: "Serve With Dignity, Act With Impact",
      paragraphs: [
        "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla.",
        "Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt."
      ],
      list: [
        "Programs designed around real community needs",
        "Transparent reporting and measurable outcomes",
        "Local partnerships for long-term change"
      ],
      images: pick(2)
    },
    {
      key: "vision",
      title: "Our Vision",
      icon: <FaEye />,
      heading: "A Community Where Kindness Scales",
      paragraphs: [
        "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla.",
        "Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin."
      ],
      list: [
        "Access, opportunity, and dignity for all",
        "Evidence-led initiatives sustained by volunteers",
        "Inclusive ecosystems that uplift every family"
      ],
      images: pick(2)
    },
    {
      key: "history",
      title: "Our History",
      icon: <FaHistory />,
      heading: "Grounded In Service Since Day One",
      paragraphs: [
        "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi.",
        "Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu.",
        "Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus."
      ],
      list: [],
      images: pick(2)
    }
  ];
  return (
    <section className={`about-section3-wrapper ${show ? "show" : ""}`} ref={ref}>
      <div className="about-section3-container">
        {blocks.map((b, idx) => (
          <div className="a3-block" key={b.key} style={{ animationDelay: `${idx * 0.06}s` }}>
            <div className="a3-block-head">
              <div className="a3-chip">
                <span className="a3-chip-ico">{b.icon}</span>
                <span className="a3-chip-text">{b.title}</span>
              </div>
              <h2 className="a3-block-title">{b.heading}</h2>
            </div>
            <div className="a3-block-body">
              <div className="a3-copy">
                {b.paragraphs.map((p, i) => (
                  <p className="a3-p" key={i}>{p}</p>
                ))}
                {b.list.length > 0 && (
                  <ul className="a3-ul">
                    {b.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="a3-gallery">
                {b.images.map((src, i) => (
                  <div className="a3-img-wrap" key={i}>
                    <img src={src} alt={`${b.title} ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="a3-bubble a3-b1" />
      <span className="a3-bubble a3-b2" />
    </section>
  );
}

function AboutSection4() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setShow(true);
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const people = [
    { name: "Nomisi Kumari", role: "Managing Trusty" },
    { name: "Nomisi Yerukulamma", role: "Associate Trusty" },
    { name: "Kuchipudi Varadayya", role: "Executive Director" },
    { name: "Kuchipudi Ramadevi", role: "Associate Executive Director" },
    { name: "Dola Chiranjeevulu", role: "Finance Director" }
  ];
  const initials = s => s.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <section className={`about-section4-wrapper ${show ? "show" : ""}`} ref={ref}>
      <div className="about-section4-container">
        <div className="a4-head">
          <div className="a4-left">
            <span className="a4-sub">Trust Leadership</span>
            <h2 className="a4-title">People Behind The Mission</h2>
            <p className="a4-desc">Our trust members guide the vision, uphold transparency, and keep every initiative people-first.</p>
          </div>
          <a href="/donation" className="a4-cta">Support Our Work</a>
        </div>
        <div className="a4-cards">
          {people.map((p, i) => (
            <div className="a4-card" key={p.name} style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="a4-card-head" />
              <div className="a4-avatar">
                <span>{initials(p.name)}</span>
              </div>
              <div className="a4-card-body">
                <h3 className="a4-name">{p.name}</h3>
                <div className="a4-role">{p.role}</div>
                <div className="a4-tags">
                  <span className="a4-tag">Trusted</span>
                  <span className="a4-tag">Community</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="a4-note">
          <div className="a4-note-pill">Open to Volunteers</div>
          <p className="a4-note-text">Want to contribute your time or skills? Share your interest and we’ll get in touch.</p>
          <a href="/contact" className="a4-note-btn">I’d Like To Help</a>
        </div>
      </div>
      <span className="a4-bubble a4-b1" />
      <span className="a4-bubble a4-b2" />
      <span className="a4-bubble a4-b3" />
    </section>
  );
}

function AboutSection5() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const dist = Array.from({ length: 11 }, (_, i) => `/Images/distribution${i + 1}.jpg`);
  const evts = ["/Images/event1.jpg", "/Images/event2.jpg", "/Images/event3.jpg"];
  const pool = [...dist, ...evts];
  const rand = () => pool[Math.floor(Math.random() * pool.length)];
  const programs = [
    { key: "education", title: "Education Support", desc: "Scholarships, school kits, and mentoring to keep children learning without interruption.", points: ["Scholarship drives", "After-school mentoring", "Digital literacy"], img: rand(), metric: { label: "Students Assisted", value: 420 } },
    { key: "health", title: "Health & Nutrition", desc: "Camp-based screenings, nutrition kits, and referrals for timely medical care.", points: ["Health camps", "Nutrition kits", "Maternal care support"], img: rand(), metric: { label: "Families Reached", value: 780 } },
    { key: "relief", title: "Community Relief", desc: "Rapid response during crises with essentials, counseling, and rehabilitation.", points: ["Emergency kits", "Counseling", "Rehabilitation aid"], img: rand(), metric: { label: "Relief Drives", value: 36 } }
  ];
  return (
    <section className={`about-section5-wrapper ${show ? "show" : ""}`} ref={ref}>
      <div className="about-section5-container">
        <div className="a5-head">
          <div className="a5-left">
            <span className="a5-sub">What We Do</span>
            <h2 className="a5-title">Programs That Create Lasting Impact</h2>
            <p className="a5-desc">A quick view of our core initiatives and the change they bring to the communities we serve.</p>
          </div>
          <div className="a5-cta-group">
            <a href="/contact" className="a5-cta primary">Partner With Us</a>
            <a href="/brochure.pdf" className="a5-cta ghost">Download Brochure</a>
          </div>
        </div>
        <div className="a5-grid">
          {programs.map((p, i) => (
            <article className="a5-card" key={p.key} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="a5-media">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="a5-metric">
                  <span className="a5-metric-val">{p.metric.value}</span>
                  <span className="a5-metric-lab">{p.metric.label}</span>
                </div>
              </div>
              <div className="a5-body">
                <h3 className="a5-card-title">{p.title}</h3>
                <p className="a5-card-desc">{p.desc}</p>
                <ul className="a5-list">
                  {p.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                </ul>
                <div className="a5-actions">
                  <a href="/donation" className="a5-btn">Support This</a>
                  <a href={`/programs/${p.key}`} className="a5-link">Learn More</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="a5-footer">
          <div className="a5-highlight">
            <strong>Volunteer onboarding every month.</strong> Share your skills and join a project that fits your time.
          </div>
          <a href="/volunteer" className="a5-cta secondary">Join As Volunteer</a>
        </div>
      </div>
      <span className="a5-bubble a5-b1" />
      <span className="a5-bubble a5-b2" />
    </section>
  );
}

function About() {
  const navigate = useNavigate();
  const handleLinkClick = path => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const handleButtonClick = section => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) sectionElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="about">
      <Navbar />
      <div className="about-entry">
        <section className="home-section2-wrapper" id="about">
          <div className="home-section2-container">
            <div className="home-section2-row">
              <div className="home-section2-left">
                <div className="home-section2-img-wrapper">
                  <img src="/Images/about-img.png" alt="About" className="home-section2-main-img" />
                  <img src="/Images/about-img-vector-1.svg" alt="Vector" className="home-section2-vector-img" />
                </div>
              </div>
              <div className="home-section2-right">
                <div className="home-section2-heading">
                  <span className="home-section2-subtitle">
                    <FaHeart className="icon" /> About US
                  </span>
                  <h2 className="home-section2-title">Helping Each Other can Make World Better</h2>
                  <p className="home-section2-description">
                    When people unite with empathy and shared purpose, real change begins. Helping hands can bridge gaps, spark hope, and create a world where no one feels left behind.
                  </p>
                </div>
                <div className="home-section2-info-block">
                  <div className="info-left">
                    <div className="info-title">
                      <div className="info-icon">
                        <FaHandsHelping className="icon" />
                      </div>
                      <h3>Start Helping Team</h3>
                    </div>
                    <ul className="info-list">
                      <li>
                        <span className="tick-circle">
                          <FaCheck className="tick-icon" />
                        </span>
                        There are many variations of solve
                      </li>
                    </ul>
                  </div>
                  <div className="info-right">
                    <img src="/Images/about-block-img.jpg" alt="Block" />
                  </div>
                </div>
                <div className="home-section2-bottom">
                  <button className="home-section2-btn" onClick={() => handleLinkClick("/donation")}>
                    <span className="btn-icon">
                      <FaAngleDoubleRight className="small" />
                      <FaAngleDoubleRight className="big" />
                    </span>
                    Explore More
                  </button>
                  <div className="call-block">
                    <div className="call-icon">
                      <FaPhoneAlt className="icon" />
                    </div>
                    <div className="call-text">
                      <span className="call-heading">Call Any Time</span>
                      <a href="tel:+911234567890">+91 1234567890</a>
                    </div>
                  </div>
                </div>
                <button style={{ display: "none" }} onClick={() => handleButtonClick("about")} />
              </div>
            </div>
          </div>
        </section>
        <AboutStatsSection />
        <AboutSection3 />
        <AboutSection4 />
        <AboutSection5 />
      </div>
      <Footer />
    </div>
  );
}

export default About;
