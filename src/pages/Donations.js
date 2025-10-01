import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaRupeeSign, FaAngleDoubleRight, FaCheckCircle } from "react-icons/fa";
import "./Donations.css";

export default function Donations() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [amount, setAmount] = useState(1500);
  const [custom, setCustom] = useState("");
  const [selected, setSelected] = useState(1500);
  const [freq, setFreq] = useState("One-time");
  const [purpose, setPurpose] = useState("Nutritious Food");
  const [toast, setToast] = useState(null);
  const quick = [300, 700, 1500, 3000, 5000];

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "General Enquiry",
    message: "",
    contactMode: "Phone",
    consent: false,
  });
  const [formToast, setFormToast] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const io1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow1(true); }, { threshold: 0.2 });
    const io2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow2(true); }, { threshold: 0.2 });
    if (ref1.current) io1.observe(ref1.current);
    if (ref2.current) io2.observe(ref2.current);
    return () => { io1.disconnect(); io2.disconnect(); };
  }, []);

  useEffect(() => {
    const val = selected || Number(custom || 0) || 0;
    setAmount(val > 0 ? val : 0);
  }, [selected, custom]);

  const donate = () => {
    const val = amount || quick[2];
    setToast({ amount: val, freq, purpose });
    setTimeout(() => setToast(null), 3500);
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit mobile";
    if (!form.message.trim()) e.message = "Please add a short message";
    if (!form.consent) e.consent = "Please accept to proceed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setFormToast({
      name: form.fullName,
      mode: form.contactMode,
      topic: form.topic,
    });
    setTimeout(() => setFormToast(null), 3500);
    setForm({
      fullName: "",
      email: "",
      phone: "",
      topic: "General Enquiry",
      message: "",
      contactMode: "Phone",
      consent: false,
    });
    setErrors({});
  };

  return (
    <div className="donations-page">
      <Navbar />
      <section className={`donation-section1 ${show1 ? "show" : ""}`} ref={ref1}>
        <div className="ds1-container">
          <div className="ds1-grid-hero">
            <div className="ds1-left">
              <span className="ds1-eyebrow">Donate</span>
              <h1 className="ds1-h1">Fuel meals, care, and dignity</h1>
              <p className="ds1-lead">Your contribution strengthens food, health, and shelter services for vulnerable elders and families.</p>
              <div className="ds1-stats">
                <div className="ds1-stat">
                  <span className="ds1-stat-num">120+</span>
                  <span className="ds1-stat-lab">Villages Reached</span>
                </div>
                <div className="ds1-stat">
                  <span className="ds1-stat-num">5k+</span>
                  <span className="ds1-stat-lab">Beneficiaries</span>
                </div>
                <div className="ds1-stat">
                  <span className="ds1-stat-num">800+</span>
                  <span className="ds1-stat-lab">Women Trained</span>
                </div>
              </div>
              <div className="ds1-trust">
                <span className="ds1-badge">Receipt Provided</span>
                <span className="ds1-sep">•</span>
                <span className="ds1-badge">Quarterly Updates</span>
                <span className="ds1-sep">•</span>
                <span className="ds1-badge">Direct Project Funding</span>
              </div>
            </div>
            <div className="ds1-right">
              <div className="ds1-card">
                <div className="ds1-card-head">
                  <h2 className="ds1-card-title">Make a contribution</h2>
                  <div className="ds1-segment">
                    <button
                      className={`ds1-seg ${freq === "One-time" ? "active" : ""}`}
                      onClick={() => setFreq("One-time")}
                      aria-pressed={freq === "One-time"}
                    >
                      One-time
                    </button>
                    <button
                      className={`ds1-seg ${freq === "Monthly" ? "active" : ""}`}
                      onClick={() => setFreq("Monthly")}
                      aria-pressed={freq === "Monthly"}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
                <div className="ds1-field">
                  <label className="ds1-label">Purpose</label>
                  <div className="ds1-select">
                    <select value={purpose} onChange={(e) => setPurpose(e.target.value)} aria-label="Donation purpose">
                      <option>Nutritious Food</option>
                      <option>Healthcare & Medicines</option>
                      <option>Education Support</option>
                      <option>Safe Shelter</option>
                    </select>
                  </div>
                </div>
                <div className="ds1-amounts">
                  {quick.map((q) => (
                    <button
                      key={q}
                      className={`ds1-chip ${selected === q ? "active" : ""}`}
                      onClick={() => { setSelected(q); setCustom(""); }}
                    >
                      <FaRupeeSign />{q.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="ds1-input-row">
                  <div className="ds1-input">
                    <span className="ds1-input-ico"><FaRupeeSign /></span>
                    <input
                      type="number"
                      min="0"
                      step="100"
                      placeholder="Enter custom amount"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                      aria-label="Custom amount"
                    />
                  </div>
                  <div className="ds1-amount-view">
                    <span className="ds1-amt-lab">Selected</span>
                    <div className="ds1-amt-val"><FaRupeeSign />{(amount || quick[2]).toLocaleString()}</div>
                  </div>
                </div>
                <button className="ds1-btn" onClick={donate}>
                  <span className="ds1-btn-ico"><FaAngleDoubleRight /></span>
                  Donate Now
                </button>
                <p className="ds1-note">Secure processing. You’ll receive an instant acknowledgment and receipt.</p>
              </div>
            </div>
          </div>
        </div>
        <span className="ds1-orb o1" />
        <span className="ds1-orb o2" />
        <span className="ds1-orb o3" />
        {toast && (
          <div className="ds1-toast">
            <FaCheckCircle />
            <span>Thank you for pledging <strong><FaRupeeSign />{toast.amount.toLocaleString()}</strong> ({toast.freq}) towards <strong>{toast.purpose}</strong>.</span>
          </div>
        )}
      </section>

      <section className={`donation-section2 ${show2 ? "show" : ""}`} ref={ref2}>
        <div className="ds2-container">
          <header className="ds2-head">
            <h2 className="ds2-title">Contact Our Team</h2>
            <p className="ds2-sub">Leave your details and we’ll reach out to you shortly.</p>
          </header>
          <form className="ds2-form" onSubmit={submitForm} noValidate>
            <div className="ds2-row">
              <div className={`ds2-field ${errors.fullName ? "error" : ""}`}>
                <label className="ds2-label">Full Name</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Enter your name"
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && <span className="ds2-err">{errors.fullName}</span>}
              </div>
              <div className={`ds2-field ${errors.email ? "error" : ""}`}>
                <label className="ds2-label">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="ds2-err">{errors.email}</span>}
              </div>
            </div>

            <div className="ds2-row">
              <div className={`ds2-field ${errors.phone ? "error" : ""}`}>
                <label className="ds2-label">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit mobile"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <span className="ds2-err">{errors.phone}</span>}
              </div>
              <div className="ds2-field">
                <label className="ds2-label">Topic</label>
                <div className="ds2-select">
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    aria-label="Contact topic"
                  >
                    <option>General Enquiry</option>
                    <option>Donation Support</option>
                    <option>Volunteer</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="ds2-row">
              <div className="ds2-field">
                <label className="ds2-label">Preferred Contact</label>
                <div className="ds2-radio">
                  <label>
                    <input
                      type="radio"
                      name="mode"
                      checked={form.contactMode === "Phone"}
                      onChange={() => setForm({ ...form, contactMode: "Phone" })}
                    />
                    <span>Phone</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="mode"
                      checked={form.contactMode === "Email"}
                      onChange={() => setForm({ ...form, contactMode: "Email" })}
                    />
                    <span>Email</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="ds2-row">
              <div className={`ds2-field ${errors.message ? "error" : ""}`}>
                <label className="ds2-label">Message</label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="ds2-err">{errors.message}</span>}
              </div>
            </div>

            <div className="ds2-row ds2-row-end">
              <label className={`ds2-check ${errors.consent ? "error" : ""}`}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
                <span>I agree to be contacted regarding my enquiry</span>
              </label>
              {errors.consent && <span className="ds2-err-inline">{errors.consent}</span>}
              <button type="submit" className="ds2-btn">
                <span className="ds2-btn-ico"><FaAngleDoubleRight /></span>
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
        {formToast && (
          <div className="ds2-toast">
            <FaCheckCircle />
            <span>Thank you {formToast.name}. We will contact you via {formToast.mode} regarding {formToast.topic}.</span>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
