import React from 'react';
import { Link } from 'react-router-dom';
import './FebruaryPage.css'; // Ensure this file exists
import february1 from '../images/february1.jpeg';
import february2 from '../images/february2.jpeg';
import february3 from '../images/february3.jpeg';

export default function FebruaryPage() {
  // Gallery images for February
  const images = [february1, february2, february3];

  return (
    <div className="february-page-container">
      {/* Hero Section */}
      <div
        className="february-hero"
        style={{
          backgroundImage: `url(/images/february-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="february-hero-content">
          <h1>February</h1>
          <h2>See You Again</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="february-description">
        <p>
          Looking forward to creating more memories with my little sweetheart
        </p>
      </div>

      {/* Gallery Section */}
      <div className="february-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="february-gallery-item">
            <img src={img} alt={`February Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="february-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
