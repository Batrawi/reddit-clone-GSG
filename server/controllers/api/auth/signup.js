const { customError } = require('../../error');
const { hashPassword, signup, signToken } = require('../../../utils');
const { checkUserName, checkEmail, addNewUser } = require('../../../database/queries');

module.exports = (req, res, next) => {
  const { username, email, password } = req.body;

  signup.validateAsync(req.body)
    .then(() => checkUserName(username))
    .then(({ rowCount }) => {
      if (rowCount) throw customError('The username has already token', 400);
      return checkEmail(email);
    })
    .then(({ rowCount }) => {
      if (rowCount) throw customError('The email has already token', 400);
      return hashPassword(password);
    })
    .then((hashedPassword) => addNewUser({ username, email, password: hashedPassword }))
    .then(({ rows }) => signToken(rows[0]))
    .then((token) => res.status(201).cookie('access_token', token, { httpOnly: true }).json({ message: 'User added successfully', status: 201 }))
    .catch((err) => console.log(err));
};
