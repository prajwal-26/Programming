function areaOfCircle (radius:number):number|string {
    if(radius <= 0){
        return "invalid radius"
    }
    const area:number = Math.PI * Math.pow(radius , 2);
    return area;
    
    }
    const radius:number = 5;
    const  area:number|string = areaOfCircle(radius)
    console.log(area);
    