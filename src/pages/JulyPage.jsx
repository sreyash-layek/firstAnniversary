import React from 'react';
import { Link } from 'react-router-dom';
import './JulyPage.css'; // Ensure this file exists
import july1 from '../images/july1.jpeg';
import july2 from '../images/july2.jpeg';
import july3 from '../images/july3.jpeg';

export default function JulyPage() {
  // Gallery images for July
  const images = [july1, july2, july3];

  return (
    <div className="july-page-container">
      {/* Hero Section */}
      <div
        className="july-hero"
        style={{
          backgroundImage: `url(/images/july-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="july-hero-content">
          <h1>July</h1>
          <h2>Last Days in Kolkata</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="july-description">
        <p>
          July was a month filled with emotional goodbyes and heartfelt memories as I prepared to leave the city.

        It was more of a hope to meet again and continue to grow together, a reminder although our distance might increase but our love
        shall stay the same.
        </p>
        <p>
          As we said farewell to Kolkata, we carried with us not just memories but a promise to
          create more beautiful moments together, no matter where life takes us.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="july-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="july-gallery-item">
            <img src={img} alt={`July Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="july-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
