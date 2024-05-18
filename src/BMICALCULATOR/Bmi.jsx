import React, { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiStatus, setBmiStatus] = useState();
  const [errorMessage, setError] = useState("");

  /*--------BUTTON-----*/
  const calaulatebmi = () => {
    if (height && weight) {
      const heightInmeter = height / 100;
      const bmivalue = weight / (heightInmeter * heightInmeter);
      setBmi(bmivalue.toFixed(2));
      if (bmivalue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setBmiStatus("Normal weight");
      } else if (bmivalue >= 35 && bmivalue < 29.9) {
        setBmiStatus("OverWeight");
      } else {
        setBmiStatus("Your Weight too Much! Please go to run");
      }
      setError("");
    } else {
      setBmi(null);
      setBmi("");
      setError("Please Fill The Field");
    }
  };

  const clearHandle = () => {
    setHeight("");
    setWeight("");
  };

  return (
    <bmi>
      <div className="container mt-5">
        <form>
          <h4 className="text text-center">BMI CALCULATOR</h4>
          <p className="text text-center error">{errorMessage}</p>
          <div className="mb-3">
            <label for="height" class="form-label">
              Height(cm)
            </label>
            <input
              type="text"
              id="height"
              class="form-control"
              //   aria-describedby="passwordHelpBlock"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="weight" class="form-label">
              Weight
            </label>
            <input
              type="text"
              id="weight"
              class="form-control"
              aria-describedby="passwordHelpBlock"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="btn-groups">
            <div className="row">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-warning me-3"
                  onClick={calaulatebmi}
                >
                  Calculate BMI
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={clearHandle}
                >
                  Clear
                </button>
              </div>
              <div className="col-md-12">
                {/* /* <p className="text mt-3">Your BMI is:{bmi}</p>
                <p className="text">Status:{setBmiStatus}</p> */}
                {bmi !== null && <p className="text mt-3">Your BMI is:{bmi}</p>}
                {bmi !== null && (
                  <p className="text mt-3">Your Weight is:{bmiStatus}</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </bmi>
  );
};

export default Bmi;
