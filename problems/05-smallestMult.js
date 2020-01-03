function lowestCommonMultiple(a,b) {
  return (a*b)/greatestCommonDivisor(a, b);
}

function greatestCommonDivisor(a,b) {
  if(b===0){
    return a
  }
  return greatestCommonDivisor(b, a%b);
}

function smallestMult(n) {
  let max=1;
  for(let i=2; i<=n; i++){
    max = lowestCommonMultiple(max, i)
  }
  return max
}

smallestMult(20);
