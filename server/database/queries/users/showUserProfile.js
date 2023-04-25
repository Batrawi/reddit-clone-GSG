const connection = require('../../config/connection');

module.exports = (id) => connection.query(
  `SELECT u.id, u.username, u.email, p.id AS postId, p.title, p.content
    FROM users AS u
    LEFT JOIN posts AS p
    ON p.user_id = u.id WHERE u.id = ($1)`, [id]);