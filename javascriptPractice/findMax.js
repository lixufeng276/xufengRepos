function findMax(inputArray) {
  var max = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (i == 0) {
      if (inputArray[i] < inputArray[i+1]) {
        max = inputArray[i+1];
      } else {
        max = inputArray[i];
      }
    } else {
      if (max < inputArray[i]) {
        max = inputArray[i];
      }
    }
  }
  return max;
}
console.log(findMax([1,2,3,512,312,412,451,2223,11,10200]));
