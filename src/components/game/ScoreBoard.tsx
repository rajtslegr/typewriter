interface ScoreBoardProps {
  timeOut: number;
  wordsCount: number;
  errorsCount: number;
  wpm: number;
  accuracy: string;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  timeOut,
  wordsCount,
  errorsCount,
  wpm,
  accuracy,
}) => (
  <div className="flex flex-col justify-evenly p-8 w-full text-2xl text-gray-300 rounded border border-brand-500 md:flex-row md:items-center">
    <div>Time Left: {timeOut}</div>
    <div>Words: {wordsCount}</div>
    <div>WPM: {wpm}</div>
    <div>Errors: {errorsCount}</div>
    <div>Accuracy: {accuracy}%</div>
  </div>
);

export default ScoreBoard;
