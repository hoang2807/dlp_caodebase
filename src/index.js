require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
const cors = require("cors")
require("./config/config")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/api", (req, res) => {
  res.status(200).send("hello")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
