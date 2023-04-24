import { Typography } from "@mui/material"

const WeatherDescription =({data})=> {
    return (
        <>
            {data.weather ? 
            <Typography>{data.weather[0].main}</Typography> 
            : 
            null
            }
        </>
    )
}

export default WeatherDescription