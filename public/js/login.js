/* eslint-disable no-undef */
const loginForm = document.querySelector('#log-in');
const error = document.querySelector('#error');

const loginHandle = (data) => {
  if (data.status === 400) {
    error.textContent = data.message;
  } else if (data.status === 500) {
    handleErrPages(500);
  } else if (data.status === 404) {
    handleErrPages(404);
  } else if (data.status === 201) {
    window.location.href = '/index.html';
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    username: loginForm.username.value.trim(),
    password: loginForm.password.value.trim(),
  };

  if (data.username === '' || data.password === '') {
    error.textContent = 'All fields are required';
    return;
  }
  postFetch('/api/v1/aut/login', data, loginHandle);
});

// Check Cookie
// const checkCookieLogin = (data) => {
//   if (data.status === 200) window.location.href = '/index.html';
// };

// window.addEventListener('load', () => {
//   getFetch('/api/v1/cookie', checkCookieLogin)
// });