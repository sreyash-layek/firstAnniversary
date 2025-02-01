import React from 'react';
import { Link } from 'react-router-dom';
import './AprilPage.css'; // Ensure this file exists
import april1 from '../images/april1.jpeg';
import april2 from '../images/april2.jpeg';
import april3 from '../images/april3.jpeg';

export default function AprilPage() {
  // Gallery images for April
  const images = [april1, april2, april3];

  return (
    <div className="april-page-container">
      {/* Hero Section */}
      <div
        className="april-hero"
        style={{
          backgroundImage: `url(/images/april-hero.jpg)`, // Ensure this image exists in the public/images/ folder
        }}
      >
        <div className="april-hero-content">
          <h1>April</h1>
          <h2>The First Month Ends</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="april-description">
        <p>
          April marked the end of our first month together, a month filled with new beginnings,
          shared laughter, and unforgettable memories. It was a time of getting to know each other
          better and creating moments that we would cherish forever.
        </p>
        <p>
          The surprise you gave me, locking me in the bathroom and the moments after was so so special.
          It strengthened our love and belief in each other and gave me more strength to believe in our special bond.
        </p>
        <p>
          As we stepped into the next chapter of our journey, we carried with us the warmth and
          joy of our first month together, looking forward to many more ahead.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="april-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="april-gallery-item">
            <img src={img} alt={`April Memory ${idx}`} />
          </div>
        ))}
      </div>

      {/* Navigation or link back */}
      <div className="april-nav-links">
        <Link to="/" className="back-link">Back to Timeline</Link>
      </div>
    </div>
  );
}
