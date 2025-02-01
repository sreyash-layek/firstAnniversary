import React from 'react';
import { Link } from 'react-router-dom';
import './JanuaryPage.css'; // Ensure this file exists
import january1 from '../images/january1.jpeg';
import january2 from '../images/january2.jpeg';
import january3 from '../images/january3.jpeg';

export default function JanuaryPage() {
  // Gallery images for January
  const images = [january1, january2, january3];

  return (
    <div className="january-page-container">
      {/* Hero Section */}
      <div
        className="january-hero"
        style={{
          backgroundImage: `url(/images/january-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="january-hero-content">
          <h1>January</h1>
          <h2>New Year, Old Us</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="january-description">
        <p>
          January brought the promise of a fresh start with the arrival of a new year, 
          but for us, it was a beautiful continuation of the journey we had already begun. 
          It was a time to reflect on the memories we had created and to look ahead with 
          excitement for all that was to come.
        </p>
        <p>
          We welcomed the new year hand in hand, celebrating the love that had grown stronger 
          with each passing day. The moments we shared in January were filled with laughter, 
          warmth, and the comforting feeling of knowing that no matter what the year brings, 
          we would face it together.
        </p>
        <p>
          As the calendar turned, our hearts remained the same—full of love, gratitude, 
          and anticipation for the adventures that lay ahead in the new year.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="january-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="january-gallery-item">
            <img src={img} alt={`January Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="january-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
