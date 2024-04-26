var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);  
    const ans = [intervals[0]];
    const n = intervals.length;

    for (let i = 1; i < n; i++) {
        let last = ans[ans.length - 1];
        let curr = intervals[i];

        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            ans.push(curr);
        }
    }

    return ans;
};


// leader in an array (evething on the right should be smaller);


function leaderInArray(array){
    const leader= [];
    for(let i = 0; i < array.length; i++){
        let isLeader = true;
        for(let j = i+1; j < array.length;j++){
            if(array[i] < array[j]){
                isLeader = false
            }
        }
        if(isLeader){
            leader.push(array[i]);
        }
    }
}
