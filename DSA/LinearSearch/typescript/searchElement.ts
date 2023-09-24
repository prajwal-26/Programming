const number: number[] = [1, 23, 4, 5, 5];
const targets: number = 5;
const answer: number | boolean = searchElement(number, targets);
console.log(answer);
function searchElement(arr: number[], targets: number): number | boolean {
  if (arr.length === 0) {
    return false; // Return false when the array is empty
  }
  for (let index = 0; index < arr.length; index++) {
    // Check for element at every index
    let element = arr[index];
    if (element === targets) {
      return index; // Found the target, return its index
    }
  }
  return false; // Return false when the target is not found
}
