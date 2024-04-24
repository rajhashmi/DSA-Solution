function jumpGame(arr){
    const n = arr.length;
    let jump = 0;
    let jumps = 0;
    while(jumps < n){
        jumps += arr[jumps];
        jump++
    }
    return jump
}
console.log(jumpGame([2,3,1,1,4]));



function game(input){
    let character = "";
    let counter = 1;
    for(let i = 0; i < input.length; i++){
        if(input[i] === input[i +1]){
            counter++
        }else{
            character += (input[i] + counter)
            counter = 1;
        }
    }
    return character
}
console.log(game("word"));