// Brute Force

function commonElement(arr1,arr2,arr3){
    let i = 0, j = 0, k = 0, n1 = arr1.length, n2 = arr2.length, n3 = arr3.length;
    let result = [];
    while(i < n1 && j < n2 && k < n3){
        if(arr1[i] === arr2[j] && arr2[j] == arr3[k]){
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) i++;
        else if (arr2[j] < arr3[k]) j++;
        else k++;
    }
     
}

var ar1 = [1, 5, 10, 20, 40, 80];
var ar2 = [6, 7, 20, 80, 100];
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120];

commonElement(ar1,ar2,ar3)