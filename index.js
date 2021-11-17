 
 let age = Number(prompt("What's your age?"));
 let distance = Number(prompt("How far are you travelling?"));

 
const priceForKm= 0.21;
let basicPrice= priceForKm * distance;




if(age<18){
    discountedPrice =(basicPrice * 0.8);
    document.write("You need to pay" + "£" + discountedPrice.toFixed(2));
}else if (age>65){
    discountedPrice =(basicPrice * 0.6);
    document.write("You need to pay" + "£" + discountedPrice.toFixed(2));
}else {
    basicPrice  * distance;
    document.write("You need to pay"  + "£"+ basicPrice.teFixed(2));
};






