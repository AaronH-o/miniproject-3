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

    // todo: fix this
    do {
      var characterTypes = [];
      var possibleCharacters = [];
      if(confirm("Would you like to include lowercase letters?")) {
        characterTypes.push("lowercase");
        possibleCharacters.push("abcdefghijklmnopqrstuvwxyz");
      }
      if(confirm("Would you like to include uppercase letters?")) {
        characterTypes.push("uppercase");
        possibleCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      if(confirm("Would you like to include numbers?")) {
        characterTypes.push("numbers");
        possibleCharacters.push("0123456789");
      }
      if(confirm("Would you like to include special characters?")) {
        characterTypes.push("special characters");
        possibleCharacters.push("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
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
      var randomCharacterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
      var randomCharacter = possibleCharacters[characterTypes.indexOf(randomCharacterType)][Math.floor(Math.random() * possibleCharacters[characterTypes.indexOf(randomCharacterType)].length)];
      password += randomCharacter;
    }
  
    // Return password
    return password;
}