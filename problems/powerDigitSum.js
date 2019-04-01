function powerDigitSum(exponent) {
  var num = Math.pow(2, exponent)
  console.log(num)
  var digits = num.toString()
  var sum = 0
  for (var i=0; i<digits.length; i++) {
    sum = sum + digits[i]
  }
  console.log(sum)
}

powerDigitSum(15);
