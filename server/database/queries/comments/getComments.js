const connection = require('../../config/connection');

module.exports = (postId) => connection.query('SELECT * FROM comments WHERE post_id = $1', [postId]);
