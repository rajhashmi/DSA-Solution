function findNumberAppearOnceBetter(array){
    const hash = Array.from({length:array.length + 1}).fill(0);
    for(let i = 0; i< array.length; i++){
        hash[array[i]]++
    }
    for(let i = 0; i < hash.length; i++){
        if(hash[i] == 1){
            return i;
        }
    }
    
    return -1
}