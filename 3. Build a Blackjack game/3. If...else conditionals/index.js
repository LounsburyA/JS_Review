let firstCard = 11
let secondCard = 12
let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Do you want to draw a new car?');
    
}else if (sum === 21){
    console.log('Congrats! Black Jack!');
    
}else {
    console.log('over 21, game over');
    
}