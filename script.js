// Константы
const maxTickets = 100;
const maxWinningTickets = 100;

// Элементы DOM
const ticketFields = document.getElementById('ticket-fields');
const addTicketBtn = document.getElementById('add-ticket-btn');
const winningFields = document.getElementById('winning-fields');
const addWinningTicketBtn = document.getElementById('add-winning-ticket-btn');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results');

// Добавить билет
addTicketBtn.addEventListener('click', () => {
  const currentTickets = document.querySelectorAll('.ticket').length;

  if (currentTickets < maxTickets) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'ticket';
    input.placeholder = 'Введите номер билета';
    input.maxLength = 9;
    ticketFields.appendChild(input);
  } else {
    alert(`Вы не можете добавить больше ${maxTickets} билетов.`);
  }
});

// Добавить выигрышный билет
addWinningTicketBtn.addEventListener('click', () => {
  const currentWinningTickets = document.querySelectorAll('.winning-ticket').length;

  if (currentWinningTickets < maxWinningTickets) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'winning-ticket';
    input.placeholder = 'Введите номер выигрыша';
    input.maxLength = 9;
    winningFields.appendChild(input);
  } else {
    alert(`Вы не можете добавить больше ${maxWinningTickets} выигрышных билетов.`);
  }
});

// Проверить билеты
checkBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = ''; // Очистить предыдущие результаты

  const tickets = Array.from(document.querySelectorAll('.ticket')).map(input => input.value.trim());
  const winningTickets = Array.from(document.querySelectorAll('.winning-ticket')).map(input => input.value.trim());

  const matches = tickets.filter(ticket => winningTickets.includes(ticket));

  if (matches.length > 0) {
    resultsDiv.innerHTML = `Совпадения найдены: ${matches.join(', ')}`;
  } else {
    resultsDiv.innerHTML = 'Совпадений не найдено.';
  }
});

// Очистить все
clearBtn.addEventListener('click', () => {
  ticketFields.innerHTML = '<input type="text" class="ticket" placeholder="Введите номер билета" maxlength="9">';
  winningFields.innerHTML = '<input type="text" class="winning-ticket" placeholder="Введите номер выигрыша" maxlength="9">';
  resultsDiv.innerHTML = '';
});
