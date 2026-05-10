import React, { useState, useEffect } from "react";
import "./PorscheLanding.css";

export default function PorscheLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/porsche.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="overlay"></div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="logo-section">
            <img src="/porsche_logo.png" alt="Porsche" className="logo-img" />
          </div>

          <div className="nav-menu">
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#models">Models</a>
            <a href="#configurator">Configurator</a>
            <a href="#test-drive">Test Drive</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-up-stagger">
            <span>Experience</span> <span>Porsche</span> <span>Digitally</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-delayed">
            A futuristic, immersive performance car-buying experience.
          </p>

          <div className="hero-buttons">
            <button className="btn primary animate-scale-in delay-1">Explore Models</button>
            <button className="btn secondary animate-scale-in delay-2">Start Your Journey</button>
          </div>
        </div>
      </div>
      
      {/* Fake scroll space to test navbar scroll */}
      <div style={{ height: "150vh" }}></div>
    </div>
  );
}
