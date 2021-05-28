var km = prompt("Quanti chilometri vuoi percorrere?");
var age= prompt("Quanti anni hai?")

km = parseInt(km);
age = parseInt(age);

var price = 0.21 * km;

if(age <= 18){
    price = (price - ((price / 100 )*20));
}   else if(age > 65){
    price = (price - ((price / 100 )*40));
}

price = price.toFixed(2);

var ticket = document.getElementById("ticket");

ticket.innerHTML ="Il biglietto del treno costa €" + price;