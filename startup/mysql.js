import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv'; 
dotenv.config()


// config
const host = process.env.DATABASE_HOST;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;
const database = process.env.DATABASE_NAME;
console.log(database, user, password)
const sequelize = new Sequelize(database, user, password,{
    host: host,
    port: port,
    dialect: 'mysql',
    //logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: '+07:00',
});

export default sequelize;