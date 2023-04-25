const bcrypt = require('bcryptjs');

module.exports =(password) => bcrypt.hash(password, 10);
