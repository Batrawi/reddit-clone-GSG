const {
  checkUserName,
  checkEmail,
  addNewUser,
} = require('./auth');

const {
  addPost,
  deletePost,
  getPosts,
} = require('./posts');

const {
  addComment,
  deleteComment,
  getComments,
} = require('./comments');

const {
  getUserInfo,
} = require('./users');

module.exports = {
  checkUserName,
  checkEmail,
  addNewUser,
  addPost,
  deletePost,
  getPosts,
  addComment,
  deleteComment,
  getComments,
  getUserInfo,
};
