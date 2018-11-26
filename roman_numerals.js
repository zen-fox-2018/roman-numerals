// function to_roman(num) {
//   let arabic = [1000, 900, 500, 400, 100 , 90, 50, 40, 10, 9, 5, 4, 1]
//   let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
//   let output = ''
//   while (num !== 0){
//
//     for (let i = 0 ; i < arabic.length ; i++){
//       if (num >= arabic[i]){
//         // console.log(i, '>',num >= arabic[i])
//         output += roman[i]
//         num -= arabic[i]
//         break;
//       }
//     }
//   }
//
//   return output
//
// }



function to_roman(num){
  let output = ''
  while (num !== 0){

    if (num < 10){
      if (num < 4){
        output += 'I'
        num--
      } else if (num === 4){
        output += 'IV'
        num -= 4
      } else if (num < 9){
        output += 'V'
        num -= 5
      } else if (num === 9){
        output+= 'IX'
        num -= 9
      }

    } else if (num < 100){
      if (num < 40){
        num -= 10
        output += 'X'
      } else if (num < 50){
        output += 'XL'
        num -= 40
      } else if (num < 90){
        output += 'L'
        num -= 50
      } else if (num >= 90){
        output += 'XC'
        num -= 90
      }

    } else if (num < 1000) {
      if (num < 400){
        output += 'C'
        num -= 100
      } else if (num < 500){
        output += 'CD'
        num -= 400
      } else if (num < 900){
        output += 'D'
        num -= 500
      } else if (num >= 900){
        output += 'CM'
        num -= 900
      }

    } else {
      output += 'M'
      num -= 1000
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
