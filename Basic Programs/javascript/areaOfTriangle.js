function areaOfTriangle(base, height) {
  if (height <= 0 && base <= 0) {
    return "enter values";
  }
  const a = (base * height) / 2;
  return a;
}
const base = 10;
const height = 10;
const area = areaOfTriangle(base, height);
console.log(area);
