function areaOfCircle (radius) {
if(radius <= 0){
    return "invalid radius"
}
const area = Math.PI * Math.pow(radius , 2);
return area;

}
const radius = 5;
const  area = areaOfCircle(radius)
console.log(area);

