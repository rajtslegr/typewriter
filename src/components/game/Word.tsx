import React from 'react';

interface Props {
  outgoingChars: string;
  currentChar: string;
  incomingChars: string;
  nextWord: string;
}

const Word: React.FC<Props> = ({
  outgoingChars,
  currentChar,
  incomingChars,
  nextWord,
}) => (
  <div className="flex flex-row items-baseline justify-center w-full m-16">
    <div className="text-7xl">
      <span className="text-green-500">{outgoingChars}</span>
      <span className="text-brand-500">{currentChar}</span>
      <span className="text-gray-200">{incomingChars}</span>
    </div>
    <div className="ml-8 text-4xl text-gray-600">{nextWord}</div>
  </div>
);

export default Word;
