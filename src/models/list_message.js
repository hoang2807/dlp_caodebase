const sequelize = require("../config/config")
const { DataTypes } = require("sequelize")

const ListMessage = sequelize.define(
  "ListMessage",
  {
    m_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numerical_order: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    name_character: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
)

module.exports = ListMessage
