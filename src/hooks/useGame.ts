import { useEffect, useState } from 'react';

import { useAuth } from '../contexts/Auth';
import { insertGame } from '../lib/supabase';
import { GameProps } from '../types/types';
import generateWord from '../utils/wordGenerator';
import useInterval from './useInterval';
import useKeyPress from './useKeyPress';

const useGame = (): GameProps => {
  const { user } = useAuth();
  const [gameInProgress, setGameInProgress] = useState(false);
  const [startedCountDown, setStartedCountDown] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState('');
  const [incomingChars, setIncomingChars] = useState('');
  const [typedChars, setTypedChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [nextWord, setNextWord] = useState('');

  const [timeOut, setTimeout] = useState(30);
  const [countDown, setCountDown] = useState(3);
  const [startTime, setStartTime] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [errorsCount, setErrorsCount] = useState(0);
  const [accuracy, setAccuracy] = useState('100');

  const [postError, setPostError] = useState<string | null>('');

  const startGame = (): void => {
    setStartTime(new Date().getTime());
    setGameInProgress(true);
  };

  const stopGame = (): void => {
    setGameInProgress(false);
    setGameFinished(true);
  };

  useInterval(
    async () => {
      if (timeOut > 0) {
        setTimeout(timeOut - 1);
      } else {
        stopGame();

        if (user) {
          try {
            await insertGame(user?.id, wordsCount, errorsCount, wpm, accuracy);
          } catch (error) {
            const err = error as Error;
            setPostError(err.message);
          }
        }
      }
    },
    gameInProgress ? 1000 : null,
  );

  useInterval(
    () => {
      if (startedCountDown) {
        setCountDown(countDown - 1);
      }

      if (countDown === 1) {
        setStartedCountDown(false);
        setCountDown(3);
        startGame();
      }
    },
    startedCountDown ? 1000 : null,
  );

  const preparePlayGround = (): void => {
    setStartedCountDown(true);

    if (gameFinished) {
      setTimeout(30);
      setStartTime(0);
      setWpm(0);
      setOutgoingChars('');
      setCurrentChar('');
      setIncomingChars('');
      setTypedChars(0);
      setCorrectChars(0);
      setNextWord('');
      setErrorsCount(0);
      setAccuracy('100');
      setWordsCount(0);
      setPostError(null);
    }

    const generatedWord = generateWord();
    setNextWord(generateWord());
    setIncomingChars(generatedWord.substr(1));
    setCurrentChar(generatedWord.charAt(0));
  };

  useEffect(() => {
    if (correctChars > 0 && typedChars > 0) {
      setAccuracy(((correctChars / typedChars) * 100).toFixed(1));
    }
  }, [typedChars, correctChars]);

  useKeyPress((key) => {
    if (!gameInProgress && !startedCountDown && key === ' ') {
      preparePlayGround();
    }

    if (!gameInProgress) {
      return;
    }

    setTypedChars(typedChars + 1);

    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    if (key === currentChar) {
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);
      setCurrentChar(incomingChars.charAt(0));
      updatedIncomingChars = incomingChars.substring(1);

      const durationInMinutes = (new Date().getTime() - startTime) / 60000;
      setWpm(Math.round((wordsCount + 1) / durationInMinutes));

      if (incomingChars.length === 0) {
        const generatedWord = nextWord;
        setNextWord(generateWord());
        updatedIncomingChars += generatedWord.substring(1);
        setCurrentChar(generatedWord.charAt(0));
        setOutgoingChars('');
        setWordsCount(wordsCount + 1);
      }

      setIncomingChars(updatedIncomingChars);
      setCorrectChars(correctChars + 1);
    }
    setErrorsCount(errorsCount + 1);
  });

  return {
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
    postError,
  };
};

export default useGame;
