import React, { useState, useEffect } from 'react';

function Timer() {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function getCountdown() {
    const targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + 20);

    const timeDifference = targetDate.getTime() - new Date().getTime();

    if (timeDifference <= 0) {
      return {
        minutes: 0,
        seconds: 0
      };
    }

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);

    return {
      minutes: minutes % 60,
      seconds: seconds % 60
    };
  }

  // update the timer once immediately
  useEffect(() => {
    setCountdown(getCountdown());
  }, []);

  return (
    <div>
      <p className="time">Next Drop in {countdown.days} days,  {countdown.hours}  hours, {countdown.minutes} minutes,{countdown.seconds} seconds</p>

      {/* <p>{countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds</p> */}
    </div>
  );
}

export default Timer;
