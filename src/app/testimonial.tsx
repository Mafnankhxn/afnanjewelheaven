"use client"
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Mr.williamson ',
    image: '/test1.jpg',
    text: 'The buying experience was seamless, and the ring I purchased holds sentimental value for me.',
  },
  {
    id: 2,
    name: 'Sarah Malik',
    image: '/test2.jpg.crdownload',
    text: 'Absolutely in love with the elegant design of my bracelet, it adds a touch of sophistication.',
  },
  {
    id: 3,
    name: 'Max Rodger',
    image: '/test3.jpg',
    text: 'i gifted my mother the necklace and now she considers it the best gift she ever got!',
  },
  {
    id: 4,
    name: 'Mr.Rizwan hussain',
    image: '/test4.jpg',
    text: 'My wife loved the surprise gift - the bracelet has become a conversation starter.',
  },
  {
    id: 5,
    name: 'Mr.john D Marco',
    image: '/test5.jpg',
    text: 'Impressed by the craftsmanship and quality of the jewelry, definitely exceeded my expectations!',
  },
  {
    id: 6,
    name: 'Amelia Johnson',
    image: '/test6.jpg',
    text: 'The earrings I bought are my new favorite accessory, they perfectly match my style.',
  },
];

const TestimonialSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };
  const currentTestimonial = testimonials[activeSlide];
  return (
    <><h1 className='text-center font-bold text-4xl mt-20'>
        Testimonials
        </h1>
        <div className="flex items-center mt-20 justify-center h-screen">
          <div className="w-full max-w-2xl p-8 bg-white shadow-xl rounded-lg">
              <div className="flex flex-col items-center justify-center h-1/2">
                  <img
                      src={currentTestimonial.image}
                      alt={`Customer ${currentTestimonial.name}`}
                      className="w-50 h-72 mx-auto mb-4 rounded-full" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {currentTestimonial.name}
                  </h3>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gray-300" />
                  <p className="text-gray-700 text-center my-4">
                      {currentTestimonial.text}
                  </p>
              </div>
              <div className="mt-6 flex justify-center">
                  <button
                      onClick={handlePrevSlide}
                      className="text-xl pr-20 text-gray-500 focus:outline-none"
                  >
                      &lt;
                  </button>
                  <button
                      onClick={handleNextSlide}
                      className="ml-4 text-xl pl-20 text-gray-500 focus:outline-none"
                  >
                      &gt;
                  </button>
              </div>
          </div>
      </div></>
  );
};

export default TestimonialSlider;






