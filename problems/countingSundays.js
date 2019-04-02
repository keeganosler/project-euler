function countingSundays(firstYear, lastYear) {
  var sum = 0
  for (var year=firstYear; year<=lastYear; year++) {
    for (var month=0; month<=12; month++) {
      if (new Date(year, month, 1).getDay() === 0) {
        sum++
      }
    }
  } 
  return sum
}

countingSundays(1943, 1946);
