import { WeatherIconContainer } from "./styles";

import clear_icon from '../../assets/clear.png'
import cloud_icon from '../../assets/cloud.png'
import drizzle_icon from '../../assets/drizzle.png'
import humidity_icon from '../../assets/humidity.png'
import rain_icon from '../../assets/rain.png'
import snow_icon from '../../assets/clear.png'
import wind_icon from '../../assets/wind.png'

export function WeatherIcon(){
    return(
        <WeatherIconContainer>
        <img src={cloud_icon}/>
        </WeatherIconContainer>
    )
}