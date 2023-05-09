function findNextPerfectSquare(n) {
    let root = Math.sqrt(n)
    if (Number.isInteger(root)) {
        //math.pow is a function that calculates the power of any base number
        return Math.pow(root + 1, 2)
    } else {
        return -1
    }
}

const result1 = findNextPerfectSquare(9)
const result2 = findNextPerfectSquare(289)
const result3 = findNextPerfectSquare(3000)

console.log(result1, result2, result3)