"use client"
import React, { useState, useRef, useEffect } from 'react';
interface Slide {
  id: number;
  image: string;
  caption: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    image: '/banner1.webp',
    caption: 'Slide 1',
  },
  {
    id: 2,
    image: '/banner2.jpg',
    caption: 'Slide 2',
  },
  {
    id: 3,
    image: '/banner3.png',
    caption: 'Slide 3',
  },
  {
    id: 4,
    image: '/banner4.jpg',
    caption: 'Slide 4',
  },
  {
    id: 5,
    image: '/banner5.jpg',
    caption: 'Slide 5',
  },
  {
    id: 6,
    image: '/banner6.jpg',
    caption: 'Slide 6',
  },
];

const SwipeThreshold = 50; // Adjust this value as needed

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number | null>(null);

  const goToNextSlide = () => {
    const newIndex: number = (currentIndex + 1) % slidesData.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex: number = (currentIndex - 1 + slidesData.length) % slidesData.length;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsSwiping(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX.current) return;

    touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchDeltaX.current) return;

    if (touchDeltaX.current > SwipeThreshold) {
      goToPrevSlide();
    } else if (touchDeltaX.current < -SwipeThreshold) {
      goToNextSlide();
    }

    touchStartX.current = null;
    touchDeltaX.current = null;
    setIsSwiping(false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    touchStartX.current = event.clientX;
    setIsSwiping(true);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!touchStartX.current) return;

    const touchEndX: number = event.clientX;
    const touchDelta: number = touchEndX - touchStartX.current;

    if (touchDelta > SwipeThreshold) {
      goToPrevSlide();
    } else if (touchDelta < -SwipeThreshold) {
      goToNextSlide();
    }

    touchStartX.current = null;
    setIsSwiping(false);
  };

  // Auto slide to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);
    // Clear the interval when the component unmounts or when currentIndex changes
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="w-full h-screen flex items-center justify-center select-none">
      <div className="w-11/12 h-3/4 md:w-4/5 md:h-3/5 sm:w-11/12 sm:h-1/2 bg-white border shadow-lg rounded-lg overflow-hidden relative">
        <div
          className="relative w-full h-full flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slidesData.map((slide) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0"
            >
              <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {slidesData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                index === currentIndex ? 'bg-white' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Slider;