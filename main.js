// import './style.css'

let upcount = parseInt(localStorage.getItem('upcount')) || 0;
let totalcount = parseInt(localStorage.getItem('totalcount')) || 0;

function vote(direction) {
    if (direction === 'up') {
        upcount++;
    }
    totalcount++;
    updateCount();
    localStorage.setItem('upcount', upcount);
    localStorage.setItem('totalcount', totalcount);
}

function updateCount() {
    const countText = totalcount === 0 ? `please share the feedback` : `${Math.trunc(upcount / totalcount * 100)}% found this helpful `;
    document.querySelector('.helpful-count').textContent = countText;
}

function clear() {
    localStorage.clear();
    upcount = 0;
    totalcount = 0;
    updateCount();
}

const thumbUpButton = document.querySelector('.thumb-up');
const thumbDownButton = document.querySelector('.thumb-down');
const clearButton = document.querySelector('.clear-button');

thumbUpButton.addEventListener('click', () => {
    vote('up');
});

thumbDownButton.addEventListener('click', () => {
    vote('down');
});

clearButton.addEventListener('click', () => {
    clear();
});

updateCount();


