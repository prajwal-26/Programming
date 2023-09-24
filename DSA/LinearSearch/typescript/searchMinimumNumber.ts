const numbers:number[] = [23, 2, 3, 6,  9];

const searchMinimumNumber = (numbers:number[]):number => {
  let min:number = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < min) {
      min = numbers[index];
    }
  }
  return min;
};
const minValue:number = searchMinimumNumber(numbers);
console.log(minValue);
