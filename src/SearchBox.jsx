import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(""); 

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "73acd4967c8adf92a85e378c7fbcac88"; 

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            
            if (jsonResponse.cod !== 200) {
                setError("No such place exists"); 
                return null;
            }

            setError(""); 

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result;
        } catch (error) {
            console.error("Failed to fetch weather data", error);
            setError("Failed to fetch weather data. Please try again."); 
            return null;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!city.trim()) return; 
        let newInfo = await getWeatherInfo();
        if (newInfo) updateInfo(newInfo); 
        setCity("");
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>} {/* ✅ Display error message */}
            </form>
        </div>
    );
}

