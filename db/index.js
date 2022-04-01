const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_task_db');


module.exports = {
  sequelize
};
