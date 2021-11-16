
const priceForKm= 0.21
let basicPrice= priceForKm * distance;
let totalPrice= Number;
let age = Number(prompt("What's your age?"));
let distance = Number(prompt("How far are you travelling?"));

if(age<18){
    totalPrice=(totalPrice * 0.8);
    document.write("You need to pay" + totalPrice)
}else if (age>65){
    totalPrice=(totalPrice * 0.6);
    document.write("You need to pay" + totalPrice)
}else {
    totalPrice  * distance;
    document.write("You need to pay" + totalPrice)
}






