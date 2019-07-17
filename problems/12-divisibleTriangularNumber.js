function divisibleTriangleNumber(n) {
  var triNum = 1
  var numDiv = 0

  triNum = triNum*(triNum+1) / 2
  for (let i=0; i<triNum; i++) {
    if(triNum%i === 0) {
      numDiv = numDiv + 1
    }
    if (numDiv === n) {
      return triNum
    }
    triNum++
  }

}


divisibleTriangleNumber(167);
