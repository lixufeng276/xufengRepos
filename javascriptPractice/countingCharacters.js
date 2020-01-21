var portalString = "the cake is a lie";

function countingCharacters(stringToCount) {
  console.log(stringToCount + " has " + stringToCount.length + " characters.")
}
function countingCharacters2(stringToCount, charToFind) {
  var numberOfChar = 0;
  for (var i = 0; i < stringToCount.length; i++) {
    if (stringToCount[i] == charToFind) {
      numberOfChar++;
    }
  }
  console.log('String to search in: "' + stringToCount + '"');
  console.log('Character to find: "' + charToFind + '"');
  console.log('"' + charToFind + '"' + " appears " + numberOfChar + " time(s) in " + stringToCount);
}
function countingCharacters3(str, search) {
  count = 0;
  numChars = search.length;
  var lastIndex = str.length - numChars;
  for (var i = 0; i <= lastIndex; i++) {
    var current = str.substring(i, i + numChars);
    if (current == search) {
      count++;
    }
  }
  console.log('String to search in: "' + str + '"');
  console.log('Substring to find: "' + search + '"');
  console.log('"' + search + '" appears ' + count + " time(s) in " + str + ".");
  return count;
}

rounded = 0;
function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}
for (var i = 0; i < 100; i++) {
  //console.log(rollDice());
}

function addTwoNumbers(firstNumber, secondNumber) {
  return firstNum + secondNum;
}

var fruits = ['kiwi', 'rambutan', 'mango', 'tomato'];
console.log(fruits);
console.log(fruits.slice(1,2));
console.log(fruits);
console.log(fruits.splice(1,2));
console.log(fruits);
