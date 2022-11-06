const sequelize = require("../config/config")
const { DataTypes } = require("sequelize")
const { hashPassword } = require("../services/auth")

const Admin = sequelize.define(
  "Admin",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
)

async function init() {
  try {
    await Admin.sync({ force: true })
    const hashed = await hashPassword(process.env.ADMIN_PASSWORD)

    await Admin.create({
      username: process.env.ADMIN_USERNAME,
      password: hashed,
    })
    // await sequelize.close()
  } catch (error) {
    console.log(error)
  }
}

init()

module.exports = Admin
