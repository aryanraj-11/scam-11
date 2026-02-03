function openGift(day) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('gift-view').classList.remove('hidden');
    
    const content = document.getElementById('gift-content');
    
    const gifts = {
        'rose': '<h2>Roses for you! 🌹</h2><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ6bmZ6bmZ6bmZ6bmZ6bmZ6bmZ6bmZ6bmZ6bmZ6bmZ6/l41lI4bYkS5J1N8mk/giphy.gif" width="100%"><p>To the prettiest flower in the garden.</p>',
        'propose': '<h2>Will you be mine? 💍</h2><p>Every day with you is a dream come true.</p>',
        'chocolate': '<h2>Sweet treats! 🍫</h2><p>I am no chocolate, but I melt around you.</p>',
        // Add more here following the same pattern...
    };

    content.innerHTML = gifts[day] || '<h2>Coming soon! ❤️</h2>';
}

function goBack() {
    document.getElementById('gift-view').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}
