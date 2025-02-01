import React from 'react';
import { Link } from 'react-router-dom';
import './MarchPage.css'; // Ensure this file exists
import march1 from '../images/march1.jpeg';
import march2 from '../images/march2.jpeg';
import march3 from '../images/march3.jpeg';

export default function MarchPage() {
  // Gallery images for March
  const images = [march1, march2, march3];

  return (
    <div className="march-page-container">
      {/* Hero Section */}
      <div
        className="march-hero"
        style={{
          backgroundImage: `url(/images/march-hero.jpg)`, // Make sure this image exists in the public/images/ folder
        }}
      >
        <div className="march-hero-content">
          <h1>March</h1>
          <h2>Our First Meet</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="march-description">
        <p>
          The night we first met was magical, a moment that marked the 
          beginning of something truly special. The strolls through the campus, 
          with quiet conversations and shared smiles, made it feel like the world 
          had paused just for us. The talks that followed were filled with warmth 
          and connection, growing deeper with every passing moment. 
        </p>
        <p>
          The movie we watched together was just the backdrop, as the true 
          story unfolded in the moments after: laughter, glances, and the unspoken 
          words that said so much. The proposal after was a priceless moment, a promise
          wrapped in love and hope. And then came the wait, filled with 
          anticipation and dreams of what our future could hold.
        </p>
        <p>
          May this love, built on such meaningful memories, continue to grow and thrive,
          lasting not only for a lifetime but for all the moments beyond it, in this 
          life and whatever comes after.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="march-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="march-gallery-item">
            <img src={img} alt={`March Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="march-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
