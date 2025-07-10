import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css"; // Assuming you have a CSS file for styles

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e1026c8c0a52fb68e31de2c713ccdbb2";

  let fetchWeather = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod !== 200) {
        setError("Your place not found!");
        return null;
      }
      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelLikes: data.main.feels_like,
        weather: data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (e) {
      setError("Your place not found!");
      return null;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!city.trim()) {
        setError("City name cannot be empty.");
        return;
      }
      console.log(city);
      setCity("");
      let newinfo = await fetchWeather(city);
      if (newinfo) {
        updateInfo(newinfo);
      }
    } catch (e) {
      setError("not found your place!");
    }
  };

  return (
    <div>
      <form action="">
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          required
          onChange={handleChange}
          value={city}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          endIcon={<SearchIcon />}
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </form>
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default SearchBox;
