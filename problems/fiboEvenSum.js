function fiboEvenSum(n) {
  let first=1, second=2, sum=2, fib;
  if (n <= 1) {
    return sum
  }
  for (let i=2; i<=n; i++) {
    fib=first+second
    first=second
    second=fib
    if (fib%2 === 0) {
      sum=sum+fib
    }
  }
  return sum
}

fiboEvenSum(10);
