function to_roman(num) {
  const ribuan = ["", "M", "MM", "MMM"]
  const ratusan = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const puluhan = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  const satuan = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let numberStr = String(num)
  let result = undefined
  let index1 = undefined
  let index2 = undefined
  let index3 = undefined
  let index4 = undefined

  switch (numberStr.length) {
    case 1:
      index = numbersArr.indexOf(numberStr[0])
      return satuan[index]
      break;

    case 2:
      index1 = numbersArr.indexOf(numberStr[0])
      index2 = numbersArr.indexOf(numberStr[1])
      return puluhan[index1] + satuan[index2]
      break;

    case 3:
      index1 = numbersArr.indexOf(numberStr[0])
      index2 = numbersArr.indexOf(numberStr[1])
      index3 = numbersArr.indexOf(numberStr[2])
      return ratusan[index1] + puluhan[index2] + satuan[index3]
      break;

    case 4:
      index1 = numbersArr.indexOf(numberStr[0])
      index2 = numbersArr.indexOf(numberStr[1])
      index3 = numbersArr.indexOf(numberStr[2])
      index4 = numbersArr.indexOf(numberStr[3])
      return ribuan[index1] + ratusan[index2] + puluhan[index3] + satuan[index4]
      break;
  }
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
