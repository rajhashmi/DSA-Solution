var maxProduct = function(nums) {
    let n = nums.length
    let pre  = 1;
    let suff = 1
    let maxSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++){
        if(pre === 0) pre = 1;
        if(suff === 0) suff = 1;
        pre = pre * nums[i];
        suff = suff * nums[n-i-1];
        maxSum = Math.max(maxSum,pre,suff)
    }
    return maxSum
};