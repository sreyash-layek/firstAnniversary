import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Link } from 'react-router-dom';

// Import the CSS file where we style the month label
import './Home.css'; 

// You can import images from src, or place them in public and reference them by path.
// Example of importing from `src/images/`
import marchImg from '../images/march.jpeg';
import aprilImg from '../images/april.jpeg';
import mayImg from '../images/may.jpeg';
import juneImg from '../images/june.jpeg';
import julyImg from '../images/july.jpeg';
import januaryImg from '../images/january.jpeg';
import augustImg from '../images/august.jpeg';
import septemberImg from '../images/september.jpeg';
import octoberImg from '../images/october.jpeg';
import novemberImg from '../images/november.jpeg';
import decemberImg from '../images/december.jpeg';
import februaryImg from '../images/february.jpeg';

// Example data for each month
const monthsData = [
  { title: 'March', description: 'Our First Meet', image: marchImg },
  { title: 'April', description: 'The First Month Ends', image: aprilImg },
  { title: 'May', description: 'The End of College Meet', image: mayImg },
  { title: 'June', description: 'Warm Summers and Warmer Love', image: juneImg },
  { title: 'July', description: 'Last Days in Kolkata', image: julyImg },
  { title: 'August', description: 'Poisa Pabo Bhai', image: augustImg },
  { title: 'September', description: '6 Monthes Strong', image: septemberImg },
  { title: 'October', description: 'Diwali Starts', image: octoberImg },
  { title: 'November', description: 'Still Together', image: novemberImg },
  { title: 'December', description: 'We Together in Christmas', image: decemberImg },
  { title: 'January', description: 'New Year Old Us', image: januaryImg },
  { title: 'February', description: 'See You Again', image: februaryImg },
];

export default function TimelinePage() {
  return (
    <div style={{ margin: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'cursive' }}>
        A Year in our life
      </h1>
      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
        Been a pleasure
      </p>

      <VerticalTimeline lineColor="transparent">
        {monthsData.map((month, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={month.title}
            dateClassName="month-label"
            position={idx % 2 === 0 ? "left" : "right"}
            /* Conditionally adjust margin if on right */
            contentStyle={{
              background: '#ffe6e6',
              color: '#000',
              marginLeft: idx % 2 === 0 ? '0' : '80px',
            }}
            contentArrowStyle={{
              borderRight: idx % 2 === 0
                ? '7px solid #ffe6e6' /* Left-side arrow color */
                : '7px solid #ffe6e6', /* Right-side arrow color */
            }}
            icon={
              <Link to={`/${month.title.toLowerCase()}`}>
                <img
                  src={month.image}
                  alt={month.title}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                />
              </Link>
            }
            iconStyle={{
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              {month.description}
            </p>
            <Link
              to={`/${month.title.toLowerCase()}`}
              style={{ textDecoration: 'underline', color: '#d61a5b' }}
            >
              Go to {month.title}
            </Link>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

