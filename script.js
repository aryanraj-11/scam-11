// 1. Logic for the Option Buttons
function checkAnswer(selectedOption) {
    const correctAnswer = 'Bye'; // This must match the button text exactly

    if (selectedOption === correctAnswer) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('valentine-content').style.display = 'block';
    } else {
        alert("Incorrect! Try again ❤️");
    }
}

// 2. Logic for the "No" button to run away
function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'absolute'; 
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// 3. Logic for the "Yes" button
function showSurprise() {
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
}
