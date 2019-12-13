const {
    fizzBuzz
} = require('./fizzbuzz')

let number = 100

test('if fizzBuzz(number) returns an array with number.length items', function () {
    let expected = number
    let actual = fizzBuzz(number).length
    expect(actual).toEqual(expected)
})

test('if fizzBuzz(number) returns an array where the 6th[5] element of the array is "Fizz"', function () {
    let expected = 'Fizz'
    let actual = fizzBuzz(number)[5] 
    expect(actual).toEqual(expected)
})

test('if fizzBuzz(number) returns an array where the 25th[24] element of the array is "Buzz"', function () {
    let expected = 'Buzz'
    let actual = fizzBuzz(number)[24] 
    expect(actual).toEqual(expected)
})

test('if fizzBuzz(number) returns an array where the 45th[44] element of the array is "Buzz"', function () {
    let expected = 'FizzBuzz'
    let actual = fizzBuzz(number)[44] 
    console.log(expected, actual)
    expect(actual).toEqual(expected)
})

test('if fizzBuzz(number) returns an array where the 61st[60] element of the array is 61', function () {
    let expected = 61
    let actual = fizzBuzz(number)[60] 
    expect(actual).toEqual(expected)
})

