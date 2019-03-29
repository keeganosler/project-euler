function isPrime(num) {
    let prime = true;
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num%i == 0) {
            prime = false;
            break;
        }
    }
    return prime
}

function primeSummation(n) {
    let numSum = 0
    for (let i=2; i<n; i++) {
      if (isPrime(i)) {
        console.log(i)
        numSum = numSum + i
      }
    }
    return numSum
}

primeSummation(2000000);
