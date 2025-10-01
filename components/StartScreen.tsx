import React from 'react';
import { Difficulty } from '../types';
import { StarIcon, EasyLevelIcon, MediumLevelIcon, HardLevelIcon } from './Icons';

interface StartScreenProps {
  onStart: (difficulty: Difficulty) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const handleStart = (difficulty: Difficulty) => {
    onStart(difficulty);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl w-full max-w-4xl">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
                <StarIcon className="w-10 h-10 sm:w-16 sm:h-16 text-yellow-300 animate-pulse" />
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-sky-400 pb-2">Bé Vui Học Toán</h1>
                <StarIcon className="w-10 h-10 sm:w-16 sm:h-16 text-yellow-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12">Hãy chọn một nhân vật để bắt đầu cuộc phiêu lưu!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                onClick={() => handleStart(Difficulty.Easy)}
                className="group bg-green-500/80 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-2xl sm:text-3xl focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900 border-2 border-green-300/50 hover:bg-green-500"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <EasyLevelIcon className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:rotate-[-15deg] group-hover:scale-110"/>
                    <span>Dễ</span>
                  </div>
                </button>
                <button
                onClick={() => handleStart(Difficulty.Medium)}
                className="group bg-blue-500/80 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-2xl sm:text-3xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 border-2 border-blue-300/50 hover:bg-blue-500"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <MediumLevelIcon className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-110"/>
                    <span>Trung Bình</span>
                  </div>
                </button>
                <button
                onClick={() => handleStart(Difficulty.Hard)}
                className="group bg-red-500/80 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-2xl sm:text-3xl focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 border-2 border-red-300/50 hover:bg-red-500"
                >
                   <div className="flex flex-col items-center justify-center gap-2">
                    <HardLevelIcon className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110"/>
                    <span>Khó</span>
                  </div>
                </button>
            </div>
        </div>
    </div>
  );
};

export default StartScreen;