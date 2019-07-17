function sumAmicableNum(n) {
  var halfTotal = n / 2;
  var amicableNumbers = [];
  var sum = 0;

  for (var i = 0; i < halfTotal; i++){
    if (n % i === 0){
      amicableNumbers.push(i);
      sum += i;
    }
  }
  return sum
}

console.log(sumAmicableNum(10000));
