const router = require("express").Router()
const Auth = require("../../controllers/Admin/auth")

router.post("/login", Auth.login)
module.exports = router
