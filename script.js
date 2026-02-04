// 1. The Secret Word Logic
function checkAnswer(selectedOption) {
    const correctAnswer = 'Bye'; // Set Srushti's actual phrase here

    if (selectedOption === correctAnswer) {
        // Hide the lock screen
        document.getElementById('password-container').style.display = 'none';
        // Show the Valentine content
        document.getElementById('valentine-content').style.display = 'block';
    } else {
        alert("Incorrect! Try again ❤️");
    }
}

// 2. The "No" Button Moving Logic
function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'absolute'; // This is important!
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// 3. The "Yes" Button Surprise Logic
function showSurprise() {
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
    // Note: If you want confetti, you need to link the Canvas Confetti library in HTML
}
