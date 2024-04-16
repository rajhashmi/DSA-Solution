// 🟡 Need to work on this problem

function kthSmallestElement(arr,k){
    const newArr = Array.from(new Set(arr)).sort((a,b)=> a - b);
    return newArr[k-1];
};
console.log(kthSmallestElement([5,4,3,6,5,7,8,9],3));


// I will work on optimal solution 