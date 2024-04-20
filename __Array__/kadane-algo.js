function brute(arr){
    let max = Number.MIN_SAFE_INTEGER;
    const n = arr.length;
    for(let i = 0; i< n; i++){
        for(let j = i; j< n; j++){
            let sum = 0;
            for(let k = i; k <= j; k++){
                sum += arr[k];
            }
            max = Math.max(max, sum);
        }
    }
    return max;
}
console.log(brute([ -2, 1, -3, 4, -1, 2, 1, -5, 4]));