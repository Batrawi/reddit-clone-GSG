const connection = require('../../config/connection');

module.exports = () => connection.query(
  `SELECT posts.id, posts.title, posts.content, users.username
    FROM posts
    JOIN users
    ON users.id = posts.user_id`);