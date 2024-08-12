import { useState, useEffect, useCallback } from "react";

const useTimer = (initialTime, onTimeUp) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            clearInterval(interval);
            onTimeUp();
            return initialTime; // Reset timer
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, onTimeUp, initialTime]);

  const reset = useCallback(() => {
    setTime(initialTime);
    setIsActive(true);
  }, [initialTime]);

  return { time, reset };
};

export default useTimer;
