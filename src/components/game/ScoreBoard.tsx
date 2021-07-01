import React from 'react';

interface Props {
  timeOut: number;
  wordsCount: number;
  errorsCount: number;
  wpm: number;
  accuracy: string;
}

const ScoreBoard: React.FC<Props> = ({
  timeOut,
  wordsCount,
  errorsCount,
  wpm,
  accuracy,
}) => (
  <div className="flex flex-col w-full p-8 text-2xl text-gray-300 border rounded md:items-center md:flex-row border-brand-500 justify-evenly">
    <div>Time Left: {timeOut}</div>
    <div>Words: {wordsCount}</div>
    <div>WPM: {wpm}</div>
    <div>Errors: {errorsCount}</div>
    <div>Accuracy: {accuracy}%</div>
  </div>
);

export default ScoreBoard;
