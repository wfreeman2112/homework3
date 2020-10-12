// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lcletters = ["a", "b", "c", "d"];
var ucletters = ["A", "B", "C", "D"];
var special = ["!", "@", "$", "%"];



// Write password to the #password input
function writePassword() {
    var possibleCharacters = [];
    var password = "";
    var numchar = prompt("choose a number of characters between 8-128");
   if(confirm("do you want lowercase letters?")) {
       possibleCharacters = possibleCharacters.concat(lcletters); 
       password = password + getRandom(lcletters);
   }
    var includeUpperCase = confirm("do you want uppercase letters?");
    var includeNum = confirm("do you want numbers?");
    var includeSpecial = confirm("do you want special characters, like ! or % ?");

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
