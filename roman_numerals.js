function to_roman(num) {
  // your implementation code here

  const arabicNumeral = [1000, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ['M', 'D', 'CD', 'C', 'LC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';

  if (num === 0 || num > 3000) return 'Input must be in the range of 1 - 3000'

  for (let i = 0; i < arabicNumeral.length; i++) {
    if (num >= arabicNumeral[i]) {
      result += romanNumeral[i]

      num -= arabicNumeral[i]
      i--
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