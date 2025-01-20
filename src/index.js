console.log('JavaScript töötab!');

const app = document.getElementById('app');
if (!app) {
  console.error('Element with id="app" is missing in HTML!');
} else {
  const gameDiv = document.createElement('div');
  gameDiv.id = 'game';

  const button = document.createElement('button');
  button.id = 'cookie-button';
  button.textContent = 'Vajuta küpsist!';

  const countText = document.createElement('p');
  countText.id = 'cookie-count';
  countText.textContent = 'Küpsised: 0';

  const message = document.createElement('p');
  message.id = 'message';
  message.textContent = '';

  const timerText = document.createElement('p');
  timerText.id = 'timer';
  timerText.textContent = 'Aega jäänud: 60 sekundit';


  const cookieImage = document.createElement('img');
  cookieImage.src = 'cookie.png';
  cookieImage.alt = 'Küpsis';
  cookieImage.style.width = '100px'; 

  gameDiv.appendChild(button);
  gameDiv.appendChild(countText);
  gameDiv.appendChild(timerText);
  gameDiv.appendChild(message);
  app.appendChild(gameDiv);

  let cookieCount = 0;
  let timeLeft = 60;
  let gameOver = false;


  const timerInterval = setInterval(() => {
    timeLeft--;
    timerText.textContent = `Aega jäänud: ${timeLeft} sekundit`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      gameOver = true;
      button.disabled = true; 
      message.textContent = `Mäng läbi! Kokku said ${cookieCount} küpsist.`;
    }
  }, 1000);

  button.addEventListener('click', () => {
    if (!gameOver) {
      cookieCount++;
      countText.textContent = `Küpsised: ${cookieCount}`;
      if (cookieCount % 10 === 0) {
        message.textContent = 'Wow! Sa said 10 küpsist!';
      } else {
        message.textContent = '';
      }
    }
  });
}
