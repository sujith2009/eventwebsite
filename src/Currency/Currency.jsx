import React, { useEffect, useState } from "react";
import "./Currency.css";
import axios from "axios";
export const Currency = () => {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCureency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

        const response = await axios.get(url);
        console.log(response);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {}
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };
  const handleToCurrency = (e) => {
    setToCureency(e.target.value);
  };
  return (
    <currency>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center mb-3">Currency Converter</h5>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                value={amount}
                onChange={handleChange}
              />
            </div>
            {/*----------------------*/}
            <div className="mb-3">
              <label htmlFor="currency" className="form-label">
                From Currency
              </label>
              <select
                class="form-select"
                value={fromCurrency}
                aria-label="Default select example"
                onChange={handleFromCurrency}
              >
                {/* <option selected>Currency Option</option> */}
                <option value="USD">USD-United States Dollar</option>
                <option value="EUR">EUR-Euro</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="JPY">JPY-Japanese Dollar</option>
                <option value="AUD">AUD-Australian Dollar</option>
                <option value="CAD">CAD-CAD-Canadian Dollar</option>
                <option value="CNY">CNY-Chinese Yuan</option>
                <option value="INR">INR-Indian Rupees</option>
                <option value="BRL">BRL-Brazilian Real</option>
                <option value="ZAR">ZAR-South Africa Rand</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="currency" className="form-label">
                To Currency
              </label>
              <select
                class="form-select"
                value={toCurrency}
                aria-label="Default select example"
                onChange={handleToCurrency}
              >
                {/* <option selected>Currency Option</option> */}
                <option value="USD">USD-United States Dollar</option>
                <option value="EUR">EUR-Euro</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="JPY">JPY-Japanese Dollar</option>
                <option value="AUD">AUD-Australian Dollar</option>
                <option value="CAD">CAD-CAD-Canadian Dollar</option>
                <option value="CNY">CNY-Chinese Yuan</option>
                <option value="INR">INR-Indian Rupees</option>
                <option value="BRL">BRL-Brazilian Real</option>
                <option value="ZAR">ZAR-South Africa Rand</option>
              </select>
            </div>
            <p className="text text-center">
              {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
            </p>
          </div>
        </div>
      </div>
    </currency>
  );
};
export default Currency;
