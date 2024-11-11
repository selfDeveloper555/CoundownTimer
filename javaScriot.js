// определяем действующие элементы на странице
const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// Получаем текущий и слудующий год
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// выводим на фон страницы ожидающий год
year.innerHTML = currentYear + 1;

function updateCounter() {
  // Получаем разницу между текущим и следующим годом в милисекундах
  const currentTime = new Date(); // текущее время
  const diff = nextYear - currentTime;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24); // Полкчаем количество днй до нового года
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24; // получаем количество часов до нового года
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60; // Получаем количество минут до нового года
  const secondsLeft = Math.floor(diff / 1000) % 60; // получаем количество секунд до нового года

  // выводим на страницу количество дней часов минут и секунд 
  days.innerHTML = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

  console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
}
// обновляем счетчик каждую секунду 
setInterval(updateCounter, 1000);
// удаляем прелоадер и показываем счетчик Обновление страницы через 1 секунду
setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex';
},1000);