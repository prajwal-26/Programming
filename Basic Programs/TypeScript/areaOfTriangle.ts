function areaOfTriangle(base:number, height:number):number|string {
    if (height <= 0 ||  base <= 0) {
      return "enter values";
    }
    const area:number = (base * height) / 2;
    return area;
  }
  const base:number = 10;
  const height:number = 10;
  const area = areaOfTriangle(base, height);
  console.log(area);
  