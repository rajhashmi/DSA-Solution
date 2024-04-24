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
