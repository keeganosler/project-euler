function namesScores(arr) {
  var sortedArr = arr.sort()
  var totalSum = 0
  for (let i=0; i<sortedArr.length; i++) {
    var alphSum = 0
    for (let j=0; j<sortedArr[i].length; j++) {
      alphSum = alphSum + sortedArr[i].charCodeAt(j)-64 
    }
    totalSum = totalSum + alphSum*(i+1)
  }
  return totalSum
}

const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);
