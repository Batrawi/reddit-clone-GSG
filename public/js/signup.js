/* eslint-disable no-undef */
const signupForm = document.querySelector('#sign-up');
const error = document.querySelector('#error');

const signupHandle = (data) => {
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

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    username: signupForm.username.value.trim(),
    email: signupForm.email.value.trim(),
    password: signupForm.password.value.trim(),
  };

  if (data.username === '' || data.email === '' || data.password === '') {
    error.textContent = 'All fields are required';
    return;
  }
  postFetch('/api/v1/auth/signup', data, signupHandle);
});


// Check Cookie
// const checkCookieSignup = (data) => {
//   if (data.status === 200) window.location.href = '/index.html';
// };

// window.addEventListener('load', () => {
//   getFetch('/api/v1/cookie', checkCookieSignup)
// });
