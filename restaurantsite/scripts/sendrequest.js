//call the refresh function when everything is validated and "submitted" otherwise
//make user requirement for name, email or phone

function refresh() {
  //calls function to clear all fields
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("reason").value = "default";
  document.getElementById("info").value = "";
  document.getElementById("choice1").checked = false;
  document.getElementById("choice2").checked = false;
  document.getElementById("monday").checked = false;
  document.getElementById("tuesday").checked = false;
  document.getElementById("wednesday").checked = false;
  document.getElementById("thursday").checked = false;
  document.getElementById("friday").checked = false;
}
function validate() {
  //making the name and email or phone field required for submission
  if ((document.getElementById("fullname").value == "" || document.getElementById("email").value == "") && (document.getElementById("fullname").value == "" || document.getElementById("phone").value == "")) {
    document.getElementById("receive").innerText = "Please put your name and email or phone so we can contact you.";
    alert("Please put your name and email or phone so we can contact you.");
  } else {
  //when submitted sends the data to no where, send a notice that the data has been received, and clears all fields.
    document.getElementById("receive").innerText = "Your request has been submitted. \n Please allow 2-3 business days for a response.";
    alert("Your request has been submitted. \n Please allow 2-3 business days for a response.");
    refresh();
  }
}
