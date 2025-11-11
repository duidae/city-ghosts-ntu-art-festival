
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/seed/taipei/1920/1080')", filter: 'brightness(0.4)' }}
      ></div>
      <div className="relative z-10 p-4 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight">
          Under the City, a River Remembers.
        </h2>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 drop-shadow-md">
          They swim in the darkness beneath our feet. The forgotten natives of a land now covered in concrete.
        </p>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
