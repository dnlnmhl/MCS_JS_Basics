console.log('You are at '+window.location);

const buttonone = document.querySelector('button.one');
const lorems = document.querySelectorAll('div');
const buttontwo = document.querySelector('button.two');
const buttonnorm = document.querySelector('button.norm');

buttonone.onclick = () => {
	lorems.forEach((lorem) => {
		lorem.style.fontSize = '30px';
	})
}
buttontwo.onclick = () => {
	lorems.forEach((lorem) => {
		lorem.style.fontSize = '10px';
	})
}
buttonnorm.onclick = () => {
	lorems.forEach((lorem) => {
		lorem.style.fontSize = '20px';
	})
}
