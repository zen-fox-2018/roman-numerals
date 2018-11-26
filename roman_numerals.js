function to_roman(num) {
  let rom = ['M','CM','DC','D','CD','C','LX','L','XL','X','IX','VI','V','IV','I']
  let number = [1000, 900, 600, 500, 400, 100, 90, 60, 50, 40, 10, 9, 6, 5, 4, 1]
  let result = ''
  
  let obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    // LX: 60,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    // VI: 6,
    V: 5,
    IV: 4,
    I: 1
  }

  for (const key in obj) {
    while (num >= obj[key]) {
      num -= obj[key] 
      result += key
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
