// Assignment Code
var generateBtn = document.querySelector("#generate");
var regenBtn = document.querySelector("#regen");
var passwordText = document.querySelector("#password");
var length;
var uppercase;
var lowercase;
var numeric;
var password;
var specialChar;
// Establishes criteria for password
function criteria() {
  //variable reset
  uppercase = false;
  lowercase = false;
  numeric = false;
  specialChar = false;
  // Series of confirms/prompts to determine criteria
  length = prompt("Set a password length from 8-128:")
  // Setting values based on user input
  if (length < 8 || length > 128) {
    alert("Please enter a range between 8 and 128");
    return criteria();
  }
  alert("Length of password set to " + length);
  if (confirm("Would you like to include uppercase characters? 1/4")) {
    uppercase = true;
    alert("Uppercase characters will be included");
  }
  if (confirm("Would you like to include lowercase characters? 2/4")) {
    lowercase = true;
    alert("Lowercase characters will be included");
  }
  if (confirm("Would you like to include numbers? 3/4")) {
    numeric = true;
    alert("Numbers will be included");
  }
  if (confirm("Would you like to include special characters? 4/4")) {
    specialChar = true;
    alert("Special characters will be included");
  }
  if (uppercase === false && lowercase === false && numeric === false && specialChar === false) {
    alert("At least one preference must be selected");
    return criteria();
  }
  writePassword(length, uppercase, lowercase, numeric, specialChar);
  regenBtn.setAttribute("style", "display: inline; background-color: rgb(10, 96, 234);")
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
// Regenerates new password with same criteria

function writePassword(length, uppercase, lowercase, numeric, specialChar) {
  password = generatePassword(length, uppercase, lowercase, numeric, specialChar);
  passwordText.value = password;
}


// Add event listener to generate and regenerate button

generateBtn.addEventListener("click", criteria);
regenBtn.addEventListener("click", function() {
  writePassword(length, uppercase, lowercase, numeric, specialChar);
});

