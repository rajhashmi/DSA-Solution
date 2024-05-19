
function numberOfInversions(a) {
    let cnt = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) cnt++;
        }
    }
    return cnt;
}

console.log(numberOfInversions([5, 4, 3, 2, 1]));



