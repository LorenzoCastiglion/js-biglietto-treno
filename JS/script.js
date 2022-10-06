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

//calcolatore prezzo
const ticketPrice = parseFloat(numKm * 0.21).toFixed(2);

console.log(ticketPrice);

if(isNaN(x) || isNaN(y)){
    alert('NuMeRi!1!1!!11!1')
}


let finalTicketPrice;

//applicatore sconto
if(age < 18){

    finalTicketPrice = ticketPrice * 0.8;
    
} else if(age > 65){

    finalTicketPrice = ticketPrice * 0.6;
    
} else{

    finalTicketPrice = ticketPrice;
    console.log(finalTicketPrice);
};

finalTicketPrice = parseFloat(finalTicketPrice).toFixed(2);



console.log(finalTicketPrice);

document.getElementById("prezzofinale").innerHTML = finalTicketPrice;








