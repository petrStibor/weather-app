import { Container} from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import axios from "axios";
import WeatherContainer from "./Components/WeatherContainer"

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: "Poppins",

      h3: {
        color: "#818384",
        fontSize: "0.8em",
        fontWeight: "500"
      }
    }
  })


const App = ()=> {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    // Api key data

    const api = {
      key: "generateyourown",
      base: "https://api.openweathermap.org/data/2.5/"
    }

    

    const queryWeatherData = (e)=> {

        if (e.key === "Enter") {
          const fetchItems = async()=>{
            const result = await axios.get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`)
            setData(result.data)
          }
          setLocation('')
          fetchItems()
        }
      }


    
      const actualWeather = data.weather && data.weather[0].main



  return (

    <ThemeProvider theme={darkTheme}>
        <CssBaseline />

     

      <Container maxWidth={false} className={
          actualWeather === undefined && 'app undefined' ||
          actualWeather === 'Snow' && 'app snow' ||
          actualWeather === 'Clouds' && 'app clouds' ||
          actualWeather === 'Mist' && 'app mist' ||
          actualWeather === 'Clear' && 'app clear' ||
          actualWeather === 'Rain' && 'app rain' ||
          actualWeather === 'Fog' && 'app fog'
          }>
      
          <WeatherContainer data={data} setLocation={setLocation} queryWeatherData={queryWeatherData} />
     
        </Container>
        
    </ThemeProvider>
  )
}

export default App