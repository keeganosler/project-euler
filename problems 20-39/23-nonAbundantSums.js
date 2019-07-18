function isAbundant(num) {
  var sum = 1
  var mid = num/2
  for(var i=2; i<=mid; i++) {
    if(num%i === 0) {
      sum = sum + i
      if(sum > num) {
        return true
      }
    }
  }
  return false
}

function sumOfNonAbundantNumbers(n) {
  var abSum = 0
  var nonAbSum = 0
  for(var i=0; i<=n; i++) {
    if(isAbundant(i)) {
      abSum = abSum + 1
    }else {
      nonAbSum = nonAbSum + 1
    }
  }
  return nonAbSum
}

console.log(sumOfNonAbundantNumbers(28123));
