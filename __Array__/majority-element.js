//  brute force

function brute(arr, k){
    let majorElement = arr.length / k;
    let result = []
    for(let i = 0; i < arr.length; i++){
        let counter = 0; 
        for(let j = 0; j < arr.length; j++){
            if(i !== j && arr[i]===arr[j]){
                counter++;
            }
        }

        if(counter > majorElement){
            result.push(arr[i]);
        }
    }
    return result;
};


// Better Sloution

function better(arr, k){
    let majorElement = (arr.length / k);

    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i], 1);
        }else{
            let val = map.get(arr[i]);
            map.set(arr[i], val + 1);
        }
    }

    for(let [key, val] of map.entries()){
        if(val > majorElement){
            return val
        }
    }

    return - 1
}
console.log(better([3, 1, 2, 2, 1, 2, 3, 3], 4));


//  optimal solution
// Moore's voting algorithm

function optimal(arr, k ){
    let el
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(counter == 0){
            counter = 1;
            el = arr[i];
        }else if (arr[i] == el){
            counter++
        }else{
            counter--
        }
    }
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == el){
            count++
        }
    }
    if (count > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}
