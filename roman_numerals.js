function to_roman(num) {
  // your implementation code here
  var output = ""
  var strNum = String(num)
  var one = ''
  var five = ''
  var ten = ''

  for (var i = 0; i <= strNum.length; i++) {
    if (strNum.length - i === 4) {
      one = "M"
    }
    else if (strNum.length - i === 3) {
      one = "C"
      five = "D"
      ten = "X"
    }
    else if (strNum.length - i === 2) {
      one = "X"
      five = "L"
      ten = "C"
    }
    else if (strNum.length - i === 1) {
      one = "I"
      five = "V"
      ten = "X"
    }

    if (Number(strNum[i]) < 4) {
      for (var j = 0; j < Number(strNum[i]); j++) {
        output += one
      }
    }
    else if (Number(strNum[i]) == 4) {
      output += one + five
    }
    else if (Number(strNum[i]) == 5) {
      output += five
    }
    else if (Number(strNum[i]) > 5 && Number(strNum[i]) < 9) {
      output += five
      for (var k = 6; k <= Number(strNum[i]); k++) {
        output += one
      }
    }
    else if (Number(strNum[i] == 9)) {
      output += one + ten
    }
  }
  return output
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
