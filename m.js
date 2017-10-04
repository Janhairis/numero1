function square(num) {
    return num * num
}
function half(num) {
    return num / 2
} 
function percentOf(num1, num2) {
    var percentage = (num1 / num2) * 100
    return num1 + ' is ' + percentage.toFixed(2) + '% of ' + num2
}
function areaOfCircle(rad) {
    return (Math.PI * (rad * rad)).toFixed(2)
}
function doStuff(num) {
    var squareNum = square(num);
    var halfSquareNum = half(squareNum)
    var area = areaOfCircle(halfSquareNum)
    return percentOf(squareNum, area)
}

console.log(doStuff(3))