export interface IAuthInputs {
  email: string;
  password: string;
}

export interface IProfileInputs {
  email: string;
  username: string;
}

export interface IGameProps {
  startedCountDown: boolean;
  countDown: number;
  gameInProgress: boolean;
  gameFinished: boolean;
  timeOut: number;
  wordsCount: number;
  errorsCount: number;
  wpm: number;
  accuracy: string;
  outgoingChars: string;
  currentChar: string;
  incomingChars: string;
  nextWord: string;
  postError: string | null;
  preparePlayGround: () => void;
}
