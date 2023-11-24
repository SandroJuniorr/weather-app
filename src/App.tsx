import { useState } from 'react'
import { Container} from './styles/app'



import { Search } from './components/Search'
import { WeatherIcon } from './components/WeatherIcon'
import { WeatherContent } from './components/WeatherContent'
import { WeatherData } from './components/WeatherData'
import { WeatherDataProvider, useWeatherData } from './hooks/weatherData'
import { WeatherContainer } from './components/WeatherContainer'

function App() {
  return (
    <WeatherDataProvider>
    <Container>
      <Search/>
     <WeatherContainer/>
    </Container>
    </WeatherDataProvider>
  )
}

export default App
