const { clientError, serverError } = require('./error');
const {
  signup,
  login,
  logout,
  addPost,
  getPosts,
  deletePost,
  getPostComments,
  addComment,
  deleteComment,
  getUserInfo,
} = require('./api');

const {
  signupPage,
  loginPage,
} = require('./pages');

module.exports = {
  clientError,
  serverError,
  signup,
  login,
  logout,
  signupPage,
  loginPage,
  addPost,
  getPosts,
  deletePost,
  getPostComments,
  addComment,
  deleteComment,
  getUserInfo,
};
