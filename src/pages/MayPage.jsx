import React from 'react';
import { Link } from 'react-router-dom';
import './MayPage.css'; // Ensure this file exists
import may1 from '../images/may1.jpeg';
import may2 from '../images/may2.jpeg';
import may3 from '../images/may3.jpeg';

export default function MayPage() {
  // Gallery images for May
  const images = [may1, may2, may3];

  return (
    <div className="may-page-container">
      {/* Hero Section */}
      <div
        className="may-hero"
        style={{
          backgroundImage: `url(/images/may-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="may-hero-content">
          <h1>May</h1>
          <h2>The End of College Meet</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="may-description">
      

        <p>
        May brought with it a mix of emotions as my college days came to a close. The thought of being apart was daunting, yet it only strengthened the bond we shared. It was a month filled with nostalgia and heartfelt promises to stay connected despite the challenges of distance. Every moment together became even more precious, serving as a foundation for the new chapter that lay ahead.
        </p>

        <p>
        As we closed one chapter of our lives, we stepped confidently into the next, carrying with us the cherished memories we created and the unwavering love that would guide us forward.
        </p>

      </div>

      {/* Gallery Section */}
      <div className="may-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="may-gallery-item">
            <img src={img} alt={`May Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="may-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
