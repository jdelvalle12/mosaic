import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";
import "../App.css";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const serviceID = "service_m02ixbb";
    const templateID = "template_sluf7od";
    const publicKey = "Krx007KfoiPSblA70";

    const templateParams = {
      name: formData.name,
      email: formData.email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setFormData({ name: "", email: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="subscribe-form">
      {submitted ? (
        <p className="thank-you-message">
          Thank you for subscribing, {formData.name || "friend"}!<br />
          We're excited to keep you updated with our latest news and digital creations.
        </p>
      ) : (
        <form onSubmit={handleSubscribe}>
          <div className="input-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First & Last Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;