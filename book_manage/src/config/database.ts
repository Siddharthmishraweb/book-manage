import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('new_prac', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export { sequelize };
