import { useEffect, useState } from 'react';

const UNIT = { msec: 1, sec: 1000, min: 1000 * 60 };

type UnitType = keyof typeof UNIT;

const useTimer = (unit: UnitType) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, UNIT[unit]);

    return () => {
      clearInterval(timerID);
    };
  }, [setTimer]);

  return { timer, setTimer };
};

export default useTimer;
