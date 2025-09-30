import React, { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt, FaAngleDoubleRight, FaUser, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaRegClipboard, FaPaperPlane, FaCheckCircle, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';



function Contact() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  /* section 1 */
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  /* end of section 1 code */



  /* section 2 */
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const validate = (f) => {
    const e = {};
    if (!f.name.trim()) e.name = 'Please enter your name';
    if (!f.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email';
    if (!f.phone.trim() || !/^[0-9+\-\s]{7,15}$/.test(f.phone)) e.phone = 'Enter a valid phone';
    if (!f.subject.trim()) e.subject = 'Please add a subject';
    if (!f.message.trim() || f.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    return e;
  };

  const onChange = (k) => (ev) => setForm((p) => ({ ...p, [k]: ev.target.value }));
  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  /* end of section 2 code */



  /* section 3 */
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  /* end of section 3 code */


  return (
    <div className="contact-page">
      <Navbar />
      <section className={`contact-section1-wrapper ${show ? 'show' : ''}`} ref={ref}>
        <div className="contact-section1-container">
          <div className="c1-head">
            <span className="c1-subtitle">Contact</span>
            <h1 className="c1-title">We’d love to hear from you</h1>
            <p className="c1-desc">Questions, donations, partnerships, or volunteering—reach out and we’ll get back quickly.</p>
          </div>

          <div className="c1-grid">
            <a className="c1-card" href="tel:+911234567890">
              <div className="c1-icon"><FaPhoneAlt /></div>
              <div className="c1-copy">
                <h3 className="c1-card-title">Call Us</h3>
                <p className="c1-card-desc">+91 1234567890</p>
              </div>
              <div className="c1-chevron"><FaAngleDoubleRight /></div>
            </a>

            <a className="c1-card" href="mailto:care@yourngo.org">
              <div className="c1-icon"><FaEnvelope /></div>
              <div className="c1-copy">
                <h3 className="c1-card-title">Email</h3>
                <p className="c1-card-desc">care@yourngo.org</p>
              </div>
              <div className="c1-chevron"><FaAngleDoubleRight /></div>
            </a>

            <a className="c1-card" href="https://maps.google.com" target="_blank" rel="noreferrer">
              <div className="c1-icon"><FaMapMarkerAlt /></div>
              <div className="c1-copy">
                <h3 className="c1-card-title">Visit Us</h3>
                <p className="c1-card-desc">Banjara Hills, Hyderabad</p>
              </div>
              <div className="c1-chevron"><FaAngleDoubleRight /></div>
            </a>

            <div className="c1-card">
              <div className="c1-icon"><FaClock /></div>
              <div className="c1-copy">
                <h3 className="c1-card-title">Working Hours</h3>
                <p className="c1-card-desc">Mon–Sat: 9:30 AM – 6:30 PM</p>
              </div>
              <div className="c1-chevron"><FaAngleDoubleRight /></div>
            </div>
          </div>

          <div className="c1-actions">
            <a className="c1-btn c1-btn-primary" href="tel:+911234567890">
              <span className="c1-btn-dot" />
              Call Now
            </a>
            <a className="c1-btn c1-btn-ghost" href="https://wa.me/911234567890" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
        <span className="c1-bubble c1-b1" />
        <span className="c1-bubble c1-b2" />
        <span className="c1-bubble c1-b3" />
      </section>

      <section className={`contact-section2-wrapper ${show ? 'show' : ''}`} ref={ref}>
        <div className="contact-section2-container">
          <div className="c2-grid">
            <div className="c2-left">
              <div className="c2-head">
                <h2 className="c2-title">Send us a message</h2>
                <p className="c2-desc">Share your query, partnership idea, or volunteering interest. We usually reply within one business day.</p>
              </div>

              <form className="c2-form" onSubmit={onSubmit} noValidate>
                <div className={`c2-field ${errors.name ? 'error' : ''}`}>
                  <span className="c2-ico"><FaUser /></span>
                  <input type="text" placeholder="Your Name" value={form.name} onChange={onChange('name')} aria-label="Your Name" />
                  {errors.name && <span className="c2-err">{errors.name}</span>}
                </div>

                <div className="c2-row">
                  <div className={`c2-field ${errors.email ? 'error' : ''}`}>
                    <span className="c2-ico"><FaEnvelope /></span>
                    <input type="email" placeholder="Email" value={form.email} onChange={onChange('email')} aria-label="Email" />
                    {errors.email && <span className="c2-err">{errors.email}</span>}
                  </div>
                  <div className={`c2-field ${errors.phone ? 'error' : ''}`}>
                    <span className="c2-ico"><FaPhoneAlt /></span>
                    <input type="tel" placeholder="Phone" value={form.phone} onChange={onChange('phone')} aria-label="Phone" />
                    {errors.phone && <span className="c2-err">{errors.phone}</span>}
                  </div>
                </div>

                <div className={`c2-field ${errors.subject ? 'error' : ''}`}>
                  <span className="c2-ico"><FaRegClipboard /></span>
                  <input type="text" placeholder="Subject" value={form.subject} onChange={onChange('subject')} aria-label="Subject" />
                  {errors.subject && <span className="c2-err">{errors.subject}</span>}
                </div>

                <div className={`c2-field c2-textarea ${errors.message ? 'error' : ''}`}>
                  <span className="c2-ico"><FaRegClipboard /></span>
                  <textarea placeholder="Your Message" rows={6} value={form.message} onChange={onChange('message')} aria-label="Your Message" />
                  {errors.message && <span className="c2-err">{errors.message}</span>}
                </div>

                <div className="c2-actions">
                  <button type="submit" className="c2-btn">
                    <span className="c2-btn-icon"><FaPaperPlane /></span>
                    Send Message
                  </button>
                  <a className="c2-btn-ghost" href="https://wa.me/911234567890" target="_blank" rel="noreferrer">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>

                <p className="c2-note">By submitting, you agree to our privacy policy and consent to being contacted.</p>

                {sent && (
                  <div className="c2-toast">
                    <FaCheckCircle />
                    <span>Thanks for reaching out. We’ll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="c2-right">
              <div className="c2-map-wrap">
                <iframe
                  title="NGO Location"
                  src="https://www.google.com/maps?q=Banjara%20Hills%2C%20Hyderabad&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="c2-infocard">
                  <div className="c2-info-line">
                    <FaMapMarkerAlt /><span>Banjara Hills, Hyderabad</span>
                  </div>
                  <div className="c2-info-line">
                    <FaEnvelope /><span>care@yourngo.org</span>
                  </div>
                  <div className="c2-info-line">
                    <FaPhoneAlt /><span>+91 1234567890</span>
                  </div>
                  <div className="c2-info-line">
                    <FaClock /><span>Mon–Sat: 9:30 AM – 6:30 PM</span>
                  </div>
                  <a className="c2-mini-btn" href="/donation">Donate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`contact-section3-wrapper ${show ? 'show' : ''}`} ref={ref}>
        <div className="contact-section3-container">
          <div className="c3-head">
            <h2 className="c3-title">Still need a hand?</h2>
            <p className="c3-desc">Reach us quickly, partner with us, or subscribe for important updates.</p>
          </div>

          <div className="c3-grid">
            <div className="c3-card">
              <div className="c3-card-ico"><FaPhoneAlt /></div>
              <div className="c3-card-copy">
                <h3>Emergency Helpline</h3>
                <p>Call for urgent elder care assistance or guidance.</p>
              </div>
              <div className="c3-card-actions">
                <a href="tel:+911234567890" className="c3-btn">Call Now</a>
                <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="c3-btn-ghost"><FaWhatsapp /> WhatsApp</a>
              </div>
            </div>

            <div className="c3-card">
              <div className="c3-card-ico"><FaRegClipboard /></div>
              <div className="c3-card-copy">
                <h3>Volunteer & Partnerships</h3>
                <p>Join our weekend companionship circles or explore CSR tie-ups.</p>
              </div>
              <div className="c3-card-actions">
                <a href="/contact" className="c3-btn">Get In Touch</a>
                <a href="/about" className="c3-btn-ghost">Learn More</a>
              </div>
            </div>

            <div className="c3-card">
              <div className="c3-card-ico"><FaEnvelope /></div>
              <div className="c3-card-copy">
                <h3>Media & Press</h3>
                <p>For interviews, coverage, and stories highlighting senior care.</p>
              </div>
              <div className="c3-card-actions">
                <a href="mailto:press@yourngo.org" className="c3-btn">Email Us</a>
                <a href="/blog" className="c3-btn-ghost">Press Kit</a>
              </div>
            </div>
          </div>

          <div className="c3-subscribe">
            <form className="c3-sub-form" onSubmit={subscribe} noValidate>
              <div className="c3-input">
                <FaEnvelope className="c3-input-ico" />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Your email address"
                />
              </div>
              <button type="submit" className="c3-sub-btn">
                <FaPaperPlane /> Subscribe
              </button>
            </form>
            {subscribed && (
              <div className="c3-toast">
                <FaCheckCircle />
                <span>Thanks! You’re subscribed.</span>
              </div>
            )}
            <div className="c3-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <span className="c3-bubble c3-b1" />
        <span className="c3-bubble c3-b2" />
        <span className="c3-bubble c3-b3" />
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
