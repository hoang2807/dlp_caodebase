const sequelize = require("../config/config")
const { DataTypes } = require("sequelize")

const Question = sequelize.define(
  "Question",
  {
    q_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    facet_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_question_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
)

module.exports = Question
