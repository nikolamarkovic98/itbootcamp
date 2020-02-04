/*
zadatak7.js

Исписати Марио пирамиду одређене висине:
#
##
###
####
#####
*/

for(let i = 1; i <= 5; i++){
    let mario = '';
    for(let j = 0; j < i; j++){
        mario += '#'
    }
    console.log(mario);
}