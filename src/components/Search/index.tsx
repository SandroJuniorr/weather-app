import { useState } from "react";
import { IconSearch, SearchContainer, SearchInput } from "./styles";
import { BiSearchAlt2 } from 'react-icons/bi'
import { api } from "../../services/axios";
import { useWeatherData } from "../../hooks/weatherData";

export function Search() {
    const [city, setCity] = useState('')
    const {setWeather} = useWeatherData()
    function searchWeatherData(){
        console.log(import.meta.env.VITE_API_KEY)
        // api.get(`weather?q=${city}&appid=${process.env.REACT_APP_NOT_SECRET_CODE}&lang=pt_br&units=metric`)
        // .then(response => setWeather(response.data));
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