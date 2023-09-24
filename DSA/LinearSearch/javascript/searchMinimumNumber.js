const numbers = [23,2,3,6,1,9] 


const searchMinimumNumber = (numbers) => {
    let min = numbers[0]
   for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < min) {
        min = numbers[index]
    }
    
   }
   return min
}
const minValue = searchMinimumNumber(numbers)
console.log(minValue);