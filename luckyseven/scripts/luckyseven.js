//make the function to roll a six sided dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function play() {
  /*bet is the starting bet from the input and startBet is the id to put in
  on the table with the results*/
  var startBet = document.forms["luckySevens"]["bet"].value;
  if (startBet == "" ) {
    alert("Error Message: This isn't money, please put some money in.");
    /*Even though the project asked for a Starting Bet <= 0, < 1 is a better logic
    for when the user inputs a starting bet of something between 0 and 1, it will
    still roll once before the game is over with the <= 0 logic. Having at least 1
    dollar as an input to start would be better*/
  } else if (Number(startBet) < 1) {
    alert("Error Message: Please put in more money!");
  } else {
    //once the correct input is set, start rolling dice
    var betPool = Number(startBet)
    var max = Number(startBet);
    var totalRolls = 0;
    var rollHigh = 0;
    while (betPool > 0) {
      totalRolls++;
      //tho this is redundant, I am writing for clarity
      var diceRoll1 = rollDice();
      var diceRoll2 = rollDice();
      var sumOfRolls = diceRoll1 + diceRoll2;
      if (sumOfRolls == 7) {
        betPool += 4
        /*since the maximum number is achieved whenever the roll is a total of 7
        max is assigned then, same goes with roll count at highest amount won*/
        if (max < betPool) {
          max = betPool;
          rollHigh = totalRolls;
        }
      } else {
        betPool -= 1;
      }
    }
    document.getElementById("show").style.display = "block";
    document.getElementById("rolls").innerText = totalRolls;
    document.getElementById("rollCountAtHigh").innerText = rollHigh;
    //this takes care of the results displayed when inputting a decimal number
    if (Number(startBet) - Math.floor(Number(startBet)) > 0) {
      document.getElementById("startBet").innerText = "$" + Number(startBet);
      document.getElementById("amountWon").innerText = "$" + max;
    } else {
      document.getElementById("startBet").innerText = "$" + Number(startBet) + ".00";
      document.getElementById("amountWon").innerText = "$" + max + ".00";
    }
  }
}
