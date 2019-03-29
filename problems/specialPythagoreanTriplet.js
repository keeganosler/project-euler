 //Pythagoras: (a^2) + (b^2) = (c^2)
 //Also: a + b + c = n
 //Rearrange for c and sub this into Pythagoras which gives the following:
 // a = (0.5*(n^2) - n*b) / (n - b)

function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    var a, c
    for (var b=1; b<n; b+=1) {
        a = ((n^2)-(2*n*b))/(2*n-2*b)
        if (Math.floor(a)===a) {
            c = n-a-b
            break
        }
    }
    sumOfabc = a*b*c
    console.log(sumOfabc)
    return sumOfabc;
    
}

specialPythagoreanTriplet(1000);
