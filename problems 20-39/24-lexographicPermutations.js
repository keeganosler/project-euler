function lexicographicPermutations(n) {
  var digits = [0,1,2,3,4,5,6,7,8,9]
  for(let i=0; i<n-1; i++) {
    let m, l
    for(let j=0; j<digits.length-1; j++) {
      if(digits[j] < digits[j+1]) {
        m = j
      }
    }
    for(let j=m; j<digits.length; j++) {
      if(digits[m] < digits[j]) {
        l = j
      }
    }
    let temp = digits[m]
    digits[m] = digits[l]
    digits[l] = temp
    let first = m+1
    let end = digits.length - 1
    while(first < end) {
      temp = digits[first]
      digits[first] = digits[end]
      digits[end] = temp
      first += 1
      end -= 1
    }
  }
  return n;
}

lexicographicPermutations(999999);
