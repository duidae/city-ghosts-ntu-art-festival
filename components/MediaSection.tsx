
import React from 'react';

interface MediaSectionProps {
  title: string;
  text: string;
  videoPosterUrl: string;
}

const MediaSection: React.FC<MediaSectionProps> = ({ title, text, videoPosterUrl }) => {
  return (
    <section className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-cyan-100 mb-4">{title}</h3>
      <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed mb-8">
        {text}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3 w-full max-w-3xl mx-auto">
            {/* Placeholder for video player */}
            <video
                controls
                poster={videoPosterUrl}
                className="rounded-lg shadow-2xl shadow-cyan-900/20 w-full h-auto object-cover aspect-video"
            >
                {/* In a real app, you would have <source> tags here */}
            </video>
        </div>
        <div className="md:col-span-2 flex flex-col items-center gap-4">
            <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <p>Listen to the underground stream.</p>
            </div>
             {/* Placeholder for audio player */}
            <audio controls className="w-full max-w-xs">
                 {/* In a real app, you would have <source> tags here */}
            </audio>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
