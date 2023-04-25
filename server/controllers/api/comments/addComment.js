const { addComment } = require('../../../database/queries');
const { customError } = require('../../error');

module.exports = (req, res, next) => {
  const { body: { content, postId }, id: userId } = req;

  if (!content || !postId || !userId) {
    return next(customError('Missing required fields', 400));
  }

  addComment({ postId, userId, content })
    .then(({ rows }) => res.status(201).json({ message: 'Comment added successfully', status: 201, comment: rows[0] }))
    .catch((err) => next(err));
};