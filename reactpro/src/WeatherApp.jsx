import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelLikes: 33.45,
    humidity: 75,
    temp: 28.9,
    tempMax: 28.9,
    tempMin: 28.9,
    weather: "overcast clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div>
      <h2>Weather App by vaibhav</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
