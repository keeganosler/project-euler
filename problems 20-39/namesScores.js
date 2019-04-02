function namesScores(arr) {
  var sortedArr = arr.sort()
  for (let i=0; i<sortedArr.length; i++) {
    var alphSum=0
    for (let j=0; j<sortedArr[i].length; j++) {
      alphSum = alphSum + sortedArr[i].charCodeAt(j)-64
      console.log(alphSum)
    }
  }
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);
