import React from 'react';
import { Link } from 'react-router-dom';
import './SeptemberPage.css'; // Ensure this file exists
import september1 from '../images/september1.jpeg';
import september2 from '../images/september2.jpeg';
import september3 from '../images/september3.jpeg';

export default function SeptemberPage() {
  // Gallery images for September
  const images = [september1, september2, september3];

  return (
    <div className="september-page-container">
      {/* Hero Section */}
      <div
        className="september-hero"
        style={{
          backgroundImage: `url(/images/september-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="september-hero-content">
          <h1>September</h1>
          <h2>6 Months Strong</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="september-description">
        <p>
          September marked a significant milestone in our journey together — 
          6 months of love, growth, and unwavering support. It was a time of 
          celebration, reflecting on the memories we had created and looking 
          forward to the adventures that lay ahead.
        </p>
        <p>
          Each passing day brought us closer, deepening our understanding of 
          one another. September was not just about marking the passage of time 
          but about cherishing the connection we had built and the love that continued 
          to flourish.
        </p>
        <p>
          With half a year behind us, this month left us with a profound sense of 
          gratitude for the journey so far and excitement for all that was yet to come.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="september-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="september-gallery-item">
            <img src={img} alt={`September Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="september-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
