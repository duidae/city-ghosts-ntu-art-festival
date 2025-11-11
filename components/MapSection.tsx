
import React from 'react';

interface MapSectionProps {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
}

const MapSection: React.FC<MapSectionProps> = ({ title, text, imageUrl, imageAlt }) => {
  return (
    <section className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-cyan-100 mb-4">{title}</h3>
      <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed mb-8">
        {text}
      </p>
      <div className="w-full max-w-5xl mx-auto">
        <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-2xl shadow-cyan-900/20 w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default MapSection;
