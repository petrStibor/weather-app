import { Typography } from "@mui/material"
import Wednesday from "./Wednesday"



// Date function

const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`

}

const CurrentDate =()=> {
    return (
        <>
            <Typography>{dateBuilder(new Date())}</Typography>
            
            {/* Little joke function. It appears only on Wednesday */}
            <Wednesday />
        </>
    )
}

export default CurrentDate