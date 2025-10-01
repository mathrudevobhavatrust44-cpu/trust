import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`} ref={navRef}>
      <div className="navbar-backdrop" />
      <div className="navbar-container">
        <div className="logo-container" onClick={() => handleLinkClick('/')}>
          <img src="/Images/logo1.webp" alt="Logo" className="logo" />
          <span className="brand">Matrudevobhava Trust</span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>
            <span>Home</span>
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}>
            <span>About</span>
          </Link>
          <Link to="/donation" className={isActive('/donation') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/donation'); }}>
            <span>Donation</span>
          </Link>
          <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/gallery'); }}>
            <span>Gallery</span>
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}>
            <span>Contact</span>
          </Link>
        </div>

        <div className="right-section">
          <div className="right-inner">
            <button className="join-button desktop-only" onClick={() => handleLinkClick('/donation')}>Donate Now</button>
            <button
              className={`menu-icon ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <span className="menu-bar top" />
              <span className="menu-bar middle" />
              <span className="menu-bar bottom" />
            </button>
          </div>
        </div>
      </div>
      <div className={`active-indicator ${location.pathname.replace('/', '') || 'home'}`} />
    </nav>
  );
}

export default Navbar;
