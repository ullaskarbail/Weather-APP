import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox"; 
export default function WeatherAPP() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 24.84, 
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "Haze",
    });

    let updateInfo = (newInfo) => {
        if (newInfo) setWeatherInfo(newInfo); 
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
