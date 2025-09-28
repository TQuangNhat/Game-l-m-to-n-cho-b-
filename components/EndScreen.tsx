import React from 'react';
import { StarIcon } from './Icons';

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onGoToStart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalQuestions, onRestart, onGoToStart }) => {
    const isWinner = score >= totalQuestions / 2;
    const message = isWinner ? "Xuất sắc! Bé là một phi hành gia toán học cừ khôi!" : "Đừng buồn! Mỗi hành trình đều là một bài học quý giá.";

    const handleRestart = () => {
        onRestart();
    };

    const handleGoToStart = () => {
        onGoToStart();
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-4">Hoàn thành!</h2>
            <p className="text-xl text-slate-300 mb-6">
                Bé đã trả lời đúng <span className="font-bold text-green-400 text-2xl">{score}</span> / <span className="font-bold text-sky-400 text-2xl">{totalQuestions}</span> câu
            </p>

            <div className="flex justify-center mb-8">
                {Array.from({ length: totalQuestions }).map((_, i) => (
                    <StarIcon key={i} className={`w-8 h-8 ${i < score ? 'text-yellow-400' : 'text-slate-600'}`} />
                ))}
            </div>
            
            <div className="mb-8">
                <img 
                    src={`https://picsum.photos/seed/${isWinner ? 'space-victory-party' : 'lonely-astronaut'}/500/350`} 
                    alt="Kết quả" 
                    className="rounded-2xl shadow-lg mx-auto filter brightness-90 contrast-125"
                />
                <p className="mt-4 text-lg font-semibold text-slate-200">{message}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                 <button
                    onClick={handleGoToStart}
                    className="bg-slate-700 text-slate-200 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 text-xl focus:outline-none focus:ring-4 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 order-2 sm:order-1"
                >
                    Về màn hình chính
                </button>
                <button
                    onClick={handleRestart}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-orange-500/40 transform hover:scale-105 transition-transform duration-300 text-2xl focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-900 order-1 sm:order-2"
                >
                    Chơi lại
                </button>
            </div>
        </div>
    </div>
  );
};

export default EndScreen;