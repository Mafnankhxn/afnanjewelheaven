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
      const response = await axios.post('./api/subscribe', { email });

      if (response.status === 200) {
        setSubscribed(true);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <div className="container mx-auto p-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          {subscribed ? (
            <p className="text-green-600 font-semibold text-center">Subscribed successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <label htmlFor="email" className="text-2xl font-semibold mb-4">
                Subscribe to our newsletter:
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border rounded-l focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
