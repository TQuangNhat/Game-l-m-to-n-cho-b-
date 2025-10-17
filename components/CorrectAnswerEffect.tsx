import React from 'react';
import { StarIcon } from './Icons';

interface CorrectAnswerEffectProps {
  position: { top: number; left: number };
}

const CorrectAnswerEffect: React.FC<CorrectAnswerEffectProps> = ({ position }) => {
  const stars = Array.from({ length: 8 });

  return (
    <div
      className="fixed pointer-events-none"
      style={{ top: position.top, left: position.left, zIndex: 9999 }}
    >
      {stars.map((_, i) => (
        <div key={i} className="absolute animate-fly-out">
          <StarIcon
            className="w-6 h-6 text-yellow-300"
            style={{ '--i': i } as React.CSSProperties}
          />
        </div>
      ))}
      <style>{`
        @keyframes fly-out {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(var(--i) * 45deg) * 100px), calc(sin(var(--i) * 45deg) * 100px)) scale(1.2);
            opacity: 0;
          }
        }
        .animate-fly-out {
          animation: fly-out 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CorrectAnswerEffect;