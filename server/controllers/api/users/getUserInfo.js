const { getUserInfo } = require('../../../database/queries');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  getUserInfo(userId).then(({ rows }) => {
    res.json({ message: 'success', status: 200, user: rows });
  }).catch((err) => next(err));
};
