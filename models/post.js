'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        user_id: DataTypes.INTEGER,
        text: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
    });
};
