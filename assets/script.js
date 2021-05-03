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
  var passLength = parseInt(window.prompt("How Many characters do you want?")); // converts user choice into an integer.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}
else if (passLength > 128) { //prompt to tell you password must be under 128 characters long.
  alert("Must be under 128 characters");
  return;

}
else if (passLength < 8 ) { //prompt to tell you password must be over 8 characters.
  alert("Must be at least 8 characters");
  return;
}

else { //Prompts that ask you what to include your password.
  var isSpecChosen = window.confirm("Press OK to include special characters, otherwise press cancel");
  console.log(isSpecChosen);
  var isLowerCase = window.confirm("Press OK to include lowercase letters, otherwise press cancel");
  console.log(isLowerCase);
  var isUpperCase = window.confirm("Press OK to include uppercase letters, otherwise press cancel");
  console.log(isUpperCase);
  var isNumber = window.confirm("Press OK to include numbers, otherwise press cancel");
}
