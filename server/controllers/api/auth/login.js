const { customError } = require('../../error');
const { comparePassword, login, signToken } = require('../../../utils');
const {checkUserName } = require('../../../database/queries');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  let user;
  login.validateAsync(req.body)
    .then(() => checkUserName(username))
    .then(({ rowCount, rows }) => {
      if (!rowCount) throw customError('Wrong Username', 400);
      [user] = [rows[0]];
      return user;
    })
    .then((registerUser) => comparePassword(password, registerUser.password))
    .then((isMatch) => {
      if (!isMatch) throw customError('Wrong Password', 400);
      return signToken(user);
    })
    .then((token) => res.status(201).cookie('access_token', token, { httpOnly: true }).json({ message: 'User logged successfully', status: 201 }))
    .catch((err) => next(err));
};
