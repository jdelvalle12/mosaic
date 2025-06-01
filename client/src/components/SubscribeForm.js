import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';
import './SubscribeForm.css';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');

    // const [message, setMessage] = useState('');
    // setMessage('Thanks for subscribing!');

    // const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubscribe = () => {
      // Add your logic here to handle the subscription.
      // You can send the 'email' variable to your backend or a third-party service.
      // You might want to implement validation and error handling as well.
  
      // For now, let's simply log the email to the console.
      console.log(`Subscribed with email: ${email}`);
  
      // Clear the email input
      setEmail('');
    };
  
    return (
      <div className="subscribe-form">
        <input
          type="email"
          placeholder="Enter email to subscribe and get updates"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSubscribe} className="subscribe-button">Subscribe</button>
      </div>
    );
  };
  
  export default SubscribeForm;