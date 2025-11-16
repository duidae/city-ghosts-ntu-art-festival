
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl md:text-2xl font-bold text-gray-500 tracking-wider">
            {`{DECO}: 城市幽靈`}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
