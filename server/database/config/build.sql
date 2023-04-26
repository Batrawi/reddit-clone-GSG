BEGIN;

DROP TABLE IF EXISTS users, posts, comments, votes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  content TEXT NOT NULL,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INTEGER,
  post_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  type BOOLEAN NOT NULL,
  user_id INTEGER,
  post_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO users (username, email, password) VALUES 
  ('mohammad', 'mohammad@gmail.com', '123456'),
  ('ali', 'ali@gmail.com', '123456');

INSERT INTO posts (user_id, title, content) VALUES 
  (1, 'title 1', 'content'),
  (1, 'title 2', 'content'),
  (2, 'title 1', 'content'),
  (2, 'title 2', 'content');


INSERT INTO comments (user_id, post_id, content) VALUES 
  (1, 1, 'first comment'),
  (2, 1, 'second comment'),
  (1, 2, 'first comment'),
  (2, 2, 'second comment');

INSERT INTO votes (user_id, post_id, type) VALUES
  (1, 1, FALSE),
  (1, 2, TRUE),
  (2, 1, TRUE),
  (2, 2, FALSE);

COMMIT;





