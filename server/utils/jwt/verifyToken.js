const { verify } = require('jsonwebtoken');

module.exports = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SKJWT, (err, decoded) => {
    if (err) return reject(err);
    return resolve(decoded);
  });
});
