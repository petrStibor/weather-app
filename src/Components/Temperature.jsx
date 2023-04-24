import { Typography, Box } from "@mui/material"

const Temperature =({data})=> {
    return (
        <>
            {data.main && 
                <>
                <Box sx={{
                    backgroundColor: "rgba(1, 3, 4, 0.33)",
                    borderRadius: "5px",
                    padding: "10px"
                }}>
                    <Typography
                    sx={{
                    fontSize: "6em"
                    }}>

                    {Math.round(data.main.temp)}°C
                    </Typography>
                </Box>
                </>
            }
        </>
    )
}

export default Temperature