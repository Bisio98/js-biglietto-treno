const price = 0.21
let tripLength = prompt('Chilometri del viaggio:') ;
let age = prompt('Età del passeggero:');
let priceCalculated;

priceCalculated = price * tripLength;

if((age < 65) && (age > 18 )){
}

else if(age > 65){
    priceCalculated -= (priceCalculated*0.4);
}

else {
    priceCalculated -= (priceCalculated*0.2);
}

priceCalculated = priceCalculated.toFixed(2);

alert(`Prezzo: ${priceCalculated}€`)