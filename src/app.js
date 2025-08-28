// Arrays para valores y palos
let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let suits = [
  { name: 'spade', symbol: '♠' },
  { name: 'club', symbol: '♣' },
  { name: 'heart', symbol: '♥' },
  { name: 'diamond', symbol: '♦' }
];

let timerInterval;
let isTimerRunning = false;
let countdown = 0;

function generateNewCard() {
  let randomValue = Math.floor(Math.random() * 13);
  let randomSuit = Math.floor(Math.random() * 4);
  
  let cardValue = cardValues[randomValue];
  let suit = suits[randomSuit];
  
  let card = document.getElementById('card');
  let topValue = document.getElementById('topValue');
  let topSuit = document.getElementById('topSuit');
  let centerSuit = document.getElementById('centerSuit');
  let bottomValue = document.getElementById('bottomValue');
  let bottomSuit = document.getElementById('bottomSuit');
  
  card.className = 'card';
  card.classList.add(suit.name);
  
  topValue.textContent = cardValue;
  topSuit.textContent = suit.symbol;
  centerSuit.textContent = suit.symbol;
  bottomValue.textContent = cardValue;
  bottomSuit.textContent = suit.symbol;
  
  // Animación
  card.style.transform = 'scale(0.8) rotateY(180deg)';
  setTimeout(() => {
    card.style.transform = 'scale(1) rotateY(0deg)';
  }, 200);
}

function toggleTimer() {
  let timerBtn = document.getElementById('timerBtn');
  let timerDisplay = document.getElementById('timerDisplay');
  
  if (!isTimerRunning) {
    isTimerRunning = true;
    countdown = 10;
    timerBtn.innerHTML = '<i class="fas fa-pause"></i> Detener Timer';
    
    timerInterval = setInterval(() => {
      countdown--;
      timerDisplay.textContent = `Próxima carta en: ${countdown} segundos`;
      
      if (countdown <= 0) {
        generateNewCard();
        countdown = 10;
      }
    }, 1000);
    
  } else {
    isTimerRunning = false;
    clearInterval(timerInterval);
    timerBtn.innerHTML = '<i class="fas fa-play"></i> Iniciar Timer (10s)';
    timerDisplay.textContent = 'Timer desactivado';
  }
}

function updateCardSize() {
  let card = document.getElementById('card');
  let widthInput = document.getElementById('widthInput');
  let heightInput = document.getElementById('heightInput');
  
  let newWidth = widthInput.value || 200;
  let newHeight = heightInput.value || 280;
  
  card.style.width = newWidth + 'px';
  card.style.height = newHeight + 'px';
}

// Generar carta inicial al cargar
window.onload = function() {
  generateNewCard();
};
