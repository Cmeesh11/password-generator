// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var lowercase;
var uppercase;
var numeric;
var specialChar;

// Write password to the #password input
function writePassword() {
  var password;
  var passwordText = document.querySelector("#password");
  // Series of confirms/prompts to determine criteria
  length = prompt("Set a password length from 8-128:")
  if (length < 8 && length < 128) {
    alert("Please enter a range between 8 and 128");
    writePassword();
  }
  if (confirm("Would you like to include uppercase characters?")) {
    uppercase = true;
  }
  if (confirm("Would you like to include lowercase characters?")) {
    lowercase = true;
  }
  if (confirm("Would you like to include numbers?")) {
    numeric = true;
  }
  if (confirm("Would you like to include special characters?")) {
    specialChar = true;
  }
  password = generatePassword(length, uppercase, lowercase, numeric, specialChar);
  passwordText.value = password;
  // Reset values to prevent them from carrying over
  length = null;
  uppercase = null;
  lowercase = null;
  numeric = null;
  specialChar = null;
}

// Generates the password while adhering to selected criteria
function generatePassword(length, uppercase, lowercase, numeric, specialChar) {
  // Assigning strings for different criteria types
  var selection = "";
  var pw = "";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var special = "`-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?";
  // Adds selected criteria to selection string
  if (uppercase) {
    selection += upper;
  }
  if (lowercase) {
    selection += lower;
  }
  if (numeric) {
    selection += numbers;
  }
  if (specialChar) {
    selection += special;
  } 
  // Adds a random character from selection string to pw string "length" times
  for (var i = 0; i < length; i++) {
    pw += selection.charAt(Math.floor(Math.random() * selection.length));
  }
  return pw;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

