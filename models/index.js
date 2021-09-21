const User = require('./User');
const Milestone = require('./Milestone');
const Post = require('./Post');

Milestone.hasMany(Post, {
  foreignKey: 'milestone_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(Milestone, {
  foreignKey: 'milestone_id',
  onDelete: 'CASCADE',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Milestone, Post };
