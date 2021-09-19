const crypto = [{
    name: "Bitcoin",
    price: 1388.37
}, {
    name: "Ethereum",
    price: 716
}, {
    name: "Litecoin",
    price: 140
}];





let nameBitcoin = document.querySelector('.bitcoin h2');
nameBitcoin.innerHTML = crypto[0].name;
let priceBitcoin = document.querySelector('.bitcoin p');
priceBitcoin.innerHTML = crypto[0].price;


let nameEthereum = document.querySelector('.ethereum h2');
nameEthereum.innerHTML = crypto[1].name;
let priceEthereum = document.querySelector('.ethereum p');
priceEthereum.innerHTML = crypto[1].price;


let nameLitecoin = document.querySelector('.litecoin h2');
nameLitecoin.innerHTML = crypto[2].name;
let priceLitecoin = document.querySelector('.litecoin p');
priceLitecoin.innerHTML = crypto[2].price;






let colorBlockBitcoin = document.querySelector('div .colorBlockBitcoin');
colorBlockBitcoin.style.width = (crypto[0].price) / 30 + 'em';


let colorBlockEthereum = document.querySelector('div .colorBlockEthereum');
colorBlockEthereum.style.width = (crypto[1].price) / 30 + 'em';


let colorBlockLitecoin = document.querySelector('div .colorBlockLitecoin');
colorBlockLitecoin.style.width = (crypto[2].price) / 30 + 'em';





