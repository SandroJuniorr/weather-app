import { WeatherDataContainer, WeatherDataContent, WeatherDataIcon, WeatherDataSection } from "./styles";
import { BiWind,BiWater } from 'react-icons/bi'

export function WeatherData() {
    return (
        <WeatherDataContainer>
            <WeatherDataSection>
                <WeatherDataIcon>

                    <BiWind />
                </WeatherDataIcon>
                <WeatherDataContent>
                    <span>15 km/h</span>
                    <span>Vento</span>
                </WeatherDataContent>
            </WeatherDataSection>
            <WeatherDataSection>
                <WeatherDataIcon>

                    <BiWater />
                </WeatherDataIcon>
                <WeatherDataContent>
                    <span>67%</span>
                    <span>Humidade</span>
                </WeatherDataContent>
            </WeatherDataSection>
        </WeatherDataContainer>
    )
}