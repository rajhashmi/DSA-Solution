function moveNegativeToLast(arr){
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    while(low <= high){
        if(arr[low] < 0 && arr[high] > 0){
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        }else if(arr[low] < 0 && arr[high] < 0){
            high--;
        }else{
            low++;
        }
    }
    return arr;
}
console.log(moveNegativeToLast([1,2,-3,1,-4,5,-6,3,-9,2,3]));