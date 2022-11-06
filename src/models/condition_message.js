const sequelize = require("../config/config")
const { DataTypes } = require("sequelize")

const Condition_Message = sequelize.define(
  "Condition_Message",
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

module.exports = Condition_Message
