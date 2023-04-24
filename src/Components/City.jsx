import { Typography } from "@mui/material"


const City = ({data})=> {
    return (
        <>
            <Typography sx={{
                fontSize: "4em"
            }}>
                {data.name}
            </Typography>
        </>
    )
}

export default City