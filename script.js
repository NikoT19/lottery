// Получение элементов
const ticketFields = document.getElementById('ticket-fields');
const winningFields = document.getElementById('winning-fields');
const addTicketBtn = document.getElementById('add-ticket');
const addWinningTicketBtn = document.getElementById('add-winning-ticket');
const checkTicketsBtn = document.getElementById('check-tickets');
const matchesList = document.getElementById('matches-list');

// Добавление поля для билетов
addTicketBtn.addEventListener('click', () => {
  if (ticketFields.children.length < 100) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'ticket';
    input.placeholder = 'Введите номер билета';
    input.maxLength = 9;
    ticketFields.appendChild(input);
  } else {
    alert('Вы можете добавить не более 100 билетов.');
  }
});

// Добавление поля для выигрышных билетов
addWinningTicketBtn.addEventListener('click', () => {
  if (winningFields.children.length < 10) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'winning-ticket';
    input.placeholder = 'Введите номер выигрыша';
    input.maxLength = 9;
    winningFields.appendChild(input);
  } else {
    alert('Вы можете добавить не более 10 выигрышных билетов.');
  }
});

// Проверка билетов
checkTicketsBtn.addEventListener('click', () => {
  const tickets = Array.from(document.querySelectorAll('.ticket')).map(input => input.value.trim());
  const winningTickets = Array.from(document.querySelectorAll('.winning-ticket')).map(input => input.value.trim());

  const matches = tickets.filter(ticket => ticket && winningTickets.includes(ticket));

  matchesList.innerHTML = '';
  if (matches.length > 0) {
    matches.forEach(match => {
      const li = document.createElement('li');
      li.textContent = match;
      matchesList.appendChild(li);
    });
  } else {
    matchesList.innerHTML = '<li>Совпадений не найдено.</li>';
  }
});

