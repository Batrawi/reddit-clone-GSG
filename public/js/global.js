// Check Cookiee
let user;
const userName = document.querySelector('.user-name');
const checkCookie = (data) => {
  user = data.user;
  if (data.status === 200) {
    userName.textContent = data.user.username;
    document.querySelector('.logged').classList.toggle('show');
    document.querySelector('.not-logged').classList.toggle('hide');
  }
};

window.addEventListener('load', () => {
  getFetch('/api/v1/cookie', checkCookie)
});

// Error
const handleErrPages = (status) => {
  if (status === 404) {
    window.location.href = '/html/404.html';
  } else if (status === 500) {
    window.location.href = '/html/500.html';
  }
};

// Loading
const loading = document.querySelector('.loading');
const showLoading = () => { loading.style.display = 'block'; };
const hideLoading = () => { loading.style.display = 'none'; };

// Light and dark mode and localStorage
const theme = JSON.parse(localStorage.getItem('theme'));
document.documentElement.setAttribute('data-theme', theme);
const themeSwitcher = document.querySelector('#them-input');
const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', switchToTheme);
  localStorage.setItem("theme", JSON.stringify(switchToTheme));
};
themeSwitcher.addEventListener('click', switchTheme);

// Log Out
const logout = (data) => {
  if (data.status === 205) window.location.href = '/index.html';
};

const logoutBtn = document.querySelector('#logout');
if (logoutBtn) logoutBtn.addEventListener('click', () => getFetch('/api/v1/logout', logout));
