import { useState } from "react";
import { IconSearch, SearchContainer, SearchInput } from "./styles";
import { BiSearchAlt2 } from 'react-icons/bi'
import { api } from "../../services/axios";
import { useWeatherData } from "../../hooks/weatherData";
import { error } from "console";

export function Search() {
    const [city, setCity] = useState('')
    const {setWeather} = useWeatherData()
    function searchWeatherData(){
        api.get(`weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&lang=pt_br&units=metric`)
        .then(response => setWeather(response.data)).catch(error => {
            setWeather(null);
        });
    }
    return (
        <SearchContainer>
            <SearchInput placeholder="Procurar..." onChange={(text)=> setCity(text.target.value) } />
            <IconSearch>
                <BiSearchAlt2 onClick={()=>{searchWeatherData()}} />
            </IconSearch>
        </SearchContainer>
    )
}