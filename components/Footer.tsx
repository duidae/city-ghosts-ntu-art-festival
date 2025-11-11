
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-t-slate-800 mt-16 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500">
        <p>Remember the life that flows beneath the streets.</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Taipei's Ghost Fish. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
