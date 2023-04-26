const apiRouter = require('express').Router();

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
} = require('../controllers');

const { checkLoggedIn} = require('../middleware');

apiRouter.post('/auth/signup', signup);
apiRouter.post('/auth/login', login);
apiRouter.get('/posts', getPosts);
apiRouter.get('/comments/:postId', getPostComments);
apiRouter.get('/users/:userId', getUserInfo);

apiRouter.use(checkLoggedIn);
apiRouter.get('/logout', logout);
apiRouter.post('/post', addPost);
apiRouter.get('/post/:postId', deletePost);
apiRouter.post('/comment', addComment);
apiRouter.delete('/comment/:commentId', deleteComment);

module.exports = apiRouter;
