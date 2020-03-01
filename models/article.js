'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('article', {
        user_id: DataTypes.INTEGER,
        article_title: DataTypes.STRING,
        article_text: DataTypes.TEXT,
        article_image: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    });
};
