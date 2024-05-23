var deleteGreatestValue = function(grid) {

   grid.forEach(row => row.sort((a, b) => a - b))
    let sum = 0

    while (grid[0].length) {
        let column = []
        for (let row of grid) column.push(row.pop())
        sum += Math.max(...column)
    }

    return sum
};