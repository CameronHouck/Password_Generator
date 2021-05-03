//List of variables being the characters used in the password
var specialCharacters = "`~!@#$%^&*()[]{};:<>?/";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
//Making the generae button clickable
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);