'use client';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
  ];
  
  const nextSlide = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length) {
        return 1; // If we're at the last slide, jump to the first image
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 1) {
        return images.length; // If we're at the first slide, jump to the last image
      }
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Reset transition after a slide change to avoid "jumping"
  useEffect(() => {
    if (!transitioning) return;

    const timeout = setTimeout(() => {
      setTransitioning(false);
    }, 700); // Match this time with the duration of your transition

    return () => clearTimeout(timeout);
  }, [transitioning]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className={`flex transition-transform duration-700 ease-in-out ${
          transitioning ? 'transition-none' : ''
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {/* Duplicated last image for infinite loop */}
        <div
          key="last"
          className="w-full h-screen bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${images[images.length - 1]})` }}
        />
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-screen bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute bottom-1/4 left-10 text-white text-shadow-md">
              <h2 className="text-4xl font-bold">Explore the World</h2>
              <p className="text-xl">Discover amazing places</p>
            </div>
          </div>
        ))}
        {/* Duplicated first image for infinite loop */}
        <div
          key="first"
          className="w-full h-screen bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
      </div>

      {/* Left and right arrow buttons */}
      <div
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-4xl text-white cursor-pointer "
        onClick={prevSlide}
      >
        &#10094;
      </div>
      <div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-4xl text-white cursor-pointer "
        onClick={nextSlide}
      >
        &#10095;
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full bg-white cursor-pointer transition-colors duration-300 ${
              index === currentIndex - 1 ? 'bg-yellow-500' : ''
            }`}
            onClick={() => setCurrentIndex(index + 1)} // Set the index based on clicked dot
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;