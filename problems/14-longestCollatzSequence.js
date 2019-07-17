function createCollatz(num, count) {
  while (num>1) {
    count = count + 1
    if (num%2 === 0) {
      num = num / 2
    } else {
      num = 3*num + 1
    }
  }
  return count
}

function longestCollatzSequence(limit) {
  var c = 1
  var maxChain = 0
  var max
  for (let i=0; i<limit; i++) {
    var chain = createCollatz(i, c)
    if (chain > maxChain) {
      maxChain = chain
      max = i
    }
  }
  console.log(max)
  return max
  
}

longestCollatzSequence(14);
