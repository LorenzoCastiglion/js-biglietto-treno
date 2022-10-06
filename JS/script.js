/*
√ numero di km che vuole percorrere
√ età del passeggero
funzione prezzo x= o.21 x km
20% sconto eta < 18
40% sconto eta < 65

output prezzo con max due decimali 

*/

let x = prompt('numero km da percorrere');
let y = prompt('età passeggero');

let numKm = parseInt(x);

let age = parseInt(y);

console.log(typeof age);

let ticketPrice = parseFloat(numKm * 0.21).toFixed(2);

console.log(ticketPrice);

if(age < 18){

    let finalTicketPrice = parseFloat(ticketPrice * 0.8).toFixed(2);
    console.log(finalTicketPrice);
} else if(age > 65){

    let finalTicketPrice = parseFloat(ticketPrice * 0.6).toFixed(2);
    console.log(finalTicketPrice);
} else{

    let finalTicketPrice = ticketPrice;
    console.log(finalTicketPrice);
};




