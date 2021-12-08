const pages = document.querySelector('.pages');
const locale = window.navigator.language || 'pt-br'

let date = new Date();
let dayNum = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(locale, { weekday: 'long' });
let monthName = date.toLocaleString(locale, { month: 'long' });
let year = date.getFullYear();

function renderPage(){
  let card = document.getElementById('card-calendar')
  const newCardText = document.createElement('p')
  newCardText.classList.add('card-text')
  newCardText.innerHTML = `Hoje é ${dayName}, dia ${dayNum} de ${monthName} de ${year}!`
  card.appendChild(newCardText)
}

renderPage();