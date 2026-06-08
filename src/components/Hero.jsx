import React from "react";
import Nova from "../assets/Nova.png";
import Novathin from "../assets/Novathin.png";
import Moblie from "../assets/Mobile.png";
import Novawatch from "../assets/Novawatch.png";


function Hero() {
  return (
    <section className="hero">
      <p className="tag">New Collection 2026</p>

      <h1>Future of Premium Shopping</h1>

      <p className="hero-text">
        Experience luxury electronics with smooth design,
        powerful performance, and professional style.
      </p>

      <div className="hero-buttons">
        <button>Shop Products</button>
        <button className="outline-btn">Learn More</button>
      </div>

      <div className="hero-card">
        <img
          src={Nova}
          alt="Premium Laptop"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;