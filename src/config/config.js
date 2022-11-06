const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
  logging: true,
  sync: true,
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');

}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

sequelize.sync()
  .then(result => {
    console.log('Sync complete')
  })
  .catch(error => { console.log(error) })
module.exports = sequelize;