const router = require("express").Router()
const AdminRouter = require("./Admin")

router.use("/admin", AdminRouter)

module.exports = router
