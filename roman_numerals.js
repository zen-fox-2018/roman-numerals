function to_roman(num) {
  var listNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var input = breakDownNum(num.toString());
  var output = '';

  for (var i = 0; i < input.length; i++) {
    var inputNum = Number(input[i]);
    for (var j = 0; j < listNum.length; j++) {
      if (inputNum >= listNum[j]) {
        inputNum -= listNum[j]; 
        // console.log(romanNum[j]);
        output += romanNum[j];
        j -=1;
      }
    }
  }
  return output;
}

function breakDownNum(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input.length - i === 4) {
      arr.push(input[i] + '000');
    } else if (input.length - i === 3) {
      arr.push(input[i] + '00');
    } else if (input.length - i === 2) {
      arr.push(input[i] + '0');
    } else {
      arr.push(input[i]);
    }
  }
  return arr;
}

// Drive code
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
