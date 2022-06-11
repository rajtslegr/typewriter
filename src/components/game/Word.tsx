interface WordProps {
  outgoingChars: string;
  currentChar: string;
  incomingChars: string;
  nextWord: string;
}

const Word: React.FC<WordProps> = ({
  outgoingChars,
  currentChar,
  incomingChars,
  nextWord,
}) => (
  <div className="flex flex-row justify-center items-baseline m-16 w-full">
    <div className="text-7xl">
      <span className="text-green-500">{outgoingChars}</span>
      <span className="text-brand-500">{currentChar}</span>
      <span className="text-gray-200">{incomingChars}</span>
    </div>
    <div className="ml-8 text-4xl text-gray-600">{nextWord}</div>
  </div>
);

export default Word;
