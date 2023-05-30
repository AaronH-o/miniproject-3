// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

    var passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128.");

    while(passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Number is not between 8 and 128. Please try again.");
    }
    
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N","O","P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var specialCharacters  = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","|","\\",":",";","\"","'","<",">","?","/","~","`"];


    // todo: fix this
    do {
      var characterTypes = [];
      var possibleCharacters = 0;
      if(confirm("Would you like to include lowercase letters?")) {
        characterTypes += lowercase;
        possibleCharacters += 26;
      }
      if(confirm("Would you like to include uppercase letters?")) {
        characterTypes += uppercase;
        possibleCharacters += 26;
      }
      if(confirm("Would you like to include numbers?")) {
        characterTypes += numbers;
        possibleCharacters += 10;
      }
      if(confirm("Would you like to include special characters?")) {
        characterTypes += specialCharacters;
        possibleCharacters += 32;
      }
      // Check if at least one character type is selected
      if (characterTypes.length === 0) {
        alert("Please select at least one character type.");
      }
    } while(characterTypes.length === 0);
  

    // todo: fix this
    // Create password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * possibleCharacters.length);
      if(random < 26) { // lowercase
        password += lowercase[random];
      } else if(random < 52) { // uppercase 
        password += uppercase[random + 26];
      } else if(random < 62) { // numbers
        password += numbers[random + 52];
      } else { // special characters
        password += specialCharacters[random + 62];
      }
    }
  
    // Return password
    return password;
}