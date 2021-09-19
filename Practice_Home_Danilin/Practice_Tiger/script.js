class Tiger {
    constructor(name) {
        this.name = name;
    }
    feedCat() {
        console.log('Purrrrrr');
    }
}

class angryTiger extends Tiger {
    throwDart() {
        console.log('ZzZzzZzZz');
    }
}

let firstTiger = new Tiger('Nesimba');
firstTiger.feedCat();

let secondTiger = new angryTiger('Angrysimba');
secondTiger.throwDart();


console.log(firstTiger);
console.log(secondTiger);