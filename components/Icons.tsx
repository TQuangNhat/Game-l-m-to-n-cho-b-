import React from 'react';

// Fix: Switched to using React.FC to correctly type icon components.
// This allows them to accept React-specific props like `key` without causing
// TypeScript errors when used in lists, as seen in EndScreen.tsx.
type IconProps = {
    className?: string;
    style?: React.CSSProperties;
};

export const StarIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className} style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const XIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className} style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const QuitIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className} style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
);

export const EasyLevelIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style} role="img" aria-label="Nhân vật cấp độ Dễ">
      <g>
        {/* Star Body */}
        <path d="M50 5 L61.8 35.5 H95 L70 55.5 L79 88 L50 68 L21 88 L30 55.5 L5 35.5 H38.2 Z" fill="#FFD700" stroke="#FDB813" strokeWidth="3"/>
        {/* Eyes */}
        <circle cx="40" cy="45" r="5" fill="white" stroke="black" strokeWidth="1"/>
        <circle cx="40" cy="45" r="2.5" fill="black"/>
        <circle cx="60" cy="45" r="5" fill="white" stroke="black" strokeWidth="1"/>
        <circle cx="60" cy="45" r="2.5" fill="black"/>
        {/* Smile */}
        <path d="M40 65 Q50 75 60 65" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Waving Arm */}
        <path d="M70 55 C 80 45, 90 55, 90 55" stroke="#FDB813" strokeWidth="8" fill="none" strokeLinecap="round"/>
      </g>
    </svg>
);

export const MediumLevelIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style} role="img" aria-label="Nhân vật cấp độ Trung bình">
       <g stroke="#555" strokeWidth="2.5" fill="#D8D8D8">
            {/* Head */}
            <rect x="30" y="10" width="40" height="30" rx="5" />
            <rect x="48" y="5" width="4" height="10" fill="#999" />
             {/* Eye (monocle) */}
            <circle cx="50" cy="25" r="10" fill="white" stroke="#333"/>
            <circle cx="50" cy="25" r="5" fill="#333"/>
            {/* Body */}
            <rect x="25" y="45" width="50" height="40" rx="5"/>
            {/* Thinking Hand */}
            <path d="M25 60 C 15 70, 25 80, 35 75" strokeWidth="6" strokeLinecap="round" stroke="#999" fill="none"/>
            <circle cx="50" cy="65" r="8" fill="#60a5fa" stroke="#1e40af"/>
             {/* Legs */}
            <rect x="35" y="90" width="10" height="10"/>
            <rect x="55" y="90" width="10" height="10"/>
        </g>
    </svg>
);

export const HardLevelIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style} role="img" aria-label="Nhân vật cấp độ Khó">
      <g>
        {/* Body */}
        <path d="M50 20 L70 45 L50 90 L30 45 Z" fill="#f87171" stroke="#991b1b" strokeWidth="3"/>
        {/* Head */}
        <circle cx="50" cy="30" r="15" fill="#f87171" stroke="#991b1b" strokeWidth="3"/>
        {/* Eyes (mask) */}
        <path d="M38 28 L62 28 L58 35 L42 35 Z" fill="black"/>
        <path d="M40 30 L45 33 L40 36 Z" fill="white"/>
        <path d="M60 30 L55 33 L60 36 Z" fill="white"/>
        {/* Arms (power pose) */}
        <path d="M30 45 C 10 55, 15 75, 32 70" stroke="#991b1b" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M70 45 C 90 55, 85 75, 68 70" stroke="#991b1b" strokeWidth="8" fill="none" strokeLinecap="round"/>
        {/* Energy Aura */}
        <path d="M10 40 Q 50 -10, 90 40" stroke="#FFD700" strokeWidth="3" fill="none" strokeDasharray="5,5" />
      </g>
    </svg>
);