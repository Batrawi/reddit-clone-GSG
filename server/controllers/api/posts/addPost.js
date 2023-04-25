const { addPost } = require('../../../database/queries');
const { customError } = require('../../error');

module.exports = (req, res, next) => {
  const { body: { title, content }, id: userId } = req;

  if (!title || !content || !userId) {
    return next(customError('Missing required fields', 400));
  }

  addPost({ userId, title, content })
    .then(({ rows }) => res.status(201).json({ status: 201, message: 'Post Added', post: rows[0] }))
    .catch((err) => next(err));
};