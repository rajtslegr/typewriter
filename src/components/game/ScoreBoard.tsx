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
  <div className="flex flex-row items-center w-full p-8 text-2xl text-green-500 border rounded border-brand-500 justify-evenly">
    <div>Time Left: {timeOut}</div>
    <div>Words: {wordsCount}</div>
    <div>WPM: {wpm}</div>
    <div>Errors: {errorsCount}</div>
    <div>Accuracy: {accuracy}%</div>
  </div>
);

export default ScoreBoard;
