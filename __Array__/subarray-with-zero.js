function hasZeroSumSubarray(arr) {
    let sumSet = new Set();
    
    let cumulativeSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      cumulativeSum += arr[i];
  
      if (cumulativeSum === 0 || sumSet.has(cumulativeSum)) {
        return true;
      }
  
      sumSet.add(cumulativeSum);
    }
  
    return false;
}


  