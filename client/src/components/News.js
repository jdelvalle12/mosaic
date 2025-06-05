import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for the news link
import '../index.css';
// import '../App.css';
import './News.css';

const News = () => {
    // News settings here
    const newsData = [
  {
    date: 'July 4, 2025',
    title: 'Exciting Product Launch',
    content: 'After two years of planning, Aurizon launched and the newly formed service Mosaic Digital Creations',
    photo: 'image-url-here.jpg',
    readMoreLink: '/news/product-launch',
  },
  {
    date: 'July 7, 2025',
    title: 'New Feature Announcement',
    content: 'Mosaic will now take crypto payments',
    photo: 'image-url-here.jpg',
    readMoreLink: '/news/product-launch',
  },
  {
    date: 'July 8, 2025',
    title: 'Client Spotlight',
    content: 'The first client to have their work done with us',
    photo: 'image-url-here.jpg',
    readMoreLink: '/news/product-launch',
  },
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
                            {news.readMoreLink && (
                                <Link to={news.readMoreLink} className="read-more">
                                    Read More →
                                </Link>
                            )}
                    </div>
                ))}
            </div>
            <Link to='/news' className='news-link'>News<span className='arrow'>&rarr;</span></Link>
        </div>
    );
};

export default News;