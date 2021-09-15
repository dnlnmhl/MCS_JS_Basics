const камень = 0;
const ножницы = 1;
const бумага = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Выбирай: 0 - камень, 1 - ножницы, 2 - бумага'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if ((computer == 0 && player == 1) || (computer == 1 && player == 2) || (computer == 2 && player == 0)) {
    console.log('computer win');
} else if ((computer == 0 && player == 2) || (computer == 1 && player == 0) || (computer == 2 && player == 1)) {
    console.log('player win');
} else if (computer == player) {
    alert('Ничья, нажмите ОК, страница перезагрузится');
    document.location.reload();
} else if (isNaN(player)) {
    alert('Без числа сыграть не сможем(');
    document.location.reload();
} else {
    alert('Слишком большое число, попробуйте снова');
    document.location.reload();
}