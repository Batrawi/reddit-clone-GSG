const bcrypt = require('bcryptjs');


module.exports = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);
