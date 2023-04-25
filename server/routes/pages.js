const pagesRouter = require('express').Router();

const {
  signupPage,
  loginPage,
} = require('../controllers');

pagesRouter.get('/signup', signupPage);
pagesRouter.get('/login', loginPage);

module.exports = pagesRouter;
