import React from 'react';

// This component is often used to show a loading screen or animated logo.
const IntroAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neon-dark text-white">
      <div className="animate-pulse text-5xl font-display text-neon-blue">
        FLINT
      </div>
      <p className="mt-4 text-xl text-gray-400">
        Initiating Node Access...
      </p>
      {/* Simple loading bar placeholder */}
      <div className="w-64 mt-8 h-1 bg-neon-card rounded-full overflow-hidden">
        <div className="h-full w-1/4 bg-neon-blue animate-progress"></div>
      </div>
      <style jsx>{`
        /* Minimal CSS for a placeholder animation */
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-progress {
          animation: progress 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;