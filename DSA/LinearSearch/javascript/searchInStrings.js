//code to check the character index in  a string 

const string = "Hello World"; // Input string
const target = "e";          // Target character

const searchElement = (string, target) => {
  if (!string) return false;  // Check if string is empty

  for (let index = 0; index < string.length; index++) {
    if (target == string.charAt(index)) return true; // Check for target character
  }

  return false; // Target character not found
};

const ans = searchElement(string, target); // Search for target in string
console.log(ans); // Log the result
