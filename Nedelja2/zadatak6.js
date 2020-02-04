/*
zadatak6.js

За првих 100 бројева исписати:

FizzBuzz ако је број дељив и са 3 и са 5
Fizz ако је број дељив само са 3
Buzz ако је број дељив само са 5
Број ако није дељив ни са 3 ни са 5
*/

for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    } else if(i % 3 == 0){
        console.log('Fizz');
    } else if(i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}