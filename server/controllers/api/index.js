const {
  signup,
  login,
  logout,
} = require('./auth');

const {
  addPost,
  getPosts,
  deletePost,
} = require('./posts');

const {
  getPostComments,
  addComment,
  deleteComment,
} = require('./comments');

const {
  getUserInfo,
} = require('./users');

module.exports = {
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
};
