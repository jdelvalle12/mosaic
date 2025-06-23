import React, {useState} from 'react';

import '../index.css';
// import '../App.css';
import './FAQ.css';

const FAQ = () => {
    //Define an array of FAQ items, each containing a question and an answer
  const faqs = [
  {
    question: 'What is Mosaic and what does it do?',
    answer: 'Mosaic is a digital marketing and web development company focused on helping businesses grow their online presence. We specialize in crafting powerful, creative, and data-driven strategies that elevate brands and connect them with their ideal audience.'
  },
  {
    question: 'What services does Mosaic offer?',
    answer: 'Our core services include custom web development, branding, SEO (Search Engine Optimization), social media management, content creation, and digital strategy. We offer end-to-end solutions that blend creative storytelling with technical precision.'
  },
  {
    question: 'Does Mosaic develop mobile apps?',
    answer: 'Mobile app development is part of our future roadmap. We’re currently laying the groundwork and plan to offer iOS and Android app solutions soon. Stay tuned or subscribe to our newsletter for updates.'
  },
  {
    question: 'What is the typical turnaround time for a project?',
    answer: 'Project timelines vary depending on scope and complexity. Most standard website builds or marketing campaigns range from 2 to 6 weeks. We provide detailed timelines after the initial consultation.'
  },
  {
    question: 'Are your websites mobile-friendly and responsive?',
    answer: 'Yes. Every website we build is fully responsive and optimized for all devices, ensuring a seamless user experience across desktop, tablet, and mobile.'
  },
  {
    question: 'What industries does Mosaic work with?',
    answer: 'We serve a variety of industries including real estate, food & beverage, travel, fashion, entertainment, and startups. We tailor our strategies to fit your unique market and goals.'
  },
  {
    question: 'What tools and platforms does Mosaic use?',
    answer: 'We work with modern technologies including HTML, CSS, JavaScript, React, Node.js, WordPress, Shopify, Tailwind CSS, and various marketing tools like Google Analytics, Meta Ads Manager, and Canva. Our stack evolves with your needs.'
  },
  {
    question: 'What makes Mosaic different from other marketing firms?',
    answer: 'Our difference lies in the fusion of design, development, and strategy under one roof. We don’t just make things look good—we build systems that work, engage users, and convert leads. Plus, we treat every project like a partnership, not just a transaction.'
  },
  {
    question: 'How can I get in touch with Mosaic?',
    answer: 'You can reach out through the contact form on our website or email us directly at info@mosaiccreations.co. We aim to respond to all inquiries within 48–72 hours.'
  },
  {
    question: 'What’s your process for working on a new project?',
    answer: 'We start with a discovery call or consultation to understand your goals. Then we move into strategy, design, development, and launch—keeping you involved every step of the way. Post-launch, we offer maintenance, analytics, and ongoing optimization.'
  },
  {
    question: 'What’s your experience so far?',
    answer: 'Though Mosaic is a growing brand, our roots come from years of combined experience at our parent company, Aurizon. We’ve worked across industries, building websites, launching brands, and helping businesses scale.'
  },
  {
    question: 'Can I see examples of past work?',
    answer: 'Yes. You can view our portfolio by visiting the "Work" or "Portfolio" section on our website. We regularly update it with new client projects and internal case studies.'
  },
  {
    question: 'How does Mosaic handle privacy and data protection?',
    answer: 'We take your privacy seriously. Our websites follow best practices for data protection, including SSL encryption, cookie consent, and privacy policy compliance. We can also implement GDPR-compliant features if needed.'
  },
  {
    question: 'How is pricing determined?',
    answer: 'Pricing depends on the scope of your project. We offer flexible packages for startups, small businesses, and enterprise clients. After an initial consultation, we’ll provide a transparent quote tailored to your needs and budget.'
  },
  {
    question: 'What happens after the project is complete?',
    answer: 'We offer post-launch support including website maintenance, content updates, analytics tracking, and digital marketing services to keep your business growing. You can choose one-time support or an ongoing monthly plan.'
  },
  {
    question: 'Will Mosaic expand its services in the future?',
    answer: 'Yes. We plan to expand into mobile app development, e-commerce solutions, video production, and more. As we grow, so will our services—because our goal is to grow alongside you.'
  }
];

    const [openIndex, setOpenIndex] = useState(null);

    //Function to toggle the display of answers
    const toggleAnswer = (index) => {
        if (openIndex === index) {
            //Clicking on an open question closes it
            setOpenIndex(null);
        } else {
            //Clicking on a closed question opens it
            setOpenIndex(index);
        }
    };
    
    return (
        <div className='faq-section'>
            <h3>FAQs</h3>
            {faqs.map((faq, index) => (
                <div key={index} className='question' onClick={() => toggleAnswer(index)}>
                    <h4>{faq.question}
                        <span className='toggle-icon'>{openIndex === index ? ' -' : ' +'}</span>
                    </h4>
                    {openIndex === index && (
                        <div className='answer'>
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>    
            ))}
        </div>
    );
}

export default FAQ;