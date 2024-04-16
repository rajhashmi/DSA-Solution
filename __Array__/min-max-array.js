function minMax(arr){
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER
    const n = arr.length;
    // for max

    for(let i = 0; i < n; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    // for min 

    for(let i = 0; i < n; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return {minimum: min, maximum: max}
};
console.log(minMax([2,4,3,5,7,5,7,9,6,4]));


// optimal solution

function minMaxOptimal(arr){
    const n = arr.length;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        if(arr[i] < min) min = arr[i];
        if(arr[i]> max) max = arr[i];
    }

    return [min,max];
}
console.log(minMaxOptimal([2,4,3,5,7,5,7,9,6,4]));
