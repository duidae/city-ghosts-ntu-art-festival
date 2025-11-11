
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import MapSection from './components/MapSection';
import MediaSection from './components/MediaSection';
import GeminiSection from './components/GeminiSection';
import Footer from './components/Footer';
import { STORY_SECTIONS, MAP_SECTION_DATA, MEDIA_SECTION_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24 md:space-y-32">
          <StorySection 
            title={STORY_SECTIONS[0].title} 
            text={STORY_SECTIONS[0].text} 
            imageUrl={STORY_SECTIONS[0].imageUrl} 
            imageAlt={STORY_SECTIONS[0].imageAlt}
            reverse={false}
          />
          <MapSection
            title={MAP_SECTION_DATA.title}
            text={MAP_SECTION_DATA.text}
            imageUrl={MAP_SECTION_DATA.imageUrl}
            imageAlt={MAP_SECTION_DATA.imageAlt}
          />
          <StorySection 
            title={STORY_SECTIONS[1].title} 
            text={STORY_SECTIONS[1].text} 
            imageUrl={STORY_SECTIONS[1].imageUrl}
            imageAlt={STORY_SECTIONS[1].imageAlt}
            reverse={true}
          />
          <MediaSection
            title={MEDIA_SECTION_DATA.title}
            text={MEDIA_SECTION_DATA.text}
            videoPosterUrl={MEDIA_SECTION_DATA.videoPosterUrl}
          />
          <GeminiSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
