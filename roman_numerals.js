function to_roman (num) {
  var result = ''
  var number = [1000, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var roman = ['M', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  
  for (let i = 0; i < number.length; i++) {
    while (num >= number[i]) {
      result += roman[i]
      num -= number[i]
    }
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

// {
//   1: 'I',
//   4: 'IV',
//   5: 'V',
//   9: 'IX',
//   10: 'X',
//   40: 'XL',
//   50: 'L',
//   90: 'XC',
//   100: 'C',
//   400: 'CD',
//   500: 'D',
//   1000: 'M'
// }

// var romanKeys = Object.keys(roman)
// var romanVals = Object.values(roman)
// for (const key in roman) {
//   if (Number(key) === num) {
//     return roman[key]
//   }
//   if (num > Number(key)) {
//     result += roman[key]
//     num -= Number[key]
//   }
// }