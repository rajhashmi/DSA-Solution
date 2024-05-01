// brute 

function longestConsecutive(arr){
    arr.sort((a,b) => a - b);
    let counter = 0;
    for(let i = 1; i < arr.length; i++){
        if((arr[i] - 1) === arr[i-1] || arr[i] === arr[i-1] ){
            counter++
        }
    }
    return counter
}
console.log(longestConsecutive([1,3,2,4,5,10,6,5]));