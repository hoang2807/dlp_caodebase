const User = require("./user")
const Question = require("./question")
const TestHistory = require("./test_history")
const Evaluate = require("./evaluate")
const Message = require("./message")
const ConditionMessage = require("./condition_message")
const ListMessage = require("./list_message")
const Admin = require("./admin")

Question.hasMany(TestHistory, { foreignKey: { name: "q_id" } })
TestHistory.belongsTo(Question, { foreignKey: { name: "q_id" } })
Evaluate.hasMany(TestHistory, { foreignKey: { name: "u_id" } })
TestHistory.belongsTo(TestHistory, { foreignKey: { name: "u_id" } })
Message.hasMany(ConditionMessage, { foreignKey: { name: "m_id" } })
ConditionMessage.belongsTo(Message, { foreignKey: { name: "m_id" } })
Message.hasMany(ListMessage, { foreignKey: { name: "m_id" } })
ListMessage.belongsTo(Message, { foreignKey: { name: "m_id" } })

module.exports = {
  Admin,
  User,
  Question,
  TestHistory,
  Evaluate,
  Message,
  ConditionMessage,
  ListMessage,
}
