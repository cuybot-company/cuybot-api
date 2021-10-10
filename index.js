const express = require("express");
const morgan = require("morgan");
const compression = require("compression")
require("dotenv").config();


const app = new express()

app.use(express.json())
app.use(morgan("dev"))
app.use(compression())



app.all("/", (req, res) => {
  res.status = 200
  res.json({
    Status: 200,
    Message: "Welcome to the CuyAPI"
  })
})




app.listen(3000, () => {
  console.log()
})