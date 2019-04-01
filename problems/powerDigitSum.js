function powerDigitSum(exponent) {
  var num = Math.pow(2, exponent)
  var sum = 0
  while (num) {
    sum += num%10
    num = Math.floor(num/10)
  }
  return sum
}

powerDigitSum(128);
