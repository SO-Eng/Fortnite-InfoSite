import React, { useRef, useState, useEffect } from 'react';
import './App.css'

const CountDown = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('July 30 2020 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0){
        // stop our timer
        clearInterval(interval.current);
      }
      else{
        //update our timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      };
    }, 1000);
  };

  // Component Did Mount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="timerContainer">
      <section className="timer">
        <section>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </section>
        <section>
          <p>{timerHours}</p>
          <p><small>Hours</small></p>
        </section>
        <section>
          <p>{timerMinutes}</p>
          <p><small>Minuts</small></p>
        </section>
        <section>
          <p>{timerSeconds}</p>
          <p><small>Seconds</small></p>
        </section>
      </section>
    </div>
  );
}

export default CountDown;