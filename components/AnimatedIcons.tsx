import React from 'react';

type IconProps = {
    className?: string;
    style?: React.CSSProperties;
};

// A happy, bouncing star-like character
export const HappyStarCharacter: React.FC<IconProps> = ({ className, style }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style} role="img" aria-label="Nhân vật ngôi sao vui vẻ">
        <g>
            <path d="M50,5 L61.2,35.8 L95.1,38.2 L70.1,60.2 L78.4,92.6 L50,75 L21.6,92.6 L29.9,60.2 L4.9,38.2 L38.8,35.8 L50,5 Z" fill="#FFD700" stroke="#FDB813" strokeWidth="2" />
            <circle cx="40" cy="45" r="5" fill="black" />
            <circle cx="60" cy="45" r="5" fill="black" />
            <path d="M40,65 Q50,75 60,65" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
    </svg>
);

// A cheerful, wiggling blob character
export const CheerfulBlobCharacter: React.FC<IconProps> = ({ className, style }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style} role="img" aria-label="Nhân vật đốm màu vui vẻ">
        <g>
            <path d="M50,10 C10,10 10,90 50,90 C90,90 90,10 50,10 Z" fill="#87CEFA" stroke="#4682B4" strokeWidth="2"/>
            <ellipse cx="50" cy="90" rx="30" ry="10" fill="#87CEFA" stroke="#4682B4" strokeWidth="2"/>
            <circle cx="35" cy="40" r="6" fill="white" />
            <circle cx="32" cy="40" r="3" fill="black" />
            <circle cx="65" cy="40" r="6" fill="white" />
            <circle cx="62" cy="40" r="3" fill="black" />
            <path d="M35,65 C45,75 55,75 65,65" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
    </svg>
);

// A cool robot character giving a thumbs up
export const CoolRobotCharacter: React.FC<IconProps> = ({ className, style }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style} role="img" aria-label="Nhân vật robot ngầu">
        <g stroke="#555" strokeWidth="2" fill="#D8D8D8">
            {/* Head */}
            <rect x="30" y="10" width="40" height="30" rx="5" />
            <rect x="48" y="5" width="4" height="10" fill="#999" />
             {/* Eyes */}
            <rect x="38" y="20" width="24" height="10" fill="#32CD32" stroke="#228B22" />
            {/* Body */}
            <rect x="25" y="45" width="50" height="40" rx="5"/>
            <circle cx="50" cy="65" r="10" fill="#FFA500" stroke="#FF8C00"/>
             {/* Arms */}
            <rect x="10" y="50" width="10" height="25" rx="3"/>
            <rect x="80" y="50" width="10" height="25" rx="3"/>
             {/* Legs */}
            <rect x="35" y="90" width="10" height="10"/>
            <rect x="55" y="90" width="10" height="10"/>
        </g>
    </svg>
);