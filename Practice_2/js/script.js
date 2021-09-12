let totalCash = parseInt(prompt("Сколько у тебя кэша Бро? (в $)"))
let watchesCount = parseInt(prompt("Сколько хочешь золотых котлов? (шт.)"))
let earringsCount = parseInt(prompt("Сколько хочешь серёжек с брюликами? (шт.)"))
let watchesPrice = parseInt(prompt("Сколько стоят одни котлы? (в $)"))
let earringsPrice = parseInt(prompt("Сколько стоит одна серьга? (в $)"))
let Sum = watchesCount * watchesPrice + earringsCount * earringsPrice
document.write(totalCash>Sum)
