import { createContext, ReactNode, useContext, useState} from "react";



export const WeatherDataContext = createContext({} as IWeatherContext)
interface WeatherProviderProps {
    children: ReactNode
}


interface IWeatherContext {
    weather:any;
    setWeather: React.Dispatch<any>;
}
function WeatherDataProvider({children}: WeatherProviderProps){
 const [weather, setWeather] = useState<any>(null)

    return(
        <WeatherDataContext.Provider value={{weather,setWeather}}>
            {children}
            </WeatherDataContext.Provider>
    )
}
function useWeatherData(){
    const context = useContext(WeatherDataContext);
    return context
}

export { WeatherDataProvider, useWeatherData}