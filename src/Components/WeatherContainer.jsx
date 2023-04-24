import { Container, Stack} from "@mui/material"
import SunRiseSet from './SunRiseSet'
import City from './City'
import CurrentDate from "./CurrentDate";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription"
import SearchBar from "./SearchBar"

// This component contains whole weather data including search bar

const WeatherContainer =({data, setLocation, queryWeatherData})=> {

    return (

        <Container maxWidth="sm" sx={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            height: '100vh',
            paddingTop: "60px",
            zIndex: '1000'
          }}>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >

              {/* This component handles search input for location */}
              <SearchBar queryWeatherData={queryWeatherData} setLocation={setLocation} />
            
              {/* This component shows searched city */}
              <City data={data} />


              {/* This component shows current date */}
              <CurrentDate />
              

              {/* This component shows current temperature */}  
              <Temperature data={data} />


              {/* This component shows current weather description (cloudy, rain, snow,..) */}  
              <WeatherDescription data={data} />


              {/* This component handles data and UX for sunset and sunrise */} 
              <SunRiseSet data={data} />

            </Stack>

          </Container>
    )
}

export default WeatherContainer