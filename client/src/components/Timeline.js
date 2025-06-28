import React from 'react';

import '../index.css';
// import '../App.css';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
       year: 'June 2025',
       content: 'Mosaic was created through Aurizon and became its own entity to focus web development and marketing.',
       highlight: true,
    },
    {
      year: 'July 2025',
      content: 'Mosaic Digital Creations is fully launched and operations begin.',
      highlight: true,
    },
  ];

  return (
    <div className="timeline" role="list" aria-label="Company timeline">
      {timelineData.map((event, index) => (
        <div key={index} className='timeline-item' role="listitem" data-aos="fade-up">
          <div className='timeline-branch'></div>
          <div className='timeline-content'>
            <h3>{event.year}</h3>
            <p>{event.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;




