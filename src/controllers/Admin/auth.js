const { Admin } = require("../../models")
const { comparePassword, generateToken } = require("../../services/auth")

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).send("Invalid details!")
    //find user
    const user = await Admin.findOne({ where: { username: username } })
    //check username
    if (!user) return res.status(401).send("Username or password incorrect")

    //check password
    const matchPassword = await comparePassword(password, user.password)
    if (!matchPassword) {
      return res.status(401).send("Username or password incorrect")
    } else {
      const token = await generateToken(username)
      return res.status(200).json({ message: "Login successfully", token })
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}
