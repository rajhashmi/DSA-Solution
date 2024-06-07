function MaximumProfitByBuyingAndSelling(arr) {
    let totalProfit = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            totalProfit += arr[i] - arr[i - 1];
        }
    }
    
    return totalProfit;
}

console.log(MaximumProfitByBuyingAndSelling([2, 30, 15, 10, 8, 25, 80]));  
