const { getComments } = require('../../../database/queries');

module.exports = (req, res, next) => {
  const { postId } = req.params;
  getComments(postId).then(({ rows }) => {
    res.json({ message: 'success', status: 200, comments: rows });
  }).catch((err) => next(err));
};
