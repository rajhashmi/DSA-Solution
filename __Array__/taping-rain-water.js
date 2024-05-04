function rainWater(arr){
    let minIndex = Infinity;
    let maxIndex = 0;
    let storing = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxIndex){
            maxIndex = i;
        }
        if(arr[i] < minIndex){
            minIndex = i
        }
    }
    for(let i = minIndex; i < maxIndex; i++){
        let singleBlock = arr[minIndex] - arr[i];
        storing += singleBlock;
    }
    if(storing <= 0){
        return 0;
    }
    return storing;

}
console.log(rainWater([ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]))
