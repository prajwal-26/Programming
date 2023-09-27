function areaOfRectangle(length, breadth) {
  if (length <= 0 || breadth <= 0) {
    return "Enter a valid number";
  }
  const area = length * breadth;
  return area;
}
const length = 10;
const breadth = 2;
const area = areaOfRectangle(length, breadth);
console.log(area);
