function to_roman (num) {
  // your implementation code here
  var output = ''

  while (num>=1000) {
    num -=1000
    output+= 'M'
  }

  while (num>=900) {
    num -=900
    output+= 'DM'
  }

  while (num>=500) {
    num -=500
    output+= 'D'
  }

  while (num>=400) {
    num -=400
    output+= 'CD'
  }

  while (num>=100) {
    num -=100
    output+= 'C'
  }

  while (num>=90) {
    num -=90
    output+= 'LC'
  }

  while (num>=50) {
    num -=50
    output+= 'L'
  }

  while (num>=40) {
    num -=40
    output+= 'XL'
  }

  while (num>=10) {
    num -=10
    output+= 'X'
  }

  while (num>=9) {
    num -=9
    output+= 'IX'
  }

  while (num>=5) {
    num -=5
    output+= 'V'
  }

  while (num>=4) {
    num -=4
    output+= 'IV'
  }

  while (num>=1) {
    num -=1
    output+= 'I'
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
