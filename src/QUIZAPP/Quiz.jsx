import React, { useEffect, useState } from "react";
import "./Quiz.css";
import questionData from "../ACCORATION/Question.json";

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setShowScore(true);
    }
    return () => clearInterval(interval);
  }, [timer, showScore]);

  const handleOption = (selectedOption) => {
    if (selectedOption === questionData[currentQuiz].correOption) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuiz < questionData.length - 1) {
      setCurrentQuiz((prevQuestion) => prevQuestion + 1);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  };
  const handleReastart = () => {
    setCurrentQuiz(0);
    setScore(0);
    setShowScore(false);
    setTimer(0);
  };

  return (
    <quiz>
      {/* <section className="container">
        {showScore ? (
          <div className="container">
            <h3 className="text text-white">
              Cricket Fun Quiz Score:{score}/{questionData.length}
            </h3>
            <button className="btn btn-success" onClick={handleReastart}>
              Reset
            </button>
            <p className="text text-white fs-5">
              If <span className="text text-danger fw-bold">Reset</span> button
              issue,Please refresh Your Chrome
            </p>
            <p className="tex text-white">
              Your Click The Option Button, Please Handle Smothness{" "}
            </p>
          </div>
        ) : (
          <div className="questions">
            <h3 className="text text-white">Question {currentQuiz + 1}</h3>
            <p className="text text-white fs-4 ">
              {questionData[currentQuiz].question}
            </p>
            <div className="btn-groups mb-3">
              {questionData[currentQuiz].options.map((option, index) => (
                <button
                  className="btn btn-primary  me-2"
                  key={index}
                  onClick={() => handleOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="text text-white fs-5 timer">
              Time Left: <span>{timer}s</span>
            </div>
          </div>
        )}
      </section> */}
      <section className="container">
        {showScore ? (
          <div className="score-container">
            <h3 className="text text-white text-center">
              Cricket Fun Quiz Score: {score}/{questionData.length}
            </h3>
            <div className="button-wrapper">
              <button
                style={{ display: "flex", justifyContent: "center" }}
                className="btn btn-success"
                onClick={handleReastart}
              >
                Reset
              </button>
            </div>

            <p className="text text-white fs-5">
              If <span className="text text-danger fw-bold">Reset</span> button
              issue, Please refresh Your Chrome
            </p>
            <p className="text text-white">
              Your Click The Option Button, Please Handle Smoothness
            </p>
          </div>
        ) : (
          <div className="questions-container">
            <h3 className="text text-white">Question {currentQuiz + 1}</h3>
            <p className="text text-white fs-4">
              {questionData[currentQuiz].question}
            </p>
            <div className="btn-groups mb-3">
              {questionData[currentQuiz].options.map((option, index) => (
                <button
                  className="btn btn-primary option-btn me-2"
                  key={index}
                  onClick={() => handleOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="text text-white fs-5 timer text-center">
              Time Left: <span>{timer}s</span>
            </div>
          </div>
        )}
      </section>
    </quiz>
  );
};

export default Quiz;
