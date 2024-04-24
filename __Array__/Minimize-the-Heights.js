function minizeHeight(arr, k){

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return (max - k) - (min + k);
}
console.log(minizeHeight([1, 5, 8, 10],2));