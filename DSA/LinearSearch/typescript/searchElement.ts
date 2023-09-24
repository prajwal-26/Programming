const num: number[] = [1, 23, 4, 5, 5];
const target: number = 5;

// Function to search for the index
const searchIndex = (arr: number[], target: number): number | boolean => {
  if (arr.length === 0) {
    return false; // Return false when the array is empty
  }
  for (let index = 0; index < arr.length; index++) {
    // Check for element at every index
    const element = arr[index];
    if (element === target) {
      return index; // Found the target, return its index
    }
  }
  return false; // Return false when the target is not found
};

const ans: number | boolean = searchIndex(num, target);
console.log(ans);

// Function to search for the element itself
const searchElement = (arr: number[], target: number): number | boolean => {
  if (arr.length === 0) {
    return false; // Return false when the array is empty
  }
  for (let index = 0; index < arr.length; index++) {
    // Check for element at every index
    const element = arr[index];
    if (element === target) {
      return element; // Found the target, return its element
    }
  }
  return false; // Return false when the target is not found
};

const answer:number = searchElement(num, target);
console.log(answer);
