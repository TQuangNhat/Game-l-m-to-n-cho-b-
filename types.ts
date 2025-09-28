
export enum Difficulty {
  Easy = 'dễ',
  Medium = 'trung bình',
  Hard = 'khó',
}

export type GameState = 'start' | 'playing' | 'finished';

export interface Question {
  num1: number;
  num2: number;
  operator: '+' | '-';
  options: number[];
  correctAnswer: number;
}
