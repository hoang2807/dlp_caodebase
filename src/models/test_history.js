const sequelize = require("../config/config")
const { DataTypes } = require("sequelize")

const TestHistory = sequelize.define(
  "TestHistory",
  {
    q_id: {
      type: DataTypes.INTEGER,
      allowNull: null,
    },
    u_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    test_times: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
)

module.exports = TestHistory
