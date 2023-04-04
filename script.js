// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays used in password options
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'h', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0,1,2,3,4,5,6,7,8,9];
let special = ["~" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "_" , "+" , "=" , "{" , "}" , "[" , "]" , "|" , "/" , ":" , ";" , "'" , "<" , ">" ,"," , "." , "?"];


// Function that generates the password
function generatePassword(){
  // First prompt of the password and variables that put into 
  let length=prompt("How long do you want your password to be?")
  let passwordoptions=[]
  let finalPassword=[]
  if (length < 8 || length > 128) {
    alert("Please choose an appropriate length for your password!")
    return
  }

  let upper=confirm("Do you want to include Uppercase Letters?");
  let lower=confirm("Do you want to include Lowercase Letters?");
  let number=confirm("Do you want to include Numbers?");
  let specials=confirm("Do you want to include Special Characters?")

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

  // if(confirm("Do you want your password to contain lowercase letters?"))
  // {


  // }



  for (let i = 0; i < length; i++) {
    finalPassword.push(passwordoptions[Math.floor(Math.random()*passwordoptions.length)]) 

  }

console.log (finalPassword)
//build a string based off of randomly selected values from an array


  return finalPassword.join("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
