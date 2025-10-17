import React from 'react';
import { Difficulty } from '../types';
import { EasyLevelIcon, HardLevelIcon, MediumLevelIcon, StarIcon } from './Icons';

interface JourneyMapProps {
    currentStep: number;
    totalSteps: number;
    difficulty: Difficulty;
}

const JourneyMap: React.FC<JourneyMapProps> = ({ currentStep, totalSteps, difficulty }) => {

    const getCharacterIcon = () => {
        switch (difficulty) {
            case Difficulty.Easy:
                return EasyLevelIcon;
            case Difficulty.Medium:
                return MediumLevelIcon;
            case Difficulty.Hard:
                return HardLevelIcon;
            default:
                return StarIcon;
        }
    }

    const CharacterIcon = getCharacterIcon();
    const progressPercentage = ((currentStep - 1) / (totalSteps -1 )) * 100;

    return (
        <div className="mb-6 text-center">
            <div className="flex justify-center items-center text-slate-300 font-semibold mb-2 gap-4">
                <span>Hành trình khám phá</span>
                <span>{currentStep} / {totalSteps}</span>
            </div>
            <div className="relative w-full h-12 flex items-center">
                {/* Path Background */}
                <div className="w-full h-1.5 bg-slate-700/50 rounded-full" />
                
                {/* Path Progress */}
                <div 
                    className="absolute h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%`}}
                />

                {/* Stars along the path */}
                <div className="absolute w-full flex justify-between items-center">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                        <div key={index} className={`w-3 h-3 rounded-full ${index < currentStep ? 'bg-yellow-400' : 'bg-slate-600'}`} />
                    ))}
                </div>
                
                {/* Character Icon */}
                <div 
                    className="absolute -top-4 transition-all duration-500"
                    style={{ left: `calc(${progressPercentage}% - 1.25rem)` }}
                >
                     <CharacterIcon className="w-10 h-10 drop-shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default JourneyMap;