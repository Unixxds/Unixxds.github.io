let counter = localStorage.getItem('clickCounter') ? Number(localStorage.getItem('clickCounter')) : 0;
const counterDisplay = document.getElementById('counter');
const coin = document.getElementById('coin');
const incrementDisplay = document.getElementById('increment');

coin.addEventListener('click', () => {
    counter++;
    localStorage.setItem('clickCounter', counter);
    counterDisplay.textContent = `Счет: ${counter}`;
    
    incrementDisplay.textContent = "+1";
    incrementDisplay.style.opacity = 1;

    setTimeout(() => {
        incrementDisplay.style.opacity = 0;
    }, 500);
});

counterDisplay.textContent = `Счет: ${counter}`;
