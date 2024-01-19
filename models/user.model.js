import { DataTypes } from 'sequelize';
import  sequelize  from './../startup/mysql.js';

const Users = sequelize.define('r_users', {
    user_id: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
    },
    user_firstname: {
        type: DataTypes.STRING,
        field: 'user_firstname',
        allowNull: false,
    },
    user_lastname: {
        type: DataTypes.STRING,
        field: 'user_lastname',
        allowNull: false,
    },
    user_email: {
        type: DataTypes.STRING,
        field: 'user_email',
        defaultValue: false,
    },
    user_password: {
        type: DataTypes.STRING,
        field: 'user_password',
        defaultValue: '',
    },
    user_password1: {
        type: DataTypes.STRING,
        field: 'user_password1',
        defaultValue: '',
    },   
}, {
    timestamps: false,
    tableName: 'r_users',
});


export default Users;
