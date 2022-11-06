const sequelize = require("../config/config")
const { DataTypes } = require("sequelize")

const Message = sequelize.define(
  "Message",
  {
    m_id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    name_theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
)

module.exports = Message
