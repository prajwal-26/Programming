//code to check the character index in  a string 

const string: string = "Hello World"; // Input string
const target: string = "e";          // Target character

const searchElement = (string : string, target:string):string | boolean => {
  if (!string) return false;  // Check if string is empty

  for (let index = 0; index < string.length; index++) {
    if (target === string.charAt(index)) return true; // Check for target character
  }

  return false; // Target character not found
};

const ans: string|boolean = searchElement(string, target); // Search for target in string
console.log(ans); // Log the result


