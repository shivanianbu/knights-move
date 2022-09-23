const express = require("express")
const app = express()
const { getPossibleMoves }=require('./controller/knights')

app.use(express.json())

app.post('/',(req,res) => {

    const {xPosition,yPosition} = req.body
    const {positions, totalMoves} = getPossibleMoves(xPosition,yPosition)
    res.send({"The Possible Moves at this position are": totalMoves, "The places are":positions})

})



app.listen(8000, () => console.log("Server Started Running..."))