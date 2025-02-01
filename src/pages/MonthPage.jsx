import React from 'react';
import { useParams } from 'react-router-dom';

// 1) Define a local data object for all 12 months
// You can store the images in `public/images/` or `src/assets/` 
// (then reference them accordingly).
const MONTHS_DATA = {
  january: {
    title: 'January',
    description: 'New beginnings and fresh starts!',
    images: ['jan1.jpg', 'jan2.jpg'], // These should be in /public/images if you're referencing them as '/images/...'
  },
  february: {
    title: 'February',
    description: 'Celebrate love and friendship.',
    images: ['feb1.jpg', 'feb2.jpg'],
  },
  march: {
    title: 'March',
    description: 'Spring into action as winter fades away.',
    images: ['mar1.jpg', 'mar2.jpg'],
  },
  april: {
    title: 'April',
    description: 'Flowers and showers, a colorful bloom everywhere.',
    images: ['apr1.jpg', 'apr2.jpg'],
  },
  may: {
    title: 'May',
    description: 'Enjoy the warmer days of late spring.',
    images: ['may1.jpg', 'may2.jpg'],
  },
  june: {
    title: 'June',
    description: 'Embrace the start of summer.',
    images: ['jun1.jpg', 'jun2.jpg'],
  },
  july: {
    title: 'July',
    description: 'Sunny skies and fun in the sun!',
    images: ['jul1.jpg', 'jul2.jpg'],
  },
  august: {
    title: 'August',
    description: 'The peak of summer adventures.',
    images: ['aug1.jpg', 'aug2.jpg'],
  },
  september: {
    title: 'September',
    description: 'Back to school and crisp autumn air.',
    images: ['sep1.jpg', 'sep2.jpg'],
  },
  october: {
    title: 'October',
    description: 'Autumn leaves and spooky season vibes.',
    images: ['oct1.jpg', 'oct2.jpg'],
  },
  november: {
    title: 'November',
    description: 'Grateful moments and cozy days.',
    images: ['nov1.jpg', 'nov2.jpg'],
  },
  december: {
    title: 'December',
    description: 'Holiday celebrations and year-end reflection.',
    images: ['dec1.jpg', 'dec2.jpg'],
  },
};

function MonthPage() {
  // 2) Grab the :monthName param from the URL (e.g. /january)
  const { monthName } = useParams();
  
  // 3) Convert to lowercase just in case
  const monthKey = (monthName || '').toLowerCase();

  // 4) Lookup data from MONTHS_DATA
  const monthData = MONTHS_DATA[monthKey];

  // If month not found, show a fallback
  if (!monthData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Oops! Month not found.</h1>
        <p>Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  // 5) Render the found month data
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>{monthData.title}</h1>
      <p>{monthData.description}</p>

      {/* A simple gallery (optional) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {monthData.images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={`/images/${imgSrc}`}  // If images are in /public/images
            alt={`${monthData.title} pic ${idx}`}
            style={{
              width: '200px',
              margin: '1rem',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MonthPage;
