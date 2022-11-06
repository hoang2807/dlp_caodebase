require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
const cors = require("cors")
require("./config/config")
const router = require("./routes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
