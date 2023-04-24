import { TextField } from "@mui/material"

const SearchBar =({setLocation, queryWeatherData})=> {
    return (
        <>
            <TextField 
                id="outlined-basic" 
                label="Enter location" 
                variant="outlined" 
                
                onChange={e =>setLocation(e.target.value)}
                onKeyPress={queryWeatherData}
                sx={{
                    textAlign: "center"
                }}
            />
        </>
    )
}

export default SearchBar