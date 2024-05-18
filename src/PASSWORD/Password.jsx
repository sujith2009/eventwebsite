import React, { useCallback, useState } from "react";
import "./Password.css";
const Password = () => {
  const [header, setHeader] = useState("PASSWORD GENERATOR");
  const [length, setLength] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password, setPassword] = useState("");

  /*-----------PASSWORD-----------*/
  const handlePassWord = (e) => {
    setLength(parseInt(e.target.value));
  };

  /*------------BUTTON CLICK----------*/

  const handlePasword = (i) => {
    let chareSet = "";
    if (upper) chareSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chareSet = "abcdefghijklmnopqrstuvwxyz";
    if (number) chareSet = "0123456789";
    if (symbol) chareSet = "!@#$%^&*()-_+=";
    let generatorPassword = "";
    for (i = 0; i < length; i++) {
      const randomPassword = Math.floor(Math.random() * chareSet.length);
      generatorPassword = generatorPassword + chareSet[randomPassword];
    }
    setPassword(generatorPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied");
    setPassword("");
  };

  return (
    <password>
      <div className="container">
        <div class="card">
          <h3 className="text text-center">{header}</h3>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Password Length
            </label>
            <input
              value={length}
              name="pass"
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={handlePassWord}
            />
          </div>
          <div class="form-check">
            <input
              onChange={(e) => setUpper(e.target.checked)}
              checked={upper}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Include Uppercase
            </label>
          </div>
          <div class="form-check">
            <input
              onChange={(e) => setLower(e.target.checked)}
              checked={lower}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Include Lowercase
            </label>
          </div>
          <div class="form-check">
            <input
              onChange={(e) => setNumber(e.target.checked)}
              checked={number}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Include Number
            </label>
          </div>
          <div class="form-check">
            <input
              onChange={(e) => setSymbol(e.target.checked)}
              checked={symbol}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Include Symbol
            </label>
          </div>
          <button
            className="btn btn-primary mt-3"
            type="button"
            onClick={handlePasword}
          >
            Generator Password
          </button>

          <div class="input-group mb-3 mt-3">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={handleCopy}
            >
              Copy
            </button>
            <input
              value={password}
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </div>
      </div>
    </password>
  );
};

export default Password;
