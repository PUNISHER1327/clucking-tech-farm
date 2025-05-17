import React, { useEffect, useState } from 'react';

const EggAnimation: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [visible, setVisible] = useState(true);

  // ✅ Hide after scrolling beyond 100vh
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY < window.innerHeight; // below first screen?
      setVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Run animation once on mount
  useEffect(() => {
    const sequence = [
      setTimeout(() => setAnimationStage(1), 500),
      setTimeout(() => setAnimationStage(2), 1500),
      setTimeout(() => setAnimationStage(3), 2500),
      setTimeout(() => setAnimationStage(4), 3500),
      setTimeout(() => setAnimationStage(5), 4500),
    ];
    const resetTimer = setTimeout(() => setAnimationStage(0), 6000);
    return () => {
      sequence.forEach(clearTimeout);
      clearTimeout(resetTimer);
    };
  }, []);

  if (!visible) return null; // 🔒 Hide if scrolled down

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 pointer-events-none z-50">

      {/* Egg */}
      <div className={`
        transition-all duration-1000 ease-in-out 
        ${animationStage >= 1 ? 'animate-wiggle' : ''}
        ${animationStage >= 5 ? 'opacity-0 scale-0' : 'opacity-80'}
        relative
      `}>
        {/* Base egg */}
        <div className={`
          w-32 h-40 bg-gradient-to-b from-orange-50 to-orange-100 
          rounded-full transform rotate-12
          shadow-lg relative z-10
          ${animationStage >= 1 ? 'animate-wiggle' : ''}
        `}>
          {/* Cracks */}
          {animationStage >= 2 && (
            <>
              <div className="absolute top-1/4 left-0 w-8 h-12 border-t-2 border-r-2 border-orange-400 transform -rotate-45 z-20" />
              <div className="absolute top-1/3 right-2 w-6 h-8 border-t-2 border-l-2 border-orange-400 transform rotate-30 z-20" />
            </>
          )}
          {animationStage >= 3 && (
            <>
              <div className="absolute top-1/2 left-1/4 w-12 h-10 border-t-2 border-l-2 border-orange-400 transform rotate-12 z-20" />
              <div className="absolute top-2/5 right-1/4 w-10 h-10 border-t-2 border-r-2 border-orange-400 transform -rotate-20 z-20" />
            </>
          )}
          {animationStage >= 4 && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-3/4 h-3/4 bg-orange-500 rounded-full animate-pulse" />
            </div>
          )}
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-4 w-20 h-4 bg-black/20 rounded-full blur-sm" />
      </div>

      {/* Hatched chick */}
      {animationStage >= 5 && (
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center">
            <div className="w-20 h-16 bg-yellow-300 rounded-full">
              <div className="relative top-4 flex justify-center space-x-8">
                <div className="w-3 h-3 bg-black rounded-full" />
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <div className="relative top-6 left-8 w-4 h-4 bg-orange-500 transform rotate-45" />
            </div>
            <div className="w-16 h-14 bg-yellow-300 rounded-full -mt-2">
              <div className="relative top-4 flex justify-between">
                <div className="w-5 h-10 bg-yellow-400 rounded-full transform -rotate-12 -ml-1" />
                <div className="w-5 h-10 bg-yellow-400 rounded-full transform rotate-12 -mr-1" />
              </div>
              <div className="relative top-2 flex justify-center space-x-4">
                <div className="w-3 h-4 bg-orange-500 rounded-b-lg" />
                <div className="w-3 h-4 bg-orange-500 rounded-b-lg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EggAnimation;
