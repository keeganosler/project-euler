function largestPrimeFactor(number) {
  let prime=2, maxPrime=1;
  while (prime<=number) {
    if (number%prime === 0) {
      maxPrime = prime;
      number = number/prime;
    } else {
      prime++;
    }
  }
  return maxPrime;
}

largestPrimeFactor(13195);
