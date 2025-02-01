import React from 'react';
import { Link } from 'react-router-dom';
import './OctoberPage.css'; // Ensure this file exists
import october1 from '../images/october1.jpeg';
import october2 from '../images/october2.jpeg';
import october3 from '../images/october3.jpeg';

export default function OctoberPage() {
  // Gallery images for October
  const images = [october1, october2, october3];

  return (
    <div className="october-page-container">
      {/* Hero Section */}
      <div
        className="october-hero"
        style={{
          backgroundImage: `url(/images/october-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="october-hero-content">
          <h1>October</h1>
          <h2>Diwali Starts</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="october-description">
        <p>
          October brought the vibrant spirit of Diwali into our lives, a time of lights, joy, and celebration. 
          It was a month where every moment felt magical, and every gathering was filled with warmth and happiness.
        </p>
        <p>
          From visiting you for a looooong time to indulging in festive treats, October was a celebration 
          of togetherness. It was a time when we celebrated not just the festival but also the bond we shared, 
          creating memories that would light up our hearts forever.
        </p>
        <p>
          As the month unfolded, it reminded us of the beauty of love, tradition, and the joy of sharing special 
          moments with each other, making this Diwali one to remember.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="october-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="october-gallery-item">
            <img src={img} alt={`October Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="october-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
