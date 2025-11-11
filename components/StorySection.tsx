
import React from 'react';
import type { StorySectionProps } from '../types';

const StorySection: React.FC<StorySectionProps> = ({ title, text, imageUrl, imageAlt, reverse = false }) => {
  const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className={`flex flex-col ${flexDirection} items-center gap-8 md:gap-12 lg:gap-16`}>
      <div className="md:w-1/2 w-full">
        <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-2xl shadow-cyan-900/20 w-full h-auto object-cover aspect-video" />
      </div>
      <div className="md:w-1/2 w-full">
        <h3 className="text-3xl md:text-4xl font-bold text-cyan-100 mb-4">{title}</h3>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
};

export default StorySection;
