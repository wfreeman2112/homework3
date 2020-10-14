// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lcletters = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var special = ["!", "@", "$", "%", "&", "*", "&", "?"];



// Write password to the #password input
function writePassword() {
    var possibleCharacters = [];
    var password = "";
    var numchar = prompt("choose a number of characters between 8-128");

    if (numchar < 8) {
        alert('you need to pick a number higher than 8.')
        return;
    }

    if (numchar > 128) {
        alert('you need to pick a number lower than 128.')
        return;
    }

    if(confirm("do you want lower case letters?")) {
        possibleCharacters = possibleCharacters.concat(lcletters); 
        password = password + getRandom(lcletters);
    }

    if(confirm("do you want uppercase letters?")) {
        possibleCharacters = possibleCharacters.concat(ucletters); 
        password = password + getRandom(ucletters);
    }   
    
    if(confirm("do you want numbers?")) {
        possibleCharacters = possibleCharacters.concat(numbers); 
        password = password + getRandom(numbers);
    }   

    if(confirm("do you want special characters, like ! or % ?")) {
        possibleCharacters = possibleCharacters.concat(special); 
        password = password + getRandom(special);
    }   
var passwordLength = password.length; 
for (var i = 0; i < numchar - passwordLength; i++) {
password = password + getRandom(possibleCharacters);
}
    

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function getRandom(myArray) {
    var random = Math.random();
    var index = random * myArray.length;
    return myArray[Math.floor(index)] 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
