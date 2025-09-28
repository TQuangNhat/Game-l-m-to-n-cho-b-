import React, { useState, useEffect, useCallback } from 'react';
import { Question } from '../types';
import { CheckIcon, XIcon, QuitIcon } from './Icons';

interface QuestionScreenProps {
  question: Question;
  onAnswer: (answer: number) => void;
  onQuit: () => void;
  questionNumber: number;
  totalQuestions: number;
  timeLimit: number;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, onAnswer, onQuit, questionNumber, totalQuestions, timeLimit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(timeLimit);
  }, [question, timeLimit]);

  useEffect(() => {
    if (isAnswered) return;

    if (timeLeft <= 0) {
      setIsAnswered(true);
      setSelectedAnswer(null); // Không có câu trả lời nào được chọn
      const timerId = setTimeout(() => {
        onAnswer(-1); // -1 để chỉ hết giờ
      }, 2000); // Hiển thị câu trả lời đúng trong 2 giây
      return () => clearTimeout(timerId);
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isAnswered, onAnswer]);
  
  const handleOptionClick = useCallback((option: number) => {
    if (isAnswered) return; // Chỉ cho phép trả lời một lần

    setIsAnswered(true);
    setSelectedAnswer(option);
    
    // Tự động chuyển sang câu tiếp theo sau 2 giây
    setTimeout(() => {
      onAnswer(option);
    }, 2000);
  }, [isAnswered, onAnswer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isAnswered) return;

      const key = parseInt(event.key, 10);
      if (key >= 1 && key <= 4) {
        const optionIndex = key - 1;
        if (optionIndex < question.options.length) {
          const selectedOption = question.options[optionIndex];
          handleOptionClick(selectedOption);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAnswered, question.options, handleOptionClick]);
  
  const handleQuit = () => {
    onQuit();
  };

  const getButtonClass = (option: number) => {
    let baseClass = "relative text-5xl font-bold py-8 px-6 rounded-2xl shadow-lg transform transition-all duration-300 focus:outline-none border-2";
    
    if (isAnswered) {
      if (option === question.correctAnswer) {
        return `${baseClass} bg-green-600/90 text-white scale-110 border-green-400 ring-4 ring-green-500/50`;
      }
      if (option === selectedAnswer) { // Câu trả lời sai đã chọn
        return `${baseClass} bg-red-600/90 text-white animate-shake border-red-400`;
      }
      return `${baseClass} bg-slate-800/60 text-slate-500 border-slate-700 opacity-70 cursor-not-allowed`;
    }

    return `${baseClass} bg-slate-700/80 text-white border-slate-600 hover:bg-slate-600/80 hover:border-slate-500 hover:scale-105`;
  };

  const getTimerBarColor = () => {
    const percentage = timeLeft / timeLimit;
    if (percentage > 0.5) return 'from-sky-400 to-cyan-400';
    if (percentage > 0.25) return 'from-yellow-400 to-orange-400';
    return 'from-red-500 to-rose-500';
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="relative w-full max-w-4xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-2xl">
        <button
            onClick={handleQuit}
            className="absolute top-5 left-5 text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-slate-700/50"
            aria-label="Về màn hình chính"
        >
            <QuitIcon className="w-8 h-8" />
        </button>

        <div className="mb-6 text-center">
          <div className="flex justify-center items-center text-slate-300 font-semibold mb-2 gap-4">
            <span>Câu hỏi</span>
            <span>{questionNumber} / {totalQuestions}</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-4 max-w-xs mx-auto">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="relative h-6 w-full bg-slate-700/50 rounded-full mb-8 overflow-hidden border-2 border-slate-700">
            <div
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getTimerBarColor()} rounded-full transition-all duration-1000 ease-linear`}
                style={{ width: `${(timeLeft / timeLimit) * 100}%` }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                {timeLeft}
            </span>
        </div>
        
        <div className="bg-slate-900/60 flex items-center justify-center h-48 rounded-2xl mb-8">
            <p className="text-8xl font-bold text-white tracking-wider">
                {question.num1} {question.operator} {question.num2} = ?
            </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
              className={getButtonClass(option)}
            >
              <span className="absolute top-3 left-3 w-10 h-10 rounded-full bg-slate-900/40 flex items-center justify-center text-2xl font-mono text-slate-400 border border-slate-600">
                {index + 1}
              </span>
              {option}
              {isAnswered && option === question.correctAnswer && (
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-slate-800 shadow-md flex items-center justify-center">
                  <CheckIcon className="w-8 h-8 text-green-400" />
                </div>
              )}
              {isAnswered && option === selectedAnswer && option !== question.correctAnswer && (
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-slate-800 shadow-md flex items-center justify-center">
                  <XIcon className="w-8 h-8 text-red-400" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default QuestionScreen;