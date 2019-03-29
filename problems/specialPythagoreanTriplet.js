 //Pythagoras: (a^2) + (b^2) = (c^2)
 //Also: a + b + c = 1000
 //Rearrange for c and sub this into Pythagoras which gives the following:
 // a = (500000 - 1000*b) / (1000 - b)

function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    var a, c
    for (var b=1; b<1000; b++) {
        a = (500000-1000*b)/(1000-b)
        if (Math.floor(a)===a) {
            c = 1000-a-b
            break
        }
    }
    sumOfabc = a*b*c

    return sumOfabc;
}

specialPythagoreanTriplet(1000);
