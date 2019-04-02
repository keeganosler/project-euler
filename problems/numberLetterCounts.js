function numberLetterCounts(limit) {
  var nums = ['one','two','three','four','five','six','seven','eight','nine']
  var teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen']
  var tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  var word = []
  var sum = 0
  for (let i=0; i<limit; i++) {
    if (i <= 9) {
      word.push(nums[i])
    } else if (i >= 10 && i < 20) {
      word.push(teens[i-10])
      console.log(word)
    } else {
      word.push(tens[i])
    }
  }

 for (let i=0; i<word.length; i++) {
   var thisWord = word[i]
   sum = sum + thisWord.length
 }
 return sum
   
}

numberLetterCounts(5);
