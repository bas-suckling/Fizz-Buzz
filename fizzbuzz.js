function fizzBuzz(number) {
    let fizzBuzzArray = []
    for (let i = 1; i < number + 1; i++) {
        switch (true) {
            case (i % 15 == 0):
                fizzBuzzArray.push("FizzBuzz")
                break;
            case (i % 3 == 0):
                fizzBuzzArray.push("Fizz")
                break;
            case (i % 5 == 0):
                fizzBuzzArray.push("Buzz")
                break;
            default:
                fizzBuzzArray.push(i)
                break;
        }
    }
    return(fizzBuzzArray)
}

console.log(fizzBuzz(100))


module.exports = {
    fizzBuzz
}