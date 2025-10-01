import React, { useState, useCallback } from 'react';
import { Difficulty, GameState, Question } from './types';
import { TOTAL_QUESTIONS } from './constants';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import EndScreen from './components/EndScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const generateQuestions = useCallback((difficulty: Difficulty) => {
    const newQuestions: Question[] = [];
    const existingQuestions = new Set<string>(); // Để tránh các câu hỏi trùng lặp

    while (newQuestions.length < TOTAL_QUESTIONS) {
      let num1: number, num2: number, correctAnswer: number;
      let operator: '+' | '-';

      // Tất cả các cấp độ đều có 50% phép cộng và 50% phép trừ
      const randomOp = Math.random();
      operator = randomOp < 0.5 ? '+' : '-';

      if (operator === '+') {
        // Tạo câu hỏi cộng, đảm bảo tổng không vượt quá 10
        correctAnswer = Math.floor(Math.random() * 11); // Tổng từ 0 đến 10
        num1 = Math.floor(Math.random() * (correctAnswer + 1)); // num1 từ 0 đến tổng
        num2 = correctAnswer - num1;
      } else {
        // Tạo câu hỏi trừ, đảm bảo kết quả luôn dương (> 0)
        correctAnswer = Math.floor(Math.random() * 10) + 1; // Kết quả từ 1 đến 10
        num2 = Math.floor(Math.random() * (11 - correctAnswer)); // num2 để num1 không vượt quá 10
        num1 = num2 + correctAnswer;
      }

      // Tạo một khóa duy nhất cho câu hỏi để tránh trùng lặp.
      // Giờ đây, 5+3 và 3+5 được coi là hai câu hỏi khác nhau.
      const questionKey = `${num1}${operator}${num2}`;

      if (existingQuestions.has(questionKey)) {
        continue; // Nếu câu hỏi đã tồn tại, bỏ qua và tạo câu mới
      }
      existingQuestions.add(questionKey);

      // Tạo các lựa chọn cho câu trả lời
      const optionsSet = new Set<number>([correctAnswer]);
      while (optionsSet.size < 4) {
        const wrongAnswer = Math.floor(Math.random() * 11);
        optionsSet.add(wrongAnswer);
      }
      
      const options = shuffleArray(Array.from(optionsSet));
      newQuestions.push({ num1, num2, operator, correctAnswer, options });
    }
    return newQuestions;
  }, []);

  const handleStartGame = useCallback((difficulty: Difficulty) => {
    setDifficulty(difficulty);
    setQuestions(generateQuestions(difficulty));
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState('playing');
  }, [generateQuestions]);
  
  const handleAnswer = (answer: number) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('finished');
    }
  };

  const handleGoToStart = () => {
    setGameState('start');
  };

  const handleRestartGame = useCallback(() => {
    if (difficulty) {
      handleStartGame(difficulty);
    }
  }, [difficulty, handleStartGame]);

  const renderContent = () => {
    switch (gameState) {
      case 'playing':
        if (!difficulty) return null;
        
        let timeLimit;
        switch (difficulty) {
          case Difficulty.Easy: timeLimit = 15; break;
          case Difficulty.Medium: timeLimit = 10; break;
          case Difficulty.Hard: timeLimit = 7; break;
          default: timeLimit = 15;
        }

        return (
          <QuestionScreen
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onQuit={handleGoToStart}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={TOTAL_QUESTIONS}
            timeLimit={timeLimit}
          />
        );
      case 'finished':
        return (
          <EndScreen
            score={score}
            totalQuestions={TOTAL_QUESTIONS}
            onRestart={handleRestartGame}
            onGoToStart={handleGoToStart}
          />
        );
      case 'start':
      default:
        return <StartScreen onStart={handleStartGame} />;
    }
  };

  return (
    <main className="bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-sky-800/90 text-white min-h-screen relative">
      {renderContent()}
    </main>
  );
};

export default App;