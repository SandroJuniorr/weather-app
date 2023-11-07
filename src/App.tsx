import { useState } from 'react'
import { Container, IconSearch, SearchContainer, SearchInput, WeatherContent, WeatherData, WeatherDataContent, WeatherDataIcon, WeatherDataSection, WeatherIconContainer } from './styles/app'
import { BiSearchAlt2,BiWind,BiWater } from 'react-icons/bi'

import clear_icon from '../src/assets/clear.png'
import cloud_icon from '../src/assets/cloud.png'
import drizzle_icon from '../src/assets/drizzle.png'
import humidity_icon from '../src/assets/humidity.png'
import rain_icon from '../src/assets/rain.png'
import snow_icon from '../src/assets/clear.png'
import wind_icon from '../src/assets/wind.png'

function App() {

  return (
    <Container>
      <SearchContainer>
        <SearchInput />
        <IconSearch>
          <BiSearchAlt2 />
        </IconSearch>
      </SearchContainer>
       <WeatherIconContainer>
       <img src={cloud_icon}/>
       </WeatherIconContainer>
       <WeatherContent>
        <p>24°C</p>
        <span>Londres</span>
       </WeatherContent>
     <WeatherData>
      <WeatherDataSection>
        <WeatherDataIcon>

        <BiWind/>
        </WeatherDataIcon>
        <WeatherDataContent>
          <span>15 km/h</span>
         <span>Vento</span>
        </WeatherDataContent>
      </WeatherDataSection>
      <WeatherDataSection>
      <WeatherDataIcon>

<BiWater/>
</WeatherDataIcon>
        <WeatherDataContent>
          <span>67%</span>
         <span>Humidade</span>
        </WeatherDataContent>
      </WeatherDataSection>
     </WeatherData>
    </Container>
  )
}

export default App
