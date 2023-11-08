import { useWeatherData } from "../../hooks/weatherData";
import { Container } from "./styles";


export function WeatherContent(){
  const {weather} = useWeatherData()
    return(
        
       <Container>
        <p>{parseInt(weather?.main?.temp)}°C</p>
        <span>{weather?.name}</span>
      </Container>
    )
}