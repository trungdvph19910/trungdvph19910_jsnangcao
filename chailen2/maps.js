// const rest = new Map();
// rest.set('name','classico Italiano');
// rest.set(1,'Fireze,Itali');
// console.log(rest.set(2,'Lisbon,portugal'));
// rest.set('categories',['Italian','pizzeria','vegetarian','organic']).set('open',11).set('close',23).set(true,'we are open :D').set(false,'we are closed :((');
// console.log (rest.get('name'));
// console.log (rest.get(true));
// console.log (rest.get(1));

// const time= 8;
// console.log(rest.get(time>rest.get('open')  && time<rest.get('close')));

// console.log(rest.has('categories'));
// rest .delete(2);
// // rest.clear();
// const arr= [1,2];
// rest.set(arr,'test');
// rest.set(document.querySelector('h1'),'heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));
//2
'use strict';
const restaurant = {
    name: 'classico',
    location: 'via anbgelo tavanti 23',
    categories: ['italian', 'pizzaria ', 'vegatarian', 'organic'],
    startermenu: ['focacia', 'bruschetta', 'garkic', 'bread'],
    mainmenu: ['pizza', ' pasta', 'risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 23,
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.startermenu[starterIndex], this.mainmenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
        console.log(`${this.categories[starterIndex]} and ${this.mainmenu[mainIndex]} to ${address} to ${time}`);
    },
};
const question= new Map([['question','what is the best programming language in the world?'],
[1,'C'],
[2,'Java'],
[3,'JavaScript'],
['correct',3],
[true,'corect'],
[false,'Try again!']]);


console.log(question);

// console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
 console.log(hoursMap);
 for(const [key,value] of question){
    if(typeof key==='number')console.log(`answer ${key}: ${value}`);
 }

 const answer = Number(prompt('you answer'));
console.log(answer);
console.log(question.get(question.get('correct')=== answer));
// copnvert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);