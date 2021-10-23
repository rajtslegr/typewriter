import React from 'react';
import { useHistory } from 'react-router-dom';
import CountDown from '../components/game/CountDown';
import ScoreBoard from '../components/game/ScoreBoard';
import Word from '../components/game/Word';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
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
    postError,
    preparePlayGround,
  } = useGame();
  const history = useHistory();

  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-24 space-y-12">
      {(gameInProgress || startedCountDown) && (
        <Word
          outgoingChars={outgoingChars}
          currentChar={currentChar}
          incomingChars={incomingChars}
          nextWord={nextWord}
        />
      )}
      {!gameInProgress && !startedCountDown && (
        <div className="flex flex-row space-x-2">
          <Button
            onClick={() => preparePlayGround()}
            type="button"
            variant="dark"
          >
            {!gameFinished ? 'Start game' : 'Play again'}
          </Button>
          <Button onClick={() => history.push('/')} variant="dark">
            Dashboard
          </Button>
        </div>
      )}
      {(gameInProgress || startedCountDown || gameFinished) && (
        <ScoreBoard
          timeOut={timeOut}
          wordsCount={wordsCount}
          errorsCount={errorsCount}
          wpm={wpm}
          accuracy={accuracy}
        />
      )}
      {postError && <Error>{postError}</Error>}
      {startedCountDown && <CountDown countDown={countDown} />}
    </div>
  );
};
export default Game;
