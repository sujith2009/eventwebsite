import React, { useEffect, useState } from "react";
import "./Use.css";

const Use = () => {
  const [head, setHead] = useState("Digital Clock");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Return a cleanup function to clear the interval
    return () => clearInterval(timer);
  }, []); // Run effect only once when component mounts

  const formatDoubleZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const hours = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const currentDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <div className="container">
      <h1 className="text text-center text-warning">{head}</h1>
      <div className="time">
        {formatDoubleZero(hours(currentTime.getHours()))}:
        {formatDoubleZero(currentTime.getMinutes())}:
        {formatDoubleZero(currentTime.getSeconds())}
        {currentTime.getHours() >= 12 ? "PM" : "AM"}
      </div>
      <div className="date">{currentDate(currentTime)}</div>
    </div>
  );
};

export default Use;
