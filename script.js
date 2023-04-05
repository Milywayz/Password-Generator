// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays used in password options that are variables 
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'h', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0,1,2,3,4,5,6,7,8,9];
let special = ["~" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "_" , "+" , "=" , "{" , "}" , "[" , "]" , "|" , "/" , ":" , ";" , "'" , "<" , ">" ,"," , "." , "?" , " "];


// Function that generates the password
function generatePassword(){
  // Password length prompt and variables that collect the password options
  let length=prompt("Please enter a length between 8 and 128 for your password.")
  let passwordoptions=[]
  let finalPassword=[]
  // Password length function that requires you to have at least 8 characters and no more than 128
  if (length < 8 || length > 128) {
    alert("Please choose an appropriate length for your password!")
    return
  }
  // Password confirms asking what you want to include into your password
  let upper=confirm("Do you want to include Uppercase Letters?");
  let lower=confirm("Do you want to include Lowercase Letters?");
  let number=confirm("Do you want to include Numbers?");
  let specials=confirm("Do you want to include Special Characters?")

  // Password functions based on what the user confirms or declines 
  if (upper === true) {
    passwordoptions=passwordoptions.concat(upperAlphabet)
  }
  if (number === true) {
    passwordoptions=passwordoptions.concat(numbers)
  }
  if (lower === true) {
    passwordoptions=passwordoptions.concat(lowerAlphabet)
  }
  if (specials === true) {
    passwordoptions=passwordoptions.concat(special)
  }
  if (!upper && !number && !lower && !specials)  {
    alert("PLease select at least one option for your password!")
    return
  }
  console.log (passwordoptions)

  // Final Password that gathered all the options you selected into on function
  for (let i = 0; i < length; i++) {
    finalPassword.push(passwordoptions[Math.floor(Math.random()*passwordoptions.length)]) 

  }
console.log (finalPassword)


  // Returns all the options to be put onto the webpage text box
  return finalPassword.join("")
}

// Adds functions to the webpage for password selector
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
