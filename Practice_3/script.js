const page = document.querySelector('.page');
page.style.backgroundColor = 'ghostwhite';

const body = document.querySelector('body');
body.style.backgroundColor = '#696969';

const name = document.querySelector('.name');
name.innerHTML = 'DJ Rashad';

const img = document.querySelector('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DJ_Rashad_2013.jpg/1200px-DJ_Rashad_2013.jpg');

const bio = document.querySelector('.short-bio');
bio.className += ' animated';