import React from 'react';
import { Link } from 'react-router-dom';
import './JunePage.css'; // Ensure this file exists
import june1 from '../images/june1.jpeg';
import june2 from '../images/june2.jpeg';
import june3 from '../images/june3.jpeg';

export default function JunePage() {
  // Gallery images for June
  const images = [june1, june2, june3];

  return (
    <div className="june-page-container">
      {/* Hero Section */}
      <div
        className="june-hero"
        style={{
          backgroundImage: `url(/images/june-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="june-hero-content">
          <h1>June</h1>
          <h2>Warm Summers and Warmer Love</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="june-description">
        <p>
          June marked the start of a new season, both in nature and in our journey together. The warmth of the summer sun
          mirrored the growing warmth in our hearts, as our connection deepened with each passing day.
        </p>
        <p>
          From our short visits in Kolkata to meeting you in your house, it was a bliss.
          This month reminded us that even as seasons change, the love we share only grows stronger, preparing us for
          the beautiful journey ahead.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="june-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="june-gallery-item">
            <img src={img} alt={`June Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="june-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
