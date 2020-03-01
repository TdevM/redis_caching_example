const {sequelize} = require('../models');
const User = sequelize.import(__dirname + "../../models/user");
const Post = sequelize.import(__dirname + "../../models/post");
const Article = sequelize.import(__dirname + "../../models/article");

Post.belongsTo(User);
Article.belongsTo(User);

User.hasMany(Post);
User.hasMany(Article);

module.exports = {
    User, Post, Article
}
