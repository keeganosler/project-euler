function sumFactorialDigits(n) {
  var sum=0
  var fact=1
  for (var i=1; i<=n; i++) {
    fact = fact*i
  }
  while (fact) {
    sum = sum + fact%10
    fact = Math.floor(fact/10)
  }
  return sum
}

sumFactorialDigits(10);
