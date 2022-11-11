// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
   var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", orchestrate);

function orchestrate (){

  var charactersSize = parseInt (window.prompt("How many characters would you like your password to contain"));
  if (charactersSize <8 || charactersSize> 128){
      window.alert("Passsword needs to be at least 8 characters and no more than 128 characters")
  }
  var isSpecialCharacters = window.confirm("Click OK to confirm including special characters");
  var isNumericCharacters = window.confirm("Click OK to confirm including numeric characters");
  var isLowercaseCharacters = window.confirm("Click OK to confirm including lowercase characters");
  var isUppercaseCharacters = window.confirm("Click OK to confirm including uppercase characters");

  var password2 = generatePassword(charactersSize, isSpecialCharacters, isNumericCharacters, isLowercaseCharacters, isUppercaseCharacters);
  writePassword(password2);

}

var specialCharacters = ["@", "$", "%"];
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";

function generatePassword(charactersSize, isSpecialCharacters, isNumericCharacters, isLowercaseCharacters, isUppercaseCharacters){
  var password = "";
  for (i=0; i<charactersSize; i++){
    var selector = Math.floor(Math.random() * 4)
    if (selector == 0) {
      var index = Math.floor(Math.random() * specialCharacters.length)
      password = password + specialCharacters [index]
    } else if (selector == 1) {
      password = password + Math.floor(Math.random() * 10)
    } else if (selector == 2) {
      var index = Math.floor(Math.random() * lowercaseCharacters.length)
      password = password + lowercaseCharacters.charAt(index)
    } else if (selector == 3) {
      var index = Math.floor(Math.random() * lowercaseCharacters.length)
      password = password + lowercaseCharacters.charAt(index).toUpperCase()
    }
  }
  return password;
}
