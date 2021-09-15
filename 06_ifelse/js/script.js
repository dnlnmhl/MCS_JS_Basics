console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

if (answer < 18) {
	Image.style.backgroundImage = 'url(img/canada.jpg)';
}else if (answer <= 25) {
	Image.style.backgroundImage = 'url(img/australia.jpg)';
}else if (answer <= 50) {
	Image.style.backgroundImage = 'url(img/au.jpg)';
}else {
	Image.style.backgroundImage = 'url(img/house.jpg)';
}