import { useEffect, useState } from 'react';

const useKeyPress = (
  callback: (_key: string) => void,
): string | null | undefined => {
  const [keyPressed, setKeyPressed] = useState<string | null>();

  useEffect(() => {
    const downHandler = ({ key }: { key: string }): void => {
      if (keyPressed !== key && key.length === 1) {
        setKeyPressed(key);
        callback(key);
      }
    };

    const upHandler = (): void => {
      setKeyPressed(null);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
