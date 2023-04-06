// Assignment code here

var characterLength = 8;
var choiceArr = [];

var lowerCaseArr =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("You Have Clicked The Button... But You Didn't Enter A PASSWORD!")


function getPrompts(){
  choiceArr = [];

  characterLength = parseInt(prompt("Your Password Will Require a length of 8 - 128 Characters?"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length has to be a number, 8 - 128 characters. Please Try Again.");
    return false;
  }

  if (confirm("Would You Like To Use Lowercase letters In Your Password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("Would You Like To Use Uppercase letters In Your Password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Would You Like To Use Special Characters In Your Password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Would You Like To Use Numbers In Your Password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}



  // return "Generated PASSWORD Goes Here!"
}


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 //1. Prompt the user for the password criteria
  //a. Password Length 8 < 128
   //b. Lowercase, uppercase, numbers, special characters
  //2. Validate the input.
  //3. generate password based on criteria.

//4. Display password to the page.