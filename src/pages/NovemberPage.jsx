import React from 'react';
import { Link } from 'react-router-dom';
import './NovemberPage.css'; // Ensure this file exists
import november1 from '../images/november1.jpeg';
import november2 from '../images/november2.jpeg';
import november3 from '../images/november3.jpeg';

export default function NovemberPage() {
  // Gallery images for November
  const images = [november1, november2, november3];

  return (
    <div className="november-page-container">
      {/* Hero Section */}
      <div
        className="november-hero"
        style={{
          backgroundImage: `url(/images/november-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="november-hero-content">
          <h1>November</h1>
          <h2>Still Together</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="november-description">
        <p>
          November was a beautiful reminder of the strength and depth of our bond. 
          Through every challenge and every joy, we found ourselves standing side by side, 
          still together and stronger than ever.
        </p>
        <p>
          The cool breeze of November carried with it warmth from the love we shared. 
          Whether it was cozy evenings, heartfelt conversations, or simply being in each other's presence, 
          every moment was a testament to our enduring connection.
        </p>
        <p>
          As the days grew shorter and the nights longer, November taught us that no matter the season, 
          love finds a way to shine through. Together, we embraced every moment, grateful for the journey 
          and excited for all that lay ahead.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="november-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="november-gallery-item">
            <img src={img} alt={`November Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="november-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
