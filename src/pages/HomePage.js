import React, { useEffect, useRef, useState } from 'react';
import { FaHeart, FaAngleDoubleRight, FaChevronRight, FaHandsHelping, FaPhoneAlt, FaCheck, FaBookOpen, FaHeartbeat, FaTint, FaHome, FaBed, FaUtensils, FaUserNurse, FaShieldAlt, FaWheelchair, FaPlay, FaQuoteLeft, FaArrowRight, FaQuestionCircle, FaCalendarAlt, FaBullhorn, FaHandHoldingHeart, FaChevronDown, FaRupeeSign, FaUsers, FaHandshake, FaLeaf } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';


/*function AnimatedNumber({ end, duration }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const current = Math.floor(ease * end);
      if (current !== start) {
        start = current;
        setVal(current);
      }
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return <>{val.toLocaleString()}</>;
} */


function HomePage() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

 /* useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStartCount(true);
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []); */

  /*const stats = [
    { label: 'Seniors Sheltered', end: 1200 },
    { label: 'Meals Served', end: 480000 },
    { label: 'Medical Checkups', end: 32000 },
    { label: 'Caregivers Trained', end: 850 }
  ]; */

  /*const features = [
    { icon: <FaHome />, title: 'Safe Homes' },
    { icon: <FaBed />, title: 'Comfortable Bedding' },
    { icon: <FaUtensils />, title: 'Nutritious Meals' },
    { icon: <FaUserNurse />, title: '24/7 Care' },
    { icon: <FaShieldAlt />, title: 'Security & Dignity' },
    { icon: <FaWheelchair />, title: 'Accessible Facilities' }
  ];
  /* end of section 6 code */


  /* section 7 code */
  const [visible, setVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const milestones = [
    { icon: <FaCalendarAlt />, title: 'New Shelter Wing Opened', desc: '40 additional beds with accessible washrooms and warm lighting for comfort.', date: 'Aug 2025' },
    { icon: <FaBullhorn />, title: 'Winter Drive Announced', desc: 'Collecting blankets and thermals for elders in roadside communities.', date: 'Dec 2025' },
    { icon: <FaHandHoldingHeart />, title: 'Health Camp Series', desc: 'Monthly checkups with geriatric specialists and free medicine kits.', date: 'Jan–Mar 2026' }
  ];

  const testimonials = [
    { quote: 'I found peace and friends here. The evenings are full of stories and smiles.', name: 'Radha, 73', image: '/Images/story1.jpg' },
    { quote: 'They treat me with dignity. A warm bed and a warm heart make all the difference.', name: 'Imran, 79', image: '/Images/story2.jpg' },
    { quote: 'My medications are on time, and I never feel alone anymore.', name: 'Grace, 81', image: '/Images/story3.jpg' }
  ];

  const faqs = [
    { q: 'How can I sponsor a meal for seniors?', a: 'You can sponsor daily, weekly, or monthly meals. Visit the donation page, choose Meal Sponsorship, and select your frequency.' },
    { q: 'Do you provide medical support?', a: 'Yes. We run regular health camps, medicine support, and emergency care with partner hospitals.' },
    { q: 'Can I volunteer on weekends?', a: 'Absolutely. We welcome weekend volunteers for companionship, reading sessions, and activity support.' }
  ];

  useEffect(() => {
    const node = document.querySelector('.home-section7-wrapper');
    if (!node) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        io.unobserve(node);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -15% 0px' });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [visible, testimonials.length]);
  /* end of section 7 code */



  /* section 8 code */
  const [active, setActive] = useState(0);
  const [amount, setAmount] = useState(1500);
  const [show, setShow] = useState(false);

  const tabs = [
    {
      key: 'shelter',
      title: 'Shelter & Comfort',
      image: '/Images/old1.jpg',
      bullets: ['Clean, safe rooms', 'Warm bedding & clothing', 'Companionship circles']
    },
    {
      key: 'health',
      title: 'Healthcare & Support',
      image: '/Images/old2.jpg',
      bullets: ['Regular checkups', 'Medicine support', 'Emergency care access']
    },
    {
      key: 'meals',
      title: 'Meals & Nutrition',
      image: '/Images/old3.jpg',
      bullets: ['Nutritious meals daily', 'Special diets for elders', 'Hydration & fruits']
    }
  ];

  const quick = [500, 1500, 3500, 10000];

  useEffect(() => {
    const node = document.querySelector('.home-section8-wrapper');
    if (!node) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true);
        io.unobserve(node);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -15% 0px' });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!show) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(id);
  }, [show, tabs.length]);

  /* end of section8 code */


  /* section 9 code */
  const [show9, setShow9] = useState(false);

  useEffect(() => {
    const node = document.querySelector('.home-section9-wrapper');
    if (!node) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow9(true);
        io.unobserve(node);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -15% 0px' });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const items = [
    {
      img: '/Images/01-child.svg',
      title: 'help for families',
      desc: 'We provide maximum support to families with 3+ children, including psychological and financial help.'
    },
    {
      img: '/Images/02-clothes.svg',
      title: 'clothing',
      desc: 'Kids from regions with severe weather conditions are our top priority. We provide clothes for kids of any age.'
    },
    {
      img: '/Images/03-ribbon.svg',
      title: 'Educational programs',
      desc: 'We provide funding for educational institutions for children, including the creation of an inclusive environment.'
    },
    {
      img: '/Images/04-food donation.svg',
      title: 'Food for children',
      desc: 'Our organization provides food for needy children and their families in Africa, China, and Eastern Europe.'
    },
    {
      img: '/Images/05-placeholder.svg',
      title: 'Psychological support',
      desc: 'Our non-profit organization offers psychological help to children who have suffered from domestic violence.'
    },
    {
      img: '/Images/06-hospital.svg',
      title: 'Health care',
      desc: 'We provide funding for health care facilities for children. We also buy medicines for the treatment of children.'
    }
  ];


  /* end of section 9 code */

  /* section 10 code */
  const [show10, setShow10] = useState(false);
  useEffect(() => {
  const node = document.querySelector('.home-section10-wrapper');
  if (!node) return;
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      setShow10(true);
      io.unobserve(node);
    }
  }, { threshold: 0.1, rootMargin: '0px 0px -15% 0px' });
  io.observe(node);
  return () => io.disconnect();
}, []);


/* end of section 10 code */






  return (
    <div className="homepage-wrapper">
      <Navbar />

      <section className="home-section3-wrapper">
        <Swiper
          className="home-section3-slider"
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >


          <SwiperSlide>
            <div className="home-section3-slide" style={{ backgroundImage: 'url(/Images/banner-2-slide-1.jpg)' }}>
              <div className="home-section3-content">
                <h1 className="home-section3-title">Mathrudevobhava Trust</h1>
                <span className="home-section3-subtitle"> <FaHeart className="icon" /> Change The World Together</span>
                <h1 className="home-section3-title1">Empowering Hope Futures Lives Through Giving</h1>
                <p className="home-section3-description">
                  It is a long established fact that a reader will be distracted lorem the readable content of a page when looking at layout the point lorem established fact that It is a long established
                </p>
                <button className="home-section3-btn">
                  <span className="btn-icon">
                    <FaAngleDoubleRight className="small" />
                    <FaAngleDoubleRight className="big" />
                  </span>
                  Donate Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="home-section3-slide" style={{ backgroundImage: 'url(/Images/banner-2-slide-2.jpg)' }}>
              <div className="home-section3-content">
                <h1 className="home-section3-title">Mathrudevobhava Trust</h1>
                <span className="home-section3-subtitle"><FaHeart className="icon" /> Change The World Together</span>
                <h1 className="home-section3-title1">Empowering Hope Futures Lives Through Giving</h1>
                <p className="home-section3-description">
                  It is a long established fact that a reader will be distracted lorem the readable content of a page when looking at layout the point lorem established fact that It is a long established
                </p>
                <button className="home-section3-btn">
                  <span className="btn-icon">
                    <FaAngleDoubleRight className="small" />
                    <FaAngleDoubleRight className="big" />
                  </span>
                  Donate Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="home-section3-slide" style={{ backgroundImage: 'url(/Images/banner-2-slide-3.jpg)' }}>
              <div className="home-section3-content">
                <h1 className="home-section3-title">Mathrudevobhava Trust</h1>
                <span className="home-section3-subtitle"><FaHeart className="icon" /> Change The World Together</span>
                <h1 className="home-section3-title1">Empowering Hope Futures Lives Through Giving</h1>
                <p className="home-section3-description">
                  It is a long established fact that a reader will be distracted lorem the readable content of a page when looking at layout the point lorem established fact that It is a long established
                </p>
                <button className="home-section3-btn">
                  <span className="btn-icon">
                    <FaAngleDoubleRight className="small" />
                    <FaAngleDoubleRight className="big" />
                  </span>
                  Donate Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>





      <section className="home-section2-wrapper">
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
                <button className="home-section2-btn">
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
            </div>
          </div>
        </div>
      </section>







      <section className="home-section1-banner">
        <div className="home-section1-container">
          <div className="home-section1-row">
            <div className="home-section1-text">
              <div className="home-section1-header">
                <div className="home-section1-badges">
                  <span className="home-section1-chip">Serving Andhra Pradesh</span>
                  <span className="home-section1-chip soft">Registered Charitable Trust</span>
                </div>
                <span className="home-section1-subtitle">
                  <FaHeart className="home-section1-icon" /> Together For Dignity, Education, Health
                </span>
                <h1 className="home-section1-title">Mathrudevobhava Trust</h1>
                <h2 className="home-section1-kicker">Legal Aid • Women Empowerment • Rural Development</h2>
                <p className="home-section1-description">
                  We strengthen communities with legal awareness, women and youth skills, scholarships and libraries for children, medical and health camps, and sustainable environment programs across villages.
                </p>
              </div>

              <div className="home-section1-buttons">
                <button className="home-section1-donate-btn">
                  <span className="home-section1-btn-icon">
                    <FaChevronRight className="small-icon" />
                    <FaChevronRight className="big-icon" />
                  </span>
                  Donate Now
                </button>
                <a href="/programs" className="home-section1-secondary-btn">
                  <span className="home-section1-btn-icon alt">
                    <FaChevronRight className="small-icon" />
                    <FaChevronRight className="big-icon" />
                  </span>
                  Our Programs
                </a>
                <div className="home-section1-donor-card">
                  <div className="home-section1-images">
                    <img src="/Images/pic1.jpeg" alt="Donor 1" className="circle-pic" />
                    <img src="/Images/pic2.jpeg" alt="Donor 2" className="circle-pic" />
                    <img src="/Images/pic3.jpeg" alt="Donor 3" className="circle-pic" />
                    <div className="circle-pic overlay-count1">2.5M</div>
                    <span className="home-section1-donor-label">Active<br />Donors</span>
                  </div>
                </div>
              </div>

              <ul className="home-section1-highlights">
                <li><span className="dot"></span> Health & Medical Camps</li>
                <li><span className="dot"></span> Girl Child Education & Scholarships</li>
                <li><span className="dot"></span> SIGs, Livelihoods & Employment</li>
                <li><span className="dot"></span> Environment & Water Conservation</li>
              </ul>

              <img src="/Images/vector-img.png" alt="Vector" className="home-section1-vector" />
            </div>

            <div className="home-section1-image">
              <div className="home-section1-blob"></div>
              <img src="/Images/event3.jpg" alt="Smiling children and volunteers" className="home-section1-main-img" />
              <div className="home-section1-stat-cards">
                <div className="stat-card">
                  <span className="stat-num">120+</span>
                  <span className="stat-label">Villages Reached</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">5k+</span>
                  <span className="stat-label">Beneficiaries</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">800+</span>
                  <span className="stat-label">Women Trained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section className="home-section4-wrapper">
        <div className="home-section4-container">
          <div className="home-section4-head">
            <span className="home-section4-eyebrow">What We Do</span>
            <h2 className="home-section4-heading">Impact Pillars Of Mathrudevobhava Trust</h2>
            <p className="home-section4-subtext">From classrooms to clinics, from livelihoods to safe water—these pillars guide our projects across villages.</p>
          </div>

          <div className="home-section4-row" role="list">
            <article className="home-section4-card" role="listitem" tabIndex="0">
              <div className="home-section4-icon">
                <FaBookOpen />
              </div>
              <div className="home-section4-body">
                <h3 className="home-section4-title">Education Support</h3>
                <p className="home-section4-desc">Scholarships, libraries, science fairs, sports and values to shape confident citizens.</p>
                <a href="/programs#education" className="home-section4-link">Explore →</a>
              </div>
            </article>

            <article className="home-section4-card" role="listitem" tabIndex="0">
              <div className="home-section4-icon">
                <FaHeartbeat />
              </div>
              <div className="home-section4-body">
                <h3 className="home-section4-title">Healthcare Initiatives</h3>
                <p className="home-section4-desc">Medical camps, screenings and awareness drives for rural and remote communities.</p>
                <a href="/programs#health" className="home-section4-link">Explore →</a>
              </div>
            </article>

            <article className="home-section4-card" role="listitem" tabIndex="0">
              <div className="home-section4-icon">
                <FaHandsHelping />
              </div>
              <div className="home-section4-body">
                <h3 className="home-section4-title">Livelihood Programs</h3>
                <p className="home-section4-desc">Women and youth skills, SIGs and entrepreneurship that lead to dignified incomes.</p>
                <a href="/programs#livelihoods" className="home-section4-link">Explore →</a>
              </div>
            </article>

            <article className="home-section4-card" role="listitem" tabIndex="0">
              <div className="home-section4-icon">
                <FaTint />
              </div>
              <div className="home-section4-body">
                <h3 className="home-section4-title">Access to Water</h3>
                <p className="home-section4-desc">Safe water, conservation and environment stewardship for healthier villages.</p>
                <a href="/programs#water" className="home-section4-link">Explore →</a>
              </div>
            </article>
          </div>
        </div>
      </section>








      <section className="home-section5-wrapper">
        <div className="home-section5-container">
          <div className="home-section5-row">
            <div className="home-section5-left">
              <div className="home-section5-img-wrapper">
                <img src="/Images/about-2-img.jpg" alt="Experience" className="home-section5-img" />
                <div className="home-section5-experience">
                  <span className="number">15+</span>
                  <span className="txt">Years Of Experience</span>
                </div>
              </div>
            </div>
            <div className="home-section5-right">
              <span className="home-section5-subtitle"> <FaHeart className="icon" /> About US</span>
              <h2 className="home-section5-title">We Believe This Life's About Give For Poor People.</h2>
              <p className="home-section5-description">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit The aspernaturaut odit aut fugit, sed quia
                consequuntur. Nonprofits around the world apply and join us to access more funding.
              </p>
              <div className="home-section5-blocks">
                <div className="home-section5-block">
                  <img src="/Images/mission.svg" alt="Mission" className="home-section5-icon" />
                  <div className="home-section5-block-text">
                    <h3>Our Mission</h3>
                    <p>The World Apply And Join us to Access Funding.</p>
                  </div>
                </div>
                <div className="home-section5-block">
                  <img src="/Images/vision.svg" alt="Vision" className="home-section5-icon" />
                  <div className="home-section5-block-text">
                    <h3>Our Vision</h3>
                    <p>The World Apply And Join us to Access Funding.</p>
                  </div>
                </div>
              </div>
              <a href="/" className="home-section5-btn">Explore More</a>
            </div>
          </div>
        </div>
      </section>




      <section className="home-section6-wrapper">
        <div className="home-section6-container">
          <div className="s6-head">
            <span className="s6-eyebrow">Recent Work</span>
            <h2 className="s6-title">Care In Action</h2>
            <p className="s6-text">Moments from food distribution, health camps, and community events.</p>
          </div>

          <div className="s6-gallery-grid" aria-label="Photo gallery">
            <figure className="s6-item s6-item--wide">
              <img src="/Images/distribution7.jpg" alt="Volunteers serving warm meals" />
              <figcaption>Daily Meal Service</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/distribution3.jpg" alt="Rations packed for families" />
              <figcaption>Ration Kits</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/event2.jpg" alt="Village awareness event" />
              <figcaption>Community Event</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/distribution11.jpg" alt="Children receiving nutritious lunch" />
              <figcaption>Mid-Day Meals</figcaption>
            </figure>

            <figure className="s6-item s6-item--tall">
              <img src="/Images/distribution1.jpg" alt="Health worker checking vitals" />
              <figcaption>Health Camp</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/distribution5.jpg" alt="Serving cooked food in rural area" />
              <figcaption>Rural Outreach</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/event1.jpg" alt="Cultural activity with seniors" />
              <figcaption>Cultural Activity</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/distribution11.jpg" alt="Team arranging supplies" />
              <figcaption>Logistics & Supplies</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/event3.jpg" alt="Community gathering for awareness" />
              <figcaption>Awareness Drive</figcaption>
            </figure>

            <figure className="s6-item">
              <img src="/Images/distribution9.jpg" alt="Women-led serving counter" />
              <figcaption>Women Led</figcaption>
            </figure>
          </div>
        </div>
      </section>






      <section className={`home-section10-wrapper ${show10 ? 'show' : ''}`}>
        <div className="home-section10-container">
          <div className="s10-grid">
            <div className="s10-left">
              <div className="s10-quote-mark"><FaQuoteLeft /></div>
              <h2 className="s10-title">A little means a lot</h2>
              <p className="s10-quote">Your donation can change the life of one little child.</p>
              <p className="s10-sub">Every rupee helps with education, meals, and healthcare in rural communities.</p>
              <a href="/donation" className="s10-cta">
                <span className="s10-cta-dot"></span>
                Donate Now
              </a>
              <div className="s10-avatars">
                <img src="/Images/pic1.jpeg" alt="Supporter 1" />
                <img src="/Images/pic2.jpeg" alt="Supporter 2" />
                <img src="/Images/pic3.jpeg" alt="Supporter 3" />
                <span className="s10-avatars-label">Recent supporters</span>
              </div>
            </div>
            <div className="s10-right">
              <div className="s10-card">
                <div className="s10-badge">100% Transparent</div>
                <ul className="s10-list">
                  <li><span className="tick"></span> Funds reach verified field projects</li>
                  <li><span className="tick"></span> Tax-deductible receipts provided</li>
                  <li><span className="tick"></span> Quarterly impact updates</li>
                </ul>
                <div className="s10-strip">
                  <span className="s10-chip">Education</span>
                  <span className="s10-chip">Health</span>
                  <span className="s10-chip">Livelihoods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="s10-orb s10-o1" />
        <span className="s10-orb s10-o2" />
        <span className="s10-orb s10-o3" />
      </section>





      <section className={`home-section9-wrapper ${show9 ? 'show' : ''}`}>
        <div className="home-section9-container">
          <div className="home-section9-head">
            <h2 className="home-section9-title">our organization provides</h2>
            <p className="home-section9-desc">
              Our organization provides everything possible to provide children around the world with everything they need.
            </p>
          </div>

          <div className="home-section9-grid">
            {items.map((it, i) => (
              <div className="s9-item" key={i} style={{ animationDelay: `${0.06 * i}s` }}>
                <div className="s9-icon-wrap">
                  <img src={it.img} alt={it.title} className="s9-icon" />
                </div>
                <div className="s9-copy">
                  <h3 className="s9-item-title">{it.title}</h3>
                  <p className="s9-item-desc">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>







      <section className={`home-section7-wrapper ${visible ? 'show' : ''}`} ref={ref}>
        <div className="home-section7-container">
          <header className="home-section7-head">
            <h2 className="home-section7-title">Stories, Updates, Answers</h2>
            <p className="home-section7-desc">A quiet stream of what we’ve done, who we helped, and quick answers for you.</p>
          </header>

          <div className="home-section7-grid">
            <section className="s7-timeline" aria-label="Recent milestones">
              <ul className="s7-tl-list">
                <li className="s7-tl-item">
                  <div className="s7-tl-dot"></div>
                  <div className="s7-tl-card">
                    <time className="s7-tl-date">Aug 2025</time>
                    <h3 className="s7-tl-title">Village Health Camp</h3>
                    <p className="s7-tl-desc">Free checkups and medicines provided to elders and daily-wage workers.</p>
                  </div>
                </li>
                <li className="s7-tl-item">
                  <div className="s7-tl-dot"></div>
                  <div className="s7-tl-card">
                    <time className="s7-tl-date">Jul 2025</time>
                    <h3 className="s7-tl-title">Nutrition Drive</h3>
                    <p className="s7-tl-desc">Mid-day meal support expanded to two additional government schools.</p>
                  </div>
                </li>
                <li className="s7-tl-item">
                  <div className="s7-tl-dot"></div>
                  <div className="s7-tl-card">
                    <time className="s7-tl-date">Jun 2025</time>
                    <h3 className="s7-tl-title">Women’s SIG Training</h3>
                    <p className="s7-tl-desc">Self-help group workshop on micro-entrepreneurship and savings.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="s7-spotlight" aria-label="Elder story">
              <figure className="s7-spotlight-card">
                <div className="s7-media">
                  <img src="/Images/event2.jpg" alt="Community health camp" />
                </div>
                <blockquote className="s7-quote">
                  “They treated me like family, checked my health, and gave me medicines I can’t afford.”
                </blockquote>
                <figcaption className="s7-name">Lakshmamma, Age 72</figcaption>
              </figure>
              <div className="s7-thumbs" aria-label="Related moments">
                <img src="/Images/distribution5.jpg" alt="Meal service" />
                <img src="/Images/event3.jpg" alt="Awareness session" />
                <img src="/Images/distribution11.jpg" alt="Logistics and supplies" />
              </div>
            </section>

            <section className="s7-faq" aria-label="Top questions">
              <div className="s7-faq-card">
                <div className="s7-faq-item">
                  <h4 className="s7-faq-q">How can I contribute?</h4>
                  <p className="s7-faq-a">Support meals, medicines, or education materials. You can also volunteer locally.</p>
                </div>
                <div className="s7-faq-item">
                  <h4 className="s7-faq-q">Where do you work?</h4>
                  <p className="s7-faq-a">Primarily across Andhra Pradesh with a focus on rural and agency areas.</p>
                </div>
                <div className="s7-faq-item">
                  <h4 className="s7-faq-q">Do you share impact updates?</h4>
                  <p className="s7-faq-a">Yes. We publish short monthly notes and photos from camps and distributions.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>


      <section className={`home-section8-wrapper ${show ? 'show' : ''}`} ref={ref}>
        <div className="home-section8-container">
          <header className="home-section8-head">
            <h2 className="home-section8-title">Choose A Cause To Power Today</h2>
            <p className="home-section8-desc">Every rupee brings warmth, care, and dignity. Pick a program and be part of the change.</p>
          </header>

          <div className="home-section8-grid-simple">
            <article className="s8-card">
              <div className="s8-media">
                <img src="/Images/distribution5.jpg" alt="Nutritious meals served to elders" />
                <span className="s8-tag">Meals</span>
              </div>
              <div className="s8-body">
                <h3 className="s8-title">Daily Elder Meals</h3>
                <p className="s8-text">Nutritious food for abandoned seniors across villages, prepared fresh and served with care.</p>
                <a href="/programs#meals" className="s8-link">Learn more</a>
              </div>
            </article>

            <article className="s8-card">
              <div className="s8-media">
                <img src="/Images/event2.jpg" alt="Doctors conducting a rural health camp" />
                <span className="s8-tag">Health</span>
              </div>
              <div className="s8-body">
                <h3 className="s8-title">Rural Health Camps</h3>
                <p className="s8-text">Regular checkups, medicines, and awareness drives reaching families in remote areas.</p>
                <a href="/programs#health" className="s8-link">Learn more</a>
              </div>
            </article>

            <article className="s8-card">
              <div className="s8-media">
                <img src="/Images/distribution11.jpg" alt="Women learning livelihood skills" />
                <span className="s8-tag">Skills</span>
              </div>
              <div className="s8-body">
                <h3 className="s8-title">Women & Youth Skills</h3>
                <p className="s8-text">Training and SIG support that build livelihoods, confidence, and steady income.</p>
                <a href="/programs#skills" className="s8-link">Learn more</a>
              </div>
            </article>
          </div>
        </div>
        <span className="s8-orb o1"></span>
        <span className="s8-orb o2"></span>
      </section>







      <Footer />
    </div>
  );
}

export default HomePage;
