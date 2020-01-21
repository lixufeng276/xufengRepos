var testArray = [0, 1, 1, "1", 3, "311"];

for (var arrayPosition = 0; arrayPosition < testArray.length - 1;
  arrayPosition++) {
  var currentElement = testArray[arrayPosition];
  var nextElement = testArray[arrayPosition + 1];

//is current element greater than next element?
  console.log("Testing " + currentElement + " and " +
    nextElement + " (greater than): " + (currentElement > nextElement));

//is current element less than or equal to next element?
  console.log("Testing " + currentElement + " and " +
    nextElement + " (less than or equal to): " + (currentElement <= nextElement));

//are they equal to?
  if (currentElement == nextElement) {
    console.log("Testing " + currentElement + " and " +
      nextElement + " (strictly equal to): " + (currentElement === nextElement));
    if (currentElement !== nextElement) {
      console.log(currentElement + " is " + typeof(currentElement));
      console.log(nextElement + " is " + typeof(nextElement));
    }

  } else {
    console.log("Testing " + currentElement + " and " + nextElement +
    " (equal to): false");
  }
}
