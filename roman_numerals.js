function to_roman (num) {
  // your implementation code here
  var result = ""
  while (num>0){
    if (num >= 1000 && num < 3000){
      num -= 1000
      result += "M"
    }
    if (num >= 500 && num < 900){
      num -= 500
      result += "D"
    } else if (num >= 400 && num < 500){
      num -= 400
      result += "CD"
    } else if (num >= 900 && num < 1000){
      num -= 900
      result += "CM"
    }
    if (num >= 100 && num <= 300 || num >= 600 && num <= 800){
      num -= 100
      result += "C"
    }
    if (num >= 50 && num < 90){
      num -= 50
      result += "L"
    } else if (num < 50 && num >= 40){
      num -= 40
      result += "XL"
    } else if (num >= 90 && num < 100){
      num -= 90
      result += "XC"
    }
    if (num >= 10 && num <= 30 || num >= 60 && num <= 80){
      result += "X"
      num -= 10
    } 
    if (num >= 5 && num < 9){
      num -= 5
      result += "V"
    }else if (num == 4 ){
      num -= 4
      result += "IV"
    }else if (num == 9){
      num -= 9
      result += "IX"
    }
    if(num <= 3 && num >= 1 || num >= 6 && num <= 8){
      num -= 1
      result += "I"
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

