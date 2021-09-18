const button = document.querySelector('.button');

function haveEnough() {
    const totalCash = +prompt('сколько денег?');
    const watchesCount = +prompt('сколько часов?');
    const earringsCount = +prompt('сколько серьг?');
    const watchesSum = +prompt('сколько денег на часы?') * watchesCount;
    const earringsSum = +prompt('сколько денег на серьги?') * earringsCount;
    if (watchesSum + earringsSum <= totalCash) {
        alert('Деньги есть $$$');
    } else {
        alert('Нет денег $$$');
    }
}

haveEnough();

button.onclick = () => {
    haveEnough();
}