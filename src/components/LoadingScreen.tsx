import { useEffect, useState } from "react";

export const LoadingScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    // Stage 1: Initial rotation (0.8s)
    const expansionTimer = setTimeout(() => {
      setIsExpanding(true);
    }, 800);

    // Stage 2: Expansion and fade transition (0.7s total for second phase)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinished, 500); // Wait for fade out animation
    }, 1500);

    return () => {
      clearTimeout(expansionTimer);
      clearTimeout(fadeTimer);
    };
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-in-out pointer-events-none ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="cube-wrapper mb-16">
        <div className={`cube ${isExpanding ? 'accelerate' : ''}`}>
          <div className="cube-face face-front"></div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </div>
      </div>
      <div className={`text-center transition-all duration-500 ${isExpanding ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
        <p className="text-primary font-heading tracking-[0.4em] uppercase text-sm font-medium animate-pulse-glow">
          HackSavvy Incoming
        </p>
      </div>
    </div>
  );
};
