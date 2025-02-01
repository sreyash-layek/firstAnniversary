import React from 'react';
import { Link } from 'react-router-dom';
import './DecemberPage.css'; // Ensure this file exists
import december1 from '../images/december1.jpeg';
import december2 from '../images/december2.jpeg';
import december3 from '../images/december3.jpeg';

export default function DecemberPage() {
  // Gallery images for December
  const images = [december1, december2, december3];

  return (
    <div className="december-page-container">
      {/* Hero Section */}
      <div
        className="december-hero"
        style={{
          backgroundImage: `url(/images/december-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="december-hero-content">
          <h1>December</h1>
          <h2>We Together in Christmas</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="december-description">
        <p>
          December wrapped us in the magic of the holiday season, where every moment felt like a gift. 
          Celebrating Christmas together brought warmth to the cold winter days, filling our hearts with joy, 
          laughter, and love.
        </p>
        <p>
          December was a time of cherishing traditions 
          and creating new ones. Each sparkling light and festive melody reminded us of the happiness we found 
          in each other's company.
        </p>
        <p>
          As the year came to an end, we looked back on our journey with gratitude and looked forward to a new 
          year filled with more love, adventures, and beautiful memories together.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="december-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="december-gallery-item">
            <img src={img} alt={`December Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="december-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
