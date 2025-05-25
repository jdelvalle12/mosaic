import React, {useState} from 'react';

import '../index.css';
import '../App.css';

const FAQ = () => {
    //Define an array of FAQ items, each containing a question and an answer
    const faqs = [
        {
            question: 'What is Aurizon and what does it do?',
            answer: 'Aurizon is not just another tech company; we are the architects of digital innovation. Our primary mission is to lead the charge in technological advancements by crafting cutting-edge software solutions. But we are more than just lines of code; we are your partner in progress.',
        },
        {
            question: 'What services does Aurizon offer?',
            answer: 'We offer services such as, web development, API development, and customer software solutions.',
        },
        {
            question: 'Does Aurizon offer Mobile App Development?',
            answer: 'At this time no, however, there are plans to offer mobile app development in the near future. An update will be provided. Check back at a later time or subscribe to our newsletter to get updates.',
        },
        {
            question: 'What is the typical turnaround time for a project?',
            answer: 'Depending on the scope of the project, can be between 2-6 weeks.',
        },
        {
            question: 'Are the websites created to be mobile friendly and responsive?',
            answer: 'The websites we create are designed to work seamlessly across all devices.',
        },
        {
            question: 'What industries or sectors does Aurizon work with?',
            answer: 'We work all industries whether in real-estate, sports, entertainment, travel, etc.',
        },
        {
            question: 'What technologies and programming languages does Aurizon work with?',
            answer: 'We work with HTML, CSS, JavaScript, MERN Stack (MongoDB, Express.js, REACT, Node.js), MySQL, GraphQL, Apache, Next.js, Bootstrap, Tailwind CSS, Bulma. These are just a few we work with as of now, but we would be implementing new technologies in the near future.',
        },
        {
            question: 'What sets Aurizon apart from other software development companies?',
            answer: 'What sets Aurizon apart from other software development companies is not only do we constantly develop new software or apps, but we also provide the service to custom make a website for you business to meet your needs with innovative approaches, dedicated support, focus on quality, to make sure it functions properly and maintain the website and/or software for you.',
        },
        {
            question: 'How can I get in touch with Aurizon?',
            answer: 'You can send the nature of your inquiry to info@aurizontech.com or fill out a form in our contact page with your name, the nature of your inquiry, and contact info. and expect a response withiin 72 hrs.',
        },
        {
            question: 'What is the typical process for working with Aurizon on a software project?',
            answer: 'For customer web and/or software development inquiries, send us an email for free consultation and provide a description of the project, design, preferences, desired features, content, timeline & who your target audience. We strategize & plan, then design & develop, we test & launch, and then after is completed, we continue to maintain it for you.',
        },
        {
            question: 'What industries have you worked with in the past?',
            answer: 'Up to this point, our journey has taken us through the realms of travel, real estate, food & beverage, entertainment, marketing and sports. But we are not content to stop there. Our commitment to innovation drives us to explore opportunities in all industries. We are on a mission to provide solutions, develop products, and offer our services to businesses across the spectrum, no matter the field. At Aurizon, we thrive on the challenge of turning ideas into reality, regardless of the industry they come from.',
        },
        {
            question: 'Are there examples of previous work?',
            answer: 'There are examples of our previous work. Click on the portfolio link and you will see a gallery of previous work that were done and even our own products as well. Keep checking back as we are constantlyy working on a product.',
        },
        {
            question: 'What is your approach to data privacy and security?',
            answer: 'At Aurizon, we take data privacy and security very seriously. We adhere to industry best practices and continually update our security measures to protect your data. Our approach includes robust data encryption, regular security audits, and strict access controls. We are committed to compliance with data protection regulations, ensuring that your sensitive information is safeguarded. You can trust that your data is in safe hands when you partner with us.',
        },
        {
            question: 'What is your pricing structure for software development service?',
            answer: 'How we price our services is based by the scope of the project, whether it is custome software and/or web development.',
        },
        {
            question: 'What support and maintenance services do you offer post-project completion?',
            answer: 'Our relationship with clients extends far beyond project completion. We offer comprehensive support and maintenance services to ensure your solution continues to perform at its best. This includes regular updates, bug fixes, and technical support. We also provide tailored service level agreements (SLAs) to meet your specific needs. Our goal is to be your long-term technology partner, assisting you in your journey as your business evolves and grows.',
        },
        {
            question: 'Will Aurizon offer other services other than web and software development?',
            answer: 'There are plans offer different services that are being looked into. Subscribe to our newsletter to get updates.',
        },
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