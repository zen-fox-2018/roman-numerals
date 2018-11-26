function to_roman (num) {
  result = ''
var cek = num
   for (i = num ; i >= 0; i --){
     if(i === 1000){
       result += 'M'
       cek = num - 1000
       i = cek

     }else if( i === 500){
       result+='D'
       cek = cek - 500
       i = cek
     }
     else if (i === 400 && num <= 1500){
       result += 'CD'
       cek = cek - 400
       i = cek
     }
     else if(i === 100 && i <= 400){
       result += 'C'
       cek = cek - 100
       i = cek
     }else if(i === 50){
       result += 'L'
       cek = cek - 50  
       i = cek
       console.log(i)

     }
     else if(i === 40 && i < 50){
       result += 'XL'
       cek = cek - 40
       i = cek
     }
     else if(i === 10){
      result += 'X'
      cek = cek - 10
      i = cek
     } else if(i === 9){
      result += 'IX'
      cek = cek - 9
      i = cek
     }
     else if (i === 5 ){
       result += 'V'
       cek = cek - 5
       i = cek
       console.log(i)
     }
     else if( i === 4){
       result += 'IV'
       cek = cek - 4
       i = cek
     }else if (i < 4){
       result += 'I'
     
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
