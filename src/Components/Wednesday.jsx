import { Typography } from "@mui/material"

// If its Wednesday, display this meme line

const myDudes = ()=> {
    const date = new Date()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
    if (days[date.getDay()] ===  "Wednesday")
      return "Also, it's Wednesday, my dudes."
  
    else {
      return null
      }
  }

const Wednesday =()=> {
    return (
        <Typography>{myDudes()}</Typography>
    )
}

export default Wednesday