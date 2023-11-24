import { WeatherIconContainer } from "./styles";
import { useWeatherData } from "../../hooks/weatherData";

import clear_icon from '../../assets/clear.png'
import cloud_icon from '../../assets/cloud.png'
import drizzle_icon from '../../assets/drizzle.png'
import rain_icon from '../../assets/rain.png'
import snow_icon from '../../assets/clear.png'
import { useEffect, useState } from "react";

interface ImagesWeatherTypeProps{
    title:string,
    image:string
}
export function WeatherIcon(){
    let [icon, setIcon] = useState<ImagesWeatherTypeProps[]>([])
    const {weather} = useWeatherData();

    let iconsDay = [
        {
            title:'01d',
            image:clear_icon
        },
        {
            title:'02d',
            image:cloud_icon
        },
        {
            title:'03d',
            image:cloud_icon
        },
        {
            title:'04d',
            image:cloud_icon
        },
        {
            title:'09d',
            image:drizzle_icon
        },
        {
            title:'10d',
            image:rain_icon
        },
        {
            title:'11d',
            image:rain_icon
        },
        {
            title:'13d',
            image:snow_icon
        },

    ]
    useEffect(()=>{
            let iconfilter = iconsDay.filter(icon => icon.title == weather?.weather[0]?.icon);
             setIcon(iconfilter);
        
        },[weather])
    return(
        <WeatherIconContainer>
        <img src={icon[0]?.image}/>
        </WeatherIconContainer>
    )
}