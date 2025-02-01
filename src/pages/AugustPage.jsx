import React from 'react';
import { Link } from 'react-router-dom';
import './AugustPage.css'; // Ensure this file exists
import august1 from '../images/august1.jpeg';
import august2 from '../images/august2.jpeg';
import august3 from '../images/august3.jpeg';

export default function AugustPage() {
  // Gallery images for August
  const images = [august1, august2, august3];

  return (
    <div className="august-page-container">
      {/* Hero Section */}
      <div
        className="august-hero"
        style={{
          backgroundImage: `url(/images/august-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="august-hero-content">
          <h1>August</h1>
          <h2>Poisa Pabo Bhai</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="august-description">
        <p>
          August brought with it a blend of laughter, hope, and new beginnings. 
          It was a time when we embraced challenges together, using humor and love as our strength.
        </p>
        <p>
          This month was about planning for what’s to come, all while cherishing the 
          present moments we shared. From heartfelt conversations to building dreams, 
          August reminded us that with trust and togetherness, anything is possible.
        </p>
        <p>
          As we moved forward, this month left us with memories of resilience, hope, 
          and the bond that keeps growing stronger with every step we take.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="august-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="august-gallery-item">
            <img src={img} alt={`August Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="august-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
