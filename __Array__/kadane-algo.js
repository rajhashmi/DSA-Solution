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


function better(arr){
    const n = arr.length;
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
         
            sum += arr[j];

            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

function optimal(arr){
    const n = arr.length;
    let maxi = Number.MIN_SAFE_INTEGER; 
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }
    return maxi
}

console.log(optimal([ -2, 1, -3, 4, -1, 2, 1, -5, 4]));