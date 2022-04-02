const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_task_db');

const Task = sequelize.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  }
});

Task.belongsTo(User);


module.exports = {
  sequelize,
  Task,
  User
};
