/*
zadatak8.js

Исписати Марио пирамиду одређене висине:
    #
   ## 
  ###
 ####   
#####
*/

for(let i = 1; i <= 5; i++){
    let j = 1;
    let mario = '';
    for(; j <= 5 - i; j++){
        mario += ' '
    }
    for(let k = 0; k <= 5 - j; k++){
        mario += '#'
    }
    console.log(mario);
}