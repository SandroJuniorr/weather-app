import { useState } from 'react'
import { Container} from './styles/app'



import { Search } from './components/Search'
import { WeatherIcon } from './components/WeatherIcon'
import { WeatherContent } from './components/WeatherContent'
import { WeatherData } from './components/WeatherData'
import { WeatherDataProvider } from './hooks/weatherData'

function App() {

  return (
    <WeatherDataProvider>
    <Container>
      <Search/>
      <WeatherIcon/>
      <WeatherContent/>
      <WeatherData/>
    </Container>
    </WeatherDataProvider>
  )
}

export default App
