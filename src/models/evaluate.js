const sequelize = require("../config/config")
const { DataTypes } = require("sequelize")

const Evaluate = sequelize.define(
  "Evaluate",
  {
    u_id: {
      type: DataTypes.STRING,
      allowNull: null,
    },
    test_times: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    facet_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    facet_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
)

module.exports = Evaluate
