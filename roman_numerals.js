function to_roman (num) {
  // your implementation code here
  var hasil = ''
  var unik = [1000,900,500,400,100,90,50, 40, 10, 9, 5, 4, 1]
  var roman = ['M', 'CM','D','CD','C', 'XC','L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
  
  for(i=0; i<unik.length; i++){
    if(num >= unik[i]){
      hasil+= roman[i]
      num -=unik[i]
      i=i-1
    }
 
  }
  return hasil


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
console.log('1646  | XXXIII   | ', to_roman(33))
