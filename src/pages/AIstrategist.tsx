import React from "react";
import "./AIstrategist.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AIstrategist() {
  const testimonials = [
    {
      name: "Alex Johnson",
      title: "Founder, StartupX",
      feedback:
        "Jermaine’s AI strategies helped us 4x our client conversions within 2 months!",
    },
    {
      name: "Samantha Lee",
      title: "Entrepreneur",
      feedback:
        "The automation systems he built saved me hours every day — truly next-level.",
    },
    {
      name: "David Smith",
      title: "CEO, GrowthLabs",
      feedback:
        "Game-changer! Our business runs smoother and faster than ever.",
    },
  ];

  const faqs = [
    {
      q: "What does an AI Strategist do?",
      a: "An AI Strategist helps identify how AI can automate and scale your business systems effectively.",
    },
    {
      q: "Is this suitable for small businesses?",
      a: "Yes — AI strategy can help solopreneurs and startups streamline repetitive tasks affordably.",
    },
    {
      q: "Can I get personalized consulting?",
      a: "Absolutely. Each session is customized to your business goals and processes.",
    },
  ];

  return (
    <div className="ai-page">
      {/* HERO SECTION */}
      <section className="ai-hero">
        <div className="ai-container">
          <div className="ai-hero-left">
            <h1>AI Strategist</h1>
            <p>
              Empower your business with intelligent automation. Learn how
              Jermaine helps entrepreneurs leverage AI to scale and grow
              efficiently.
            </p>
            <ul>
              <li>✅ Automate repetitive tasks</li>
              <li>🚀 Scale faster with smarter systems</li>
              <li>💡 Tailored AI strategies for your business</li>
            </ul>
            <div className="ai-buttons">
              <button className="btn-primary">Want More</button>
              <button className="btn-secondary">Book a Session</button>
            </div>
          </div>

          <div className="ai-hero-right">
            <video
              className="ai-video"
              controls
              poster="https://storage.googleapis.com/msgsndr/I6h3ArIfvmG0VsBJibPx/media/68f0254a6b8e7d5dc31279af.png"
            >
              <source
                src="https://cdn.pixabay.com/vimeo/253451855/ai-13062.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ai-testimonials">
        <h2>What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <p>"{t.feedback}"</p>
                <h4>{t.name}</h4>
                <span>{t.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQ SECTION */}
      <section className="ai-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
