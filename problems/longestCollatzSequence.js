function createCollatz(num, arr) {
  arr.push(num)
  if (num%2 === 0) {
    num = num /2
  } else {
    num = 3*num + 1
  }
  createCollatz(num, arr)
  return arr
}

function longestCollatzSequence(limit) {
  var arr = []
  for(let i=0; i<limit; i++) {
    arr = createCollatz(i, arr)
    console.log(arr)
  }
  
}

longestCollatzSequence(14);
