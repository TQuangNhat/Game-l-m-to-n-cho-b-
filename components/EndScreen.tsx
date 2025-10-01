import React from 'react';
import { StarIcon } from './Icons';

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onGoToStart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalQuestions, onRestart, onGoToStart }) => {
    
    const getFeedback = () => {
        const percentage = score / totalQuestions;
        if (percentage === 1) { // 10/10
            return {
                message: "Hoàn hảo! Bé là một thiên tài toán học vũ trụ!",
            };
        }
        if (percentage >= 0.7) { // 7-9/10
            return {
                message: "Xuất sắc! Bé là một phi hành gia toán học cừ khôi!",
            };
        }
        if (percentage >= 0.4) { // 4-6/10
            return {
                message: "Cố gắng lắm! Mỗi hành trình đều là một bài học quý giá. Thử lại nhé!",
            };
        }
        // 0-3/10
        return {
            message: "Đừng buồn! Luyện tập thêm một chút và bé sẽ chinh phục được các vì sao!",
        };
    };

    const { message } = getFeedback();

    const handleRestart = () => {
        onRestart();
    };

    const handleGoToStart = () => {
        onGoToStart();
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-4 animate-pop-in" style={{'--pop-in-delay': '0s'} as React.CSSProperties}>
                Hoàn thành!
            </h2>
            <p className="text-xl text-slate-200 mb-6 animate-pop-in" style={{'--pop-in-delay': '0.2s'} as React.CSSProperties}>
                {message}
            </p>

            <div className="flex items-baseline justify-center gap-4 my-8 animate-pop-in" style={{'--pop-in-delay': '0.4s'} as React.CSSProperties}>
                <span className="text-[12rem] md:text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-sky-400 to-purple-500 leading-none">{score}</span>
                <span className="text-4xl md:text-6xl font-bold text-slate-500">/ {totalQuestions}</span>
            </div>

            <div className="flex justify-center mb-12 animate-pop-in" style={{'--pop-in-delay': '0.6s'} as React.CSSProperties}>
                {Array.from({ length: totalQuestions }).map((_, i) => (
                    <StarIcon key={i} className={`w-8 h-8 ${i < score ? 'text-yellow-400' : 'text-slate-600'}`} />
                ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 animate-pop-in" style={{'--pop-in-delay': '0.8s'} as React.CSSProperties}>
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
        <style>{`
          @keyframes pop-in {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          .animate-pop-in {
            animation: pop-in 0.5s ease-out forwards;
            animation-delay: var(--pop-in-delay, 0s);
            opacity: 0; /* Bắt đầu ẩn */
          }
        `}</style>
    </div>
  );
};

export default EndScreen;