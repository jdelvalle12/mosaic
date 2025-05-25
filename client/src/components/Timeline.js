import React from 'react';

import '../index.css';
import '../App.css';

const Timeline = () => {
  const timelineData = [
    {
      year: 'July 2023',
      content: 'Jose founded Aurizon and is officially registered as a business name.',
    },
    {
      year: 'November 2023',
      content: 'Aurizon is fully launched and operations begin.',
    },
  ];

  return (
    <div className="timeline">
      {timelineData.map((event, index) => (
        <div key={index} className='timeline-item'>
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




