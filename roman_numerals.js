// const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
// const number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

// function to_roman (num) {
//     let result = ''
//     let i = number.length - 1
//     while (num) {
//         if (num - number[i] >= 0) {
//             result += roman[i]
//             num -= number[i]
//         } else {
//             i--
//         }
//     }
//     return result
// }

// pake .findIndex
const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I',]
const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

function to_roman (num) {
    let result = ''
    while (num) {
        let index = number.findIndex((val) => {
            return val <= num
        })
        result += roman[index]
        num -= number[index]
    }
    return result
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
