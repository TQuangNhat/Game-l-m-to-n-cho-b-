import React from 'react';
import { StarIcon } from './Icons';
import { HappyStarCharacter, CheerfulBlobCharacter, CoolRobotCharacter } from './AnimatedIcons';

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

    const renderCharacters = () => {
        const percentage = score / totalQuestions;
        const characters = [];

        if (percentage >= 0.7) {
             characters.push(<HappyStarCharacter key="char1" className="absolute w-20 h-20 md:w-24 md:h-24 -top-10 -left-10 md:-top-12 md:-left-12 animate-bounce-slow" style={{ animationDelay: '0s' }} />);
             characters.push(<CoolRobotCharacter key="char3" className="absolute w-24 h-24 md:w-28 md:h-28 -bottom-10 -left-8 md:-bottom-12 md:-left-10 animate-float" style={{ animationDelay: '0.6s' }}/>);
        }
        
        if (percentage >= 0.4) {
            characters.push(<CheerfulBlobCharacter key="char2" className="absolute w-16 h-16 md:w-20 md:h-20 -bottom-8 -right-8 animate-wiggle" style={{ animationDelay: '0.3s' }}/>);
        }

        if (percentage === 1) {
            characters.push( <HappyStarCharacter key="char4" className="absolute w-16 h-16 md:w-20 md:h-20 -top-8 -right-8 opacity-90 animate-spin-slow" style={{ animationDelay: '0.9s' }}/>);
        }
        
        // Add one encouraging character for lower scores
        if (percentage < 0.4 && percentage > 0) {
             characters.push(<CheerfulBlobCharacter key="char-encourage" className="absolute w-16 h-16 md:w-20 md:h-20 -bottom-8 -right-8 animate-wiggle" />);
        }

        if (characters.length > 0) {
            return (
                <div className="absolute inset-0 z-0">
                    {characters}
                </div>
            )
        }
        return null;
    }

    const handleRestart = () => {
        onRestart();
    };

    const handleGoToStart = () => {
        onGoToStart();
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 overflow-hidden">
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full">
            
            {renderCharacters()}

            <div className="relative z-10"> {/* Content wrapper with higher z-index */}
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-4 animate-pop-in" style={{'--pop-in-delay': '0s'} as React.CSSProperties}>
                    Hoàn thành!
                </h2>
                <p className="text-lg md:text-xl text-slate-200 mb-6 animate-pop-in" style={{'--pop-in-delay': '0.2s'} as React.CSSProperties}>
                    {message}
                </p>

                <div className="flex items-baseline justify-center gap-2 sm:gap-4 my-6 md:my-8 animate-pop-in" style={{'--pop-in-delay': '0.4s'} as React.CSSProperties}>
                    <span className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-sky-400 to-purple-500 leading-none">{score}</span>
                    <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-500">/ {totalQuestions}</span>
                </div>

                <div className="flex justify-center mb-8 md:mb-12 animate-pop-in" style={{'--pop-in-delay': '0.6s'} as React.CSSProperties}>
                    <div className="flex flex-wrap justify-center gap-1">
                        {Array.from({ length: totalQuestions }).map((_, i) => (
                            <StarIcon key={i} className={`w-7 h-7 sm:w-8 sm:h-8 ${i < score ? 'text-yellow-400' : 'text-slate-600'}`} />
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 animate-pop-in" style={{'--pop-in-delay': '0.8s'} as React.CSSProperties}>
                    <button
                        onClick={handleGoToStart}
                        className="bg-slate-700 text-slate-200 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 order-2 sm:order-1"
                    >
                        Về màn hình chính
                    </button>
                    <button
                        onClick={handleRestart}
                        className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-orange-500/40 transform hover:scale-105 transition-transform duration-300 text-xl sm:text-2xl focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-900 order-1 sm:order-2"
                    >
                        Chơi lại
                    </button>
                </div>
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
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0) rotate(-15deg) scale(1); }
            50% { transform: translateY(-20px) rotate(-10deg) scale(1.05); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
            transform-origin: center;
          }

          @keyframes wiggle {
            0%, 100% { transform: rotate(5deg) scale(1); }
            50% { transform: rotate(-5deg) scale(1.05); }
          }
          .animate-wiggle {
              animation: wiggle 2s ease-in-out infinite alternate;
              transform-origin: bottom center;
          }

          @keyframes float {
            0% { transform: translateY(0px) rotate(10deg); }
            50% { transform: translateY(-25px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(10deg); }
          }
          .animate-float {
              animation: float 5s ease-in-out infinite;
              transform-origin: center;
          }
          
          .animate-spin-slow {
              animation: spin 12s linear infinite;
          }
          
          @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
          }
        `}</style>
    </div>
  );
};

export default EndScreen;