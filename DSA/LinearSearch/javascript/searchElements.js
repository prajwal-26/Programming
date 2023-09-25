var number = [1, 23, 4, 5, 5];
var targets = 5;
function searchIndex(arr, targets) {
  if (arr.length === 0) {
    return false; // Return false when the array is empty
  }
  for (var index = 0; index < arr.length; index++) {
    // Check for element at every index
    var element = arr[index];
    if (element === targets) {
      return index; // Found the target, return its index
    }
  }
  return false; // Return false when the target is not found
}
var answer = searchIndex(number, targets);
console.log(answer);

//return the element
function searchElements(arr, targets) {
  if (arr.length === 0) {
    return false; // Return false when the array is empty
  }
  for (var index = 0; index < arr.length; index++) {
    // Check for element at every index
    var element = arr[index];
    if (element === targets) {
      return element; // Found the target, return its index
    }
  }
  return false; // Return false when the target is not found
}
var answer = searchElements(number, targets);
console.log(answer);
