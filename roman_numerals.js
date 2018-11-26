const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
const number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

function to_roman (num) {
    let result = ''
    let i = number.length - 1
    while (num) {
        if (num - number[i] >= 0) {
            result += roman[i]
            num -= number[i]
        } else {
            i--
        }
    }
    return result
}

// // pake .findIndex
// function to_roman (num) {
//     console.log(roman.findIndex(findNumber(num)));
    
//     // while (num) {
//     // }
// }


// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
