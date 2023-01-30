const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat= function(seat){
    //b and e are middle seats
    const s=seat.slice(-1);
    if(s==='B'|| s==='E')
    console.log('you got the middle seat')
    else console.log('you got lucky')
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

//past 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix captalization in name
const passenger = 'jOnAS';
const passengerLower= passenger.toLowerCase();
const passengerCorrect= passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);



//comparing emails
const email = 'hello@jonas.io';
const loginEmail= 'Hello@jonas.Io \n';

// const lowerEmail= loginEmail.toLowerCase(); 
// const trimmedEmail=lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); 
console.log(email===normalizedEmail);

//replaking
const priceGB = '288,97$';
const priceUS= priceGB.replace('$','#').replace(',',',');
console.log(priceUS);


const anouncement = 'All passengers come to barding door 23. Boarding door 23!';

console.log(anouncement.replace('door','gate'));
console.log(anouncement.replace(/door/g,'gate'));

//boleans
const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));

console.log(planes.includes('boing'));
console.log(planes.startsWith('Airb'));

if(planes.startsWith('Airbus') && planes.endsWith('neo')){
    console.log('Past if the NEW ARirbus family');
}

//practice exercise
const checkBaggage=function(items){
const baggage = items.toLowerCase();
if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('you have not allowed on board');

}else{
    console.log('wecome aboard!');
}

}

checkBaggage ('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks abnd camera');
checkBaggage('Got some snacks and a gun for protection');
