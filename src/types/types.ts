export interface AuthForm {
  email: string;
  password: string;
}

export interface ProfileForm {
  email: string;
  username: string;
}

export interface GameProps {
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
