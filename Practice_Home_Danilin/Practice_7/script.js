let val = prompt('Напишите число');

// if (val >= 0) {
// 	console.log(val);
// }else if (val < 0) {
// 	console.log(val * -1);
// }else {
// 	alert('Это не число');
// }

(val >= 0) ? console.log(val): (val < 0) ? console.log(-val): alert('Это не число');