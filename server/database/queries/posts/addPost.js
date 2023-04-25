const connection = require('../../config/connection');

module.exports =  ({ userId, title, content }) => connection.query(`
INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *
`, [userId, title, content]);