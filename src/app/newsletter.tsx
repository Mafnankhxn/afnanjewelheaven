"use client"
import React, { useState } from 'react';
import axios from 'axios';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Replace with your actual API endpoint for newsletter subscription
      const response = await axios.post('/api/subscribe', { email });
      
      if (response.status === 200) {
        setSubscribed(true);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="p-8 mt-20 pb-20 bg-stone-50">
      {subscribed ? (
        <p className="text-green-600 font-bold text-center">Subscribed successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label htmlFor="email" className="font-bold font-serif text-4xl font mb-10">Subscribe to our newsletter:</label>
          <div className="flex">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
              className="px-4 py-2 border rounded-l focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r hover:bg-slate-900 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
