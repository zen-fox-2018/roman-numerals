function to_roman (num) {
  // your implementation code here
  var result ='';
  //handle 1000
  while (num > 1000){
    result = result + 'M';
    num = num - 1000;
  }
  //handle sekitar 500
  if (num > 400 && num < 500) {
    result = result + 'CD';
    num = num - 400;
  }
  else {
    while (num > 500){
      result = result + 'D';
      num = num - 500;
    }
  }
  //100
  if (num > 90 && num < 100){
    result = result + 'XC';
    num = num - 90;
  }
  else {
    while (num > 100){
      result = result + 'C';
      num = num - 100;
    }
  }
  // 50
  if (num > 40 && num < 50){
    result = result + 'XL';
    num = num -40;
  }
  else {
    while (num > 50){
      result = result + 'L';
      num = num - 50;
    }
  }
  //10
  while (num > 10){
    result = result + 'X';
    num = num - 10;
  }
  // kasus dibawah 10
  if (num === 9) {
    result = result + 'IX';
    num = num - 9;
  }
  else if (num === 4) {
    result = result + 'IV';
    num = num - 50;
  }
  else {
    while (num > 5){
      result = result + 'V';
      num = num - 5;
    }
    while (num >= 1){
      result = result + 'I';
      num = num - 1;
    }
  }
  return result;
}

// Drive code
console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|———————');
console.log('4     | IV       | ', to_roman(4));
console.log('9     | IX       | ', to_roman(9));
console.log('13    | XIII     | ', to_roman(13));
console.log('1453  | MCDLIII  | ', to_roman(1453));
console.log('1646  | MDCXLVI  | ', to_roman(1646));
