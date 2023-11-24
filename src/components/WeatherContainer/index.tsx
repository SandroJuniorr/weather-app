import { useWeatherData } from "../../hooks/weatherData";
import { WeatherContent } from "../WeatherContent";
import { WeatherData } from "../WeatherData";
import { WeatherIcon } from "../WeatherIcon";
import { Container } from "./styles";


export function WeatherContainer(){
    const {weather} = useWeatherData()
    

if(weather !== null){
    return(
<>
      <WeatherIcon/>
      <WeatherContent/>
      <WeatherData/>
      </>
    )
}  else{
   return(
    <Container>
        <p>Cidade não encontrada!</p>
        <p>Pesquise uma cidade válida</p>
      </Container>
   )
}
      
      
}