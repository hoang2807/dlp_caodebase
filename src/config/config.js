require('dotenv').config()
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, 'root', process.env.MYSQL_ROOT_PASSWORD, {
  host: "mysql",
  dialect: "mysql",
  logging: true,
  sync: true,
});

sequelize.sync()
  .then(result => {
    logging: console.log('connect successfully')
  })
  .catch(error => { logging: console.log(error) })
module.exports = sequelize;