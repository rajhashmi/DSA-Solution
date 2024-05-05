var squareIsWhite = function(coordinates) {
    const convert = coordinates.split("");
    let XIndex;
    let YIndex;
    let x = ["a", "b", "c", "d", "e", "f", "g", "h"]
    let y =  [1, 2, 3, 4, 5, 6, 7, 8];
        let num = convert[1];
    for(let i = 0; i < y.length; i++){
        if(x[i] === convert[0]) XIndex = i
        if(y[i] == num) YIndex = i
    }
    console.log(YIndex,XIndex)
    if(YIndex % 2 === 0 && XIndex % 2 !== 0 || YIndex % 2 !== 0 && XIndex % 2 === 0 ){
        return true
    }else if (YIndex % 2 === 0 && XIndex % 2 === 0 || YIndex % 2 !== 0 && XIndex % 2 !== 0){
        return false
    }
};