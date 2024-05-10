function removeDuplicatesFromArrayOptimal(array){
    let i = 0;
    let n = array.length;
    for(let j = 1; j < n; j++){
        if(array[j] != array[i]){ // if array[i] is not equal to array[j] means we a unique element in array then next position of array[i] will be that unique element
            array[i+1] = array[j];
            i++;
        }
    }
    return [array, i+1]

}