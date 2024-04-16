// brute force
function bruteForce(arr){
    return arr.sort(a,b => a-b);
};

// better solution

function betterSolution(arr){
    let zero = 0;
    let one = 0;
    let two = 0;
    const n = arr.length;
    for(let i = 0; i < n; i++){
        if(arr[i]==0) zero++
        else if(arr[i]== 1) one++
        else two++;
    }
    for(let i = 0; i < zero; i++){
        arr[i] = 0;
    };
    for(let i = zero; i < (zero + one); i++){
        arr[i] = 1;
    };
    for(let i = (zero + one); i < n; i++){
        arr[i] = 2;
    };
    return arr
};


//  optimal solution

function optimalSolution(arr){
    const n = arr.length;
    let low = 0;
    let mid = 0;
    let high = n -1;
    while( mid <= high){
        if(arr[mid] == 0){
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++
        }else if(arr[mid] == 1){
            mid++;
        }else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]];
            high--;
        }
    }
    return arr
}

console.log(optimalSolution([1,2,0,0,1,2,2,1]));