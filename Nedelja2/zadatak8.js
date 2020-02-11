/*
zadatak8.js

Исписати Марио пирамиду одређене висине:
    #
   ## 
  ###
 ####   
#####
*/

let n = 5;

for(let i = 1; i <= n; i++){
    let j = 1;
    let mario = '';
    for(; j <= n - i; j++){
        mario += ' '
    }
    for(let k = 0; k <= n - j; k++){
        mario += '#'
    }
    console.log(mario);
}