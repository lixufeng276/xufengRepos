var sentence = "I love learning software development";

for (var i = 0; i < sentence.length; i++) {
  if(sentence[i] !== " "){
    console.log(sentence[i]);
  }
}

var n = 15;
var result = 0;

if (n % 2 == 0) {
  result = result + 10;
} else {
  result = result - n;
}
console.log(n);
console.log(result);

var sum = 0;

for (n; n >= 0; n--) {
  sum += n;
  console.log(n);
  console.log(sum);
}

console.log(sum);
