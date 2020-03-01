'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        user_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    });
};
