import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaBookOpen, FaUtensils, FaHome, FaRupeeSign, FaAngleDoubleRight, FaCheckCircle } from "react-icons/fa";
import "./Donations.css";

function ProgressBar({ value }) {
  return (
    <div className="ds1-progress">
      <span className="ds1-progress-fill" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

function DonationCard({ data, onDonate }) {
  const [selected, setSelected] = useState(0);
  const [custom, setCustom] = useState("");
  const amount = selected || Number(custom || 0);
  const pct = Math.round((data.raised / data.goal) * 100);
  return (
    <div className="ds1-card">
      <div className="ds1-media">
        <img src={data.image} alt={data.title} />
        <div className="ds1-pill">
          <data.icon />
        </div>
      </div>
      <div className="ds1-body">
        <h3 className="ds1-title">{data.title}</h3>
        <p className="ds1-desc">{data.desc}</p>
        <div className="ds1-progress-row">
          <ProgressBar value={pct} />
          <div className="ds1-progress-meta">
            <span className="ds1-raised"><FaRupeeSign />{data.raised.toLocaleString()}</span>
            <span className="ds1-goal">of <FaRupeeSign />{data.goal.toLocaleString()}</span>
          </div>
        </div>
        <div className="ds1-amounts">
          {data.quick.map((q, i) => (
            <button
              key={i}
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
          <button className="ds1-btn" onClick={() => onDonate({ cause: data.title, amount: amount > 0 ? amount : data.quick[0] })}>
            <FaAngleDoubleRight /> Donate Now
          </button>
        </div>
        <p className="ds1-note">Every contribution creates real impact for elders in need.</p>
      </div>
    </div>
  );
}

export default function Donations() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const causes = [
    {
      title: "Education Support",
      desc: "Sponsor learning aids, digital classes, and intergenerational workshops that keep elders engaged while tutoring children.",
      image: "/Images/donation.jpg",
      icon: FaBookOpen,
      goal: 500000,
      raised: 320000,
      quick: [500, 1000, 2500, 5000]
    },
    {
      title: "Nutritious Food",
      desc: "Provide monthly ration kits and hot meals for elders and their caregivers in underserved communities.",
      image: "/Images/donation1.jpg",
      icon: FaUtensils,
      goal: 300000,
      raised: 185000,
      quick: [300, 700, 1500, 3000]
    },
    {
      title: "Safe Shelter",
      desc: "Help us maintain safe living spaces, medical beds, and assistive devices for seniors without family support.",
      image: "/Images/donation2.jpg",
      icon: FaHome,
      goal: 700000,
      raised: 430000,
      quick: [1000, 2500, 5000, 10000]
    }
  ];

  const onDonate = ({ cause, amount }) => {
    setToast({ cause, amount });
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <div className="donations-page">
      <Navbar />
      <section className={`donation-section1-wrapper ${show ? "show" : ""}`} ref={ref}>
        <div className="donation-section1-container">
          <div className="ds1-head">
            <span className="ds1-sub">Donate</span>
            <h1 className="ds1-title">Your kindness fuels change</h1>
            <p className="ds1-desc">Choose a cause below and make a direct impact today.</p>
          </div>
          <div className="ds1-grid">
            {causes.map((c, idx) => (
              <DonationCard key={idx} data={c} onDonate={onDonate} />
            ))}
          </div>
          <div className="ds1-cta">
            <button className="ds1-cta-btn" onClick={() => navigate("/contact")}><FaAngleDoubleRight /> Talk to our team</button>
          </div>
        </div>
        <span className="ds1-bubble b1" />
        <span className="ds1-bubble b2" />
        <span className="ds1-bubble b3" />
        {toast && (
          <div className="ds1-toast">
            <FaCheckCircle />
            <span>Thank you for pledging <strong><FaRupeeSign />{toast.amount.toLocaleString()}</strong> to <strong>{toast.cause}</strong>.</span>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
