function to_roman (num) {
  let ribuanDic = ["","M","MM","MMM"]
  let ratusanDic = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
  let puluhanDic = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
  let satuanDic = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
  let numberDic = ["0","1","2","3","4","5","6","7","8","9"]
  let result = ""

  let numStr = String(num)

  if (numStr.length === 4) {
    result = ribuanDic[numberDic.indexOf(numStr[0])] + ratusanDic[numberDic.indexOf(numStr[1])] +
             puluhanDic[numberDic.indexOf(numStr[2])] + satuanDic[numberDic.indexOf(numStr[3])]
  }
  else if (numStr.length === 3) {
    result = ratusanDic[numberDic.indexOf(numStr[0])] + puluhanDic[numberDic.indexOf(numStr[1])] +
             satuanDic[numberDic.indexOf(numStr[2])]
  }
  else if (numStr.length === 2) {
    result = puluhanDic[numberDic.indexOf(numStr[0])] + satuanDic[numberDic.indexOf(numStr[1])]
  }
  else if (numStr.length === 1) {
    result = satuanDic[numberDic.indexOf(numStr[0])]
  }

  return (result);
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
