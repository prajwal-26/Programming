function areaOfRectangle(length:number, breadth:number):number | string {
    if (length <= 0 || breadth <= 0) {
      return "Enter a valid number";
    }
    const area:number = length * breadth;
    return area;
  }
  const length:number = 10;
  const breadth:number = 20;
  const area:number|string = areaOfRectangle(length, breadth);
  console.log(area);
  
  export{}