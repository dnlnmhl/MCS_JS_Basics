let totalCash = +prompt('money?');
let watchesCount = +prompt('watches?');
let earringsCount = +prompt('earrings?');
let watchesSum = +prompt('watches sum?') * watchesCount;
let earringsSum = +prompt('earrings sum?') * earringsCount;
document.write(watchesSum + earringsSum <= totalCash);