function largeSum(arr) {
  var sum = 0
  for (let i=0; i<arr.length; i++) {
    sum = sum + Number(arr[i])
  }
  var newArr = sum.toString().slice(0,11).split(".")
  return(newArr[0].concat(newArr[1]))
}

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
