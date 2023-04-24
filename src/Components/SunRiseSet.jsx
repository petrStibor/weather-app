import {Stack, Typography, Box} from '@mui/material'
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import BedtimeIcon from '@mui/icons-material/Bedtime';

// Show sunrise and sunset

const sun = (d)=> {
    let hour = d.getHours().toString().padStart(2,"0")
    let minutes = d.getMinutes().toString().padStart(2,"0")
  
    return `${hour}:${minutes}`
        
  }

const SunRiseSet = ({data})=> {
    return (
        <>
        {data.sys ? 
            
            <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={12}
                >
                  
                <Box>
                <WbTwilightIcon sx={{
                  fontSize: "3em"
                }} />
                <Typography sx={{
                  fontSize: "2em"
                }}>
                  {sun(new Date(data.sys.sunrise * 1000))}
                </Typography>
                </Box>

                <Box>
                <BedtimeIcon sx={{
                  fontSize: "3em"
                }} />
                <Typography sx={{
                  fontSize: "2em"
                }}>
                  {sun(new Date(data.sys.sunset * 1000))}
                </Typography>
                </Box>

                </Stack>
            
          : 
          null
          }
        </>
    )
}

export default SunRiseSet