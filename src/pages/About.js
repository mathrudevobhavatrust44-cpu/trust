import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaHeart, FaHandsHelping, FaCheck, FaAngleDoubleRight, FaPhoneAlt, FaChild, FaUsers, FaGift, FaGlobeAmericas, FaBullseye, FaEye, FaHistory } from "react-icons/fa";
import './About.css';

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
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const items = [
    { icon: <FaChild />, number: 260, label: 'Total Happy Children' },
    { icon: <FaUsers />, number: 110, label: 'Total Our Volunteer' },
    { icon: <FaGift />, number: 190, label: 'Our Products & Gifts' },
    { icon: <FaGlobeAmericas />, number: 560, label: 'Worldwide Donor' }
  ];
  return (
    <section className={`about-stats-wrapper ${show ? 'show' : ''}`} ref={ref}>
      <div className="about-stats-container">
        <div className="about-stats-row">
          {items.map((it, i) => (
            <div className="about-stats-card" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="about-stats-icon">{it.icon}</div>
              <div className="about-stats-number">
                {show ? <StatsCounter end={it.number} duration={1400 + i * 200} /> : 0}<span>+</span>
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
  const [active, setActive] = useState('mission');
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const tabs = [
    {
      key: 'mission',
      title: 'Our Mission',
      icon: <FaBullseye />,
      image: '/Images/mission.jpg',
      heading: 'Where can I get some?',
      paragraphs: [
        'Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.'
      ],
      list: [
        'Suspendisse pulvinar orci vitae condimentum feugiat.',
        'Curabitur cursus sapien eu ex cursus ultrices ac nec purus.',
        'Duis vehicula elit ut placerat rutrum.',
        'Nunc et felis non neque vehicula porttitor.'
      ]
    },
    {
      key: 'vision',
      title: 'Our Vision',
      icon: <FaEye />,
      image: '/Images/vision.jpg',
      heading: 'Our Vision',
      paragraphs: [
        'Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.'
      ],
      list: [
        'Suspendisse pulvinar orci vitae condimentum feugiat.',
        'Curabitur cursus sapien eu ex cursus ultrices ac nec purus.',
        'Duis vehicula elit ut placerat rutrum.',
        'Nunc et felis non neque vehicula porttitor.',
        'Suspendisse pulvinar orci vitae condimentum feugiat.',
        'Curabitur cursus sapien eu ex cursus ultrices ac nec purus.',
        'Duis vehicula elit ut placerat rutrum.',
        'Nunc et felis non neque vehicula porttitor.'
      ]
    },
    {
      key: 'history',
      title: 'Our History',
      icon: <FaHistory />,
      image: '/Images/history.jpg',
      heading: 'Our History',
      paragraphs: [
        'Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.',
        'Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.',
        'Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.'
      ],
      list: []
    }
  ];
  const current = tabs.find(t => t.key === active);
  return (
    <section className={`about-section3-wrapper ${show ? 'show' : ''}`} ref={ref}>
      <div className="about-section3-container">
        <div className="a3-head">
          <div className="a3-left">
            <span className="a3-sub">Our Organization History</span>
            <h2 className="a3-title">Charitics Information of Event Schedule</h2>
          </div>
          <a href="/donation" className="a3-btn">
            <FaAngleDoubleRight />
            Donate Now
          </a>
        </div>
        <div className="a3-tabs">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`a3-tab ${active === t.key ? 'active' : ''}`}
              onClick={() => setActive(t.key)}
            >
              <span className="a3-tab-ico">{t.icon}</span>
              {t.title}
              <i />
            </button>
          ))}
        </div>
        <div className="a3-panel">
          <div className="a3-img">
            <img src={current.image} alt={current.title} />
          </div>
          <div className="a3-copy">
            <h3 className="a3-panel-title">{current.heading}</h3>
            {current.paragraphs.map((p, i) => (
              <p key={i} className="a3-panel-p">{p}</p>
            ))}
            {current.list.length > 0 && (
              <ul className="a3-list">
                {current.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <span className="a3-bubble a3-b1" />
      <span className="a3-bubble a3-b2" />
    </section>
  );
}

function About() {
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const handleButtonClick = (section) => {
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
                    When people unite with empathy and shared purpose, real change begins. Helping hands can bridge gaps,
                    spark hope, and create a world where no one feels left behind.
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
                  <button className="home-section2-btn" onClick={() => handleLinkClick('/donation')}>
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
                <button style={{ display: 'none' }} onClick={() => handleButtonClick('about')} />
              </div>
            </div>
          </div>
        </section>
        <AboutStatsSection />
        <AboutSection3 />
      </div>
      <Footer />
    </div>
  );
}

export default About;
