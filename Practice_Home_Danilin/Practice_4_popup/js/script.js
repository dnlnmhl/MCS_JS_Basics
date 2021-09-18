
const request = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');


const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');

const closeMenu = document.querySelector('.closeMenu');


request.onclick = function () {
   popup.style.display = 'block';
};
request.addEventListener('click', function () {
    request.style.backgroundColor = 'navy';
});
request.addEventListener('click', function () {
    request.style.color = 'white';
});


closePopup.onclick = function () {
    popup.style.display = 'none';
};
closePopup.addEventListener('click', function () {
    request.style.backgroundColor = 'white';
});
closePopup.addEventListener('click', function () {
    request.style.color = 'navy';
});


closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
});



openMenu.onclick = function () {
    menu.style.left = 0;
};
closeMenu.onclick = function () {
    menu.style.left = -50 + 'vw';
};
content.onclick = function () {
    menu.style.left = -50 + 'vw';
};
footer.onclick = function () {
    menu.style.left = -50 + 'vw';
};







