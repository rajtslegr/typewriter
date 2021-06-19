import React from 'react';
import CountDown from '../components/game/CountDown';
import ScoreBoard from '../components/game/ScoreBoard';
import Word from '../components/game/Word';
import Button from '../components/ui/Button';
import useGame from '../hooks/useGame';

const Game: React.FC = () => {
  const {
    startedCountDown,
    countDown,
    gameInProgress,
    gameFinished,
    timeOut,
    wordsCount,
    errorsCount,
    wpm,
    accuracy,
    outgoingChars,
    currentChar,
    incomingChars,
    nextWord,
    preparePlayGround,
  } = useGame();

  return (
    <div className="relative flex flex-col items-center justify-center w-full space-y-8">
      {(gameInProgress || startedCountDown || gameFinished) && (
        <ScoreBoard
          timeOut={timeOut}
          wordsCount={wordsCount}
          errorsCount={errorsCount}
          wpm={wpm}
          accuracy={accuracy}
        />
      )}
      {(gameInProgress || startedCountDown) && (
        <Word
          outgoingChars={outgoingChars}
          currentChar={currentChar}
          incomingChars={incomingChars}
          nextWord={nextWord}
        />
      )}
      {!gameInProgress && !startedCountDown && (
        <Button
          onClick={() => preparePlayGround()}
          type="button"
          variant="dark"
        >
          {!gameFinished ? 'START GAME' : 'PLAY AGAIN'}
        </Button>
      )}
      {startedCountDown && <CountDown countDown={countDown} />}
    </div>
  );
};
export default Game;
