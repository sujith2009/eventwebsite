import React, { useState } from "react";
import "./Weather.css";
/*IMAGES*/
import cloudImage from "../WeatherApp/cloud.jpg";
// import sunImage from "../WeatherApp/sun.jpg";
import rainImage from "../WeatherApp/sun.jpg";
import humuImage from "../WeatherApp/humu.jpg";
import windowImage from "../WeatherApp/win.png";
/*ICONS*/
import { IoSearch } from "react-icons/io5";

const WeatherDetails = ({
  image,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  win,
}) => {
  return (
    <weatherDetails>
      <div className="images_img">
        <img src={image} alt="" className="img-fluid" srcset="" id="rain-img" />
        <div className="temp">{temp}*C</div>
        <div className="city">{city}</div>
        <div className="country">{country}</div>
        <div className="cord">
          <div>
            <span className="lat">Latitude</span>
            <span>{lat}</span>
          </div>
          <div>
            <span className="log">Longitude</span>
            <span>{log}</span>
          </div>
        </div>
        <div className="data-container">
          <div className="element">
            <img src={humuImage} className="img-fluid" alt="" srcset="" />
            <div className="data">
              <div className="humu-data">{humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windowImage} className="img-fluid" alt="" srcset="" />
            <div className="data">
              <div className="window-data">{win} km/h</div>
              <div className="text">Win Speed</div>
            </div>
          </div>
        </div>
      </div>
    </weatherDetails>
  );
};

const Weather = () => {
  let api_key = "a2888cd76b0657595a1319da955f4dfb";
  const [text, setText] = useState("chennai");

  const [image, setImage] = useState(rainImage);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("INDIA");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [win, setWin] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchDeatails = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        alert("City is Not Found");
        console.error("City not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setWin(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.main.sys.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setCityNotFound(false);
    } catch (error) {
      console.error("erroe", error.message);
    } finally {
      setLoading(false);
    }
  };

  /*-----------------HANDLE CITY------------*/
  const handleCity = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchDeatails();
    }
  };

  return (
    <weather>
      <div className="card">
        <div className="card-body">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search City"
            onChange={handleCity}
            onKeyDown={handleKeyDown}
            value={text}
          />
          <IoSearch id="search-icon" onClick={searchDeatails} />
          <WeatherDetails
            image={image}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            log={log}
            humidity={humidity}
            win={win}
          />
        </div>
      </div>
    </weather>
  );
};

export default Weather;
