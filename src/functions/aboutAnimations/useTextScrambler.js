import { useState, useEffect } from 'react';
import ConorScramble from './conorScramble';
export const useTextScrambler = (text, duration = 5000, fps = 10) => {
  const [isScramblingComplete, setIsScramblingComplete] = useState(false);

  useEffect(() => {
    const scramble = new ConorScramble(text, { fps });
    scramble.play();

    const timeout = setTimeout(() => {
      scramble.stop();
      setIsScramblingComplete(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, [text, duration, fps]);

  return isScramblingComplete;
};
