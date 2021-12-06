const pages = document.querySelector('.pages');
const locale = window.navigator.language || 'pt-br'

let date = new Date();
let dayNum = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(locale, { weekday: 'long' });
let monthName = date.toLocaleString(locale, { month: 'long' });
let year = date.getFullYear();

function renderPage () {
  const newPage = document.createElement('div');
  newPage.classList.add('page');
  newPage.innerHTML = `
    <p class="month">${monthName}</p>
    <p class="day">${dayNum}</p>
    <p class="day-name">${dayName}</p>
    <p class="year">${year}</p>
  `;
  pages.appendChild(newPage);
}

renderPage();