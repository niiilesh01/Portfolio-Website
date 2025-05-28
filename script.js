// Toggle navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('dark', savedTheme === 'dark');
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggle.textContent = '☀️'; // Sun icon
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙'; // Moon icon
    localStorage.setItem('theme', 'light');
  }
});
// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-right').classList.toggle('open');
});
