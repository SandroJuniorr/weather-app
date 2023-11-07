import { useState } from 'react'
import { Container} from './styles/app'



import { Search } from './components/Search'
import { WeatherIcon } from './components/WeatherIcon'
import { WeatherContent } from './components/WeatherContent'
import { WeatherData } from './components/WeatherData'

function App() {

  return (
    <Container>
      <Search/>
      <WeatherIcon/>
      <WeatherContent/>
      <WeatherData/>
    </Container>
  )
}

export default App
