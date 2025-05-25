import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import '../App.css';

const Testimonial = () => {
    // Define your testimonial data and settings here
    const testimonialData = [
        {
            company: 'Company A',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum...',
            name: 'John Doe',
            photo: ''
        },
        {
            company: 'Company B',
            content: 'In eget est a dui lacinia laoreet eu et elit. Donec nec facilisis...',
            name: 'Jane Smith',
            photo: '',
        },
        {
            company: 'Company C',
            content: 'In eget est a dui lacinia laoreet eu et elit. Donec nec facilisis...',
            name: 'Jane Smith',
            photo: '',
        },
        {
            company: 'Company D',
            content: 'In eget est a dui lacinia laoreet eu et elit. Donec nec facilisis...',
            name: 'Jane Smith',
            photo: '',
        },
        {
            company: 'Company E',
            content: 'In eget est a dui lacinia laoreet eu et elit. Donec nec facilisis...',
            name: 'Jane Smith',
            photo: '',
        },
        // Add more testimonial objects as needed
    ];

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    // };

    return (
        <div className="testimonial-section">
            <div className="testimonial-grid">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-content">
                            <div className="testimonial-left">
                                <img src={testimonial.photo} alt={`${testimonial.name} Photo`} className="testimonial-photo" />
                            </div>
                            <div className="testimonial-right">
                                <h3 className="testimonial-company">{testimonial.company}</h3>
                                <p className="testimonial-text">{testimonial.content}</p>
                                <p className="testimonial-author">- {testimonial.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;