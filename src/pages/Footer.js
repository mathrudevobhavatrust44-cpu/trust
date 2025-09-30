import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaChevronDown, FaInstagram, FaYoutube, FaFacebookF, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path, scrollToId = null) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
      setLoading(false);
      if (scrollToId) {
        setTimeout(() => {
          const section = document.getElementById(scrollToId);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }, 200);
  };

  const handleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="ganesh1-homepage-footer">
      <div className="ganesh1-footer-section">
        <div className="ganesh1-footer-left ganesh1-footer-left-final">
          <div className="ganesh1-footer-left-top-final">
            <img
              src="/Images/logo.svg"
              alt="Footer Logo"
              className="ganesh1-footer-image-final"
            />
          </div>
          <br />
          <span>
            Taking on new website projects<br />
            to help solve your toughest<br />
            development challenges. Let's<br />
            work together to build your<br />
            website with creativity and reliability.
          </span>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "product" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("product")}>
            <span className="underline-heading">Quick Links</span>
            <span className={`ganesh1-toggle-icon ganesh1-mobile-only ${openSection === "product" ? "open" : ""}`}>
              <FaChevronDown />
            </span>
          </div>
          <ul className="ganesh1-sub-list">
            <li>About</li>
            <li>Donation</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "support" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("support")}>
            <span className="underline-heading">Support</span>
            <span className={`ganesh1-toggle-icon ganesh1-mobile-only ${openSection === "support" ? "open" : ""}`}>
              <FaChevronDown />
            </span>
          </div>
          <ul className="ganesh1-sub-list">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={`ganesh1-footer-list-item ganesh1-mobile-accordion ${openSection === "contact" ? "open" : ""}`}>
          <div className="ganesh1-footer-list-header" onClick={() => handleAccordion("contact")}>
            <span className="underline-heading">Contact Us</span>
            <span className={`ganesh1-toggle-icon ganesh1-mobile-only ${openSection === "contact" ? "open" : ""}`}>
              <FaChevronDown />
            </span>
          </div>
          <div className="ganesh1-contact-details">
            <p><FaPhoneAlt /> +91 1234567890</p>
            <p><FaEnvelope /> Test@gmail.com</p>
          </div>
          <div className="ganesh1-footer-social">
            <span className="underline-heading social-media-heading">Social Media</span>
            <div className="ganesh1-social-icons">
              <a href="https://www.instagram.com/chvapps/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.instagram.com/chvapps/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/chvapps/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
