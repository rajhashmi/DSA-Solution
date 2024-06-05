var findPermutationDifference = function (s, t) {
    let permutation_diff = 0;
    for (let i = 0; i < s.length; i++) {
        let j = t.indexOf(s[i]);
        permutation_diff += Math.abs(i - j);
    }
    return permutation_diff;
};