
import React, { useState, useCallback } from 'react';
import { generateGhostFishPoem } from '../services/geminiService';

const GeminiSection: React.FC = () => {
  const [poem, setPoem] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePoem = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setPoem('');
    try {
      const result = await generateGhostFishPoem();
      if (result.startsWith('Failed') || result.startsWith('API Key')) {
          setError(result);
      } else {
          setPoem(result);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section className="text-center bg-slate-900/50 p-8 md:p-12 rounded-lg border border-cyan-700/30 shadow-xl">
      <h3 className="text-3xl md:text-4xl font-bold text-cyan-100 mb-4">A Voice from Below</h3>
      <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed mb-8">
        The ghosts of the river have something to say. Click the button to channel their voice through the digital ether and hear their story in a new way.
      </p>
      
      <button
        onClick={handleGeneratePoem}
        disabled={isLoading}
        className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
      >
        {isLoading ? 'Listening to the depths...' : 'Ask the Fish to Speak'}
      </button>

      {poem && (
        <div className="mt-8 max-w-2xl mx-auto p-6 bg-slate-800/60 rounded-lg border border-cyan-900/50">
          <p className="text-lg text-cyan-200 whitespace-pre-wrap italic font-serif leading-loose">
            {poem}
          </p>
        </div>
      )}
      {error && (
        <div className="mt-8 max-w-2xl mx-auto p-4 bg-red-900/50 rounded-lg">
            <p className="text-red-300">{error}</p>
        </div>
      )}
    </section>
  );
};

export default GeminiSection;
