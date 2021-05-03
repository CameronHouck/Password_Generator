//List of variables being the characters used in the password.
var specialCharacters = "`~!@#$%^&*()[]{};:<>?/";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
//Making the generae button clickable.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
//where the password will be displayed.
var password = "";

function createPassword(word) { 

  var passwordText = document.querySelector("#password");
  passwordText.value = word;
}

function generatePassword() {
  var userChoice = "";//empty space to be filled according to user choice.
  var passLength = parseInt(window.prompt("How long do you want the password to be?")); // converts user choice into an integer.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}