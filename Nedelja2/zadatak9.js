let i = 0;

while(i <= 5){
    let mario = '';
    for(; i <= 5;){
        let j = 1;
        for(; j <= 5 - i; j++){
            mario += ' '
        }
        for(let k = 0; k <= 5 - j; k++){
            mario += '#'
        }
        break;
    }

    mario += ' ';

    for(; i <= 5;){
        for(let j = 0; j < i; j++){
            mario += '#'
        }
        break;
    }

    console.log(mario);

    i++;
}