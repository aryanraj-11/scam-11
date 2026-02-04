function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    const noBtn = document.getElementById('no-btn');
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
    function showSurprise() {
    // Hide the question page and show the surprise
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');

    // Create a heart confetti explosion
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      
      // This shoots confetti from two sides of the screen
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ff69b4', '#ff1493'] // Red and pinks
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ff69b4', '#ff1493']
      }));
    }, 250);
    function checkAnswer(selectedOption) {
    const secretWord = "Correct Word"; // Replace this with Srushti's actual phrase

    if (selectedOption === secretWord) {
        // This hides the lock screen and shows the Valentine content
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert("Wrong answer! Try again. ❤️");
    }
}
}
