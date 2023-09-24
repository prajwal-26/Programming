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


//Method 2:
//first we will convert the string to array using .split method
const string: string = "Hello World"; // Input string
const target: string = "0";          // Target character

const searchElement2 = (string : string, target:string):string | boolean => {
  if (!string) return false;  // Check if string is empty

  const charArray: string[] = string.split(''); 

  for (let index = 0; index < charArray.length; index++) {

    if (target === charArray[index]) return true; // Check for target character
  }

  return false; // Target character not found
};
const ans: string | boolean = searchElement2(string, target); // Search for target in string
console.log(ans);