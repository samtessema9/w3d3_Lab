
let header = document.getElementById('header');

header.textContent = 'Hello World!';

let hide_button = document.getElementById('hide-h1');

hide_button.addEventListener('click', () => {
    header.style.display = 'none';
})

let unhide_button = document.getElementById('unhide-h1');

unhide_button.addEventListener('click', () => {
    header.style.display = 'block';
})