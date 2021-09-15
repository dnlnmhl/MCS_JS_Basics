console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

(answer >= 18) ? Image.style.backgroundImage = 'url(img/house.jpg)' : Image.style.backgroundImage = 'url(img/canada.jpg)';