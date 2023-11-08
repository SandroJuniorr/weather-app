import { useWeatherData } from "../../hooks/weatherData";
import { WeatherDataContainer, WeatherDataContent, WeatherDataIcon, WeatherDataSection } from "./styles";
import { BiWind,BiWater } from 'react-icons/bi'

export function WeatherData() {
  const {weather} = useWeatherData()
    return (
        <WeatherDataContainer>
            <WeatherDataSection>
                <WeatherDataIcon>

                    <BiWind />
                </WeatherDataIcon>
                <WeatherDataContent>
                    <span>{parseInt(weather?.wind?.speed)} km/h</span>
                    <span>Vento</span>
                </WeatherDataContent>
            </WeatherDataSection>
            <WeatherDataSection>
                <WeatherDataIcon>

                    <BiWater />
                </WeatherDataIcon>
                <WeatherDataContent>
                    <span>{weather?.main?.humidity}%</span>
                    <span>Humidade</span>
                </WeatherDataContent>
            </WeatherDataSection>
        </WeatherDataContainer>
    )
}