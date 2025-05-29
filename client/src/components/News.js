import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for the Insider link
import '../index.css';
// import '../App.css';
import './News.css';

const News = () => {
    // News settings here
    const newsData = [
        {
            date: 'September 10, 2023',
            title: 'Exciting Product Launch',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum...',
            photo: 'image-url-here.jpg', // Replace with actual image URL
        },
        // Add more news articles as needed
    ];

    return (
        <div className='news-section'>
            <div className="news-grid">
                {newsData.map((news, index) => (
                    <div className='news-card' key={index}>
                        <img src={news.photo} className="news-photo" alt={news.title} />
                        <p className="news-date">{news.date}</p>
                        <h3 className='news-title'>{news.title}</h3>
                        <p className="news-content">{news.content}</p>
                    </div>
                ))}
            </div>
            <Link to='/insider' className='insider-link'>Insider<span className='arrow'>&rarr;</span></Link>
        </div>
    );
};

export default News;