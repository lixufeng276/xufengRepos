function printEvens() {
  var start = document.forms["showUsEvens"]["start"].value;
  var end = document.forms["showUsEvens"]["end"].value;
  var step = document.forms["showUsEvens"]["step"].value;
  var lastIndex = Math.floor((Number(end) - Number(start))/Number(step));
  var count = Number(start);
  if (start == "" || isNaN(start) || Math.sign(Number(start)) == -1) {
    alert("The Starting Number must be filled in with a positive number.");
    document.getElementById("evenNums").innerText = "Starting Number must be filled in with a positive number.";
  } else if (end == "" || isNaN(end) || Math.sign(Number(end)) == -1) {
    alert("The Ending Number must be filled in with a positive number.");
    document.getElementById("evenNums").innerText = "Ending Number must be filled in with a positive number.";
  } else if (Number(start) > Number(end)) {
    alert("The Starting Number is great than the Ending Number");
    document.getElementById("evenNums").innerText = "The Starting Number is great than the Ending Number.";
  } else if (step == "" || isNaN(step) || Math.sign(Number(step)) == -1) {
    alert("The Step must be filled in with a positive number.");
    document.getElementById("evenNums").innerText = "The Step must be filled in with a positive number.";
  } else {
    document.getElementById("evenNums").innerText = "Here are the even numbers between " + start + " and " + end + " by " + step + "'s:";
    for (var i = 0; i <= lastIndex; i++) {
      if (count % 2 == 0) {
        document.getElementById("evenNums").innerText += ("\n" + count);
      }
      count += Number(step);
    }
  }
}
