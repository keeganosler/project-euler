function createCollatz(num) {
  var collatz = []
  collatz.push(num)
  while (num != 1) {
    if(num%2 === 0) {
      num = num /2
    } else {
      num = 3*num + 1
    }
    collatz.push(num)
  }
  console.log(collatz)
  return collatz
}

function longestCollatzSequence(limit) {
  var collatzArr = []
  var maxChainLength = 0
  var maxChain = 0
  for (let i=0; i<limit; i++) {
    collatzArr = createCollatz(i)
    var sizeChain = collatzArr.length
    if(sizeChain > maxChainLength) {
      maxChainLength = sizeChain
      maxChain = i
    }
  }
  return maxChain
  
}

longestCollatzSequence(14);
