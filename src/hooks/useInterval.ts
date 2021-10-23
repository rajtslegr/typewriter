import { useEffect, useRef } from 'react';

const noop = (): void => undefined;

const useInterval = (
  callback: () => void,
  delay: number | null | false,
  immediate?: boolean,
): void => {
  const savedCallback = useRef(noop);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!immediate) return;

    if (delay === null || delay === false) return;

    savedCallback.current();
  }, [delay, immediate]);

  useEffect(() => {
    if (delay === null || delay === false) return undefined;

    const tick = (): void => savedCallback.current();
    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
