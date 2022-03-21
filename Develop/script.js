// Assignment code here
var upperCaseList = "QWERTYUIOPLKJHGFDSAZXCVBNM";
var lowerCaseList = "qwertyuioplkjhgfdsazxcvbnm";
var numbersList = "0123456789";
var symbolsList = "!@#$%^&*()_+-=";

if (generateBtn = click) {
  var length = Number(prompt("Choose a password length between 8 - 12 characters."));

  if (length < 8 || length > 12 || isNaN(length)) {
    alert("Password length must be 8 - 12 characters!")
  };

  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use symbols?");

  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use symbols?");
  }

}

 function randomUcase() {
  for ()
 }

function randomLcase() {

}

function randomNum() {

}

function randomSym() {

}





function generatePassword() {

  


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
