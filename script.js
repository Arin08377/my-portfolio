// Typewriter Terminal Effect
const terminal = document.getElementById('terminal');
const phrases = [
    '> Initializing Database Support...',
    '> SQL Query Optimization Active',
    '> System Monitoring: Stable',
    '> Python/Django Integration Ready'
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
    terminal.innerHTML = currentPhrase.join('');
    
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }
        if (j == phrases[i].length) {
            isDeleting = true;
        }
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) i = 0;
        }
    }
    setTimeout(loop, isDeleting ? 50 : 100);
}

loop();

// Simple smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});