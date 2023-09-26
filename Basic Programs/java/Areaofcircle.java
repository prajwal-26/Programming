
public class Areaofcircle{
public static void main(String[] args) { 
    int radius = 0;
    double area = areaofcircle(radius);
    System.out.println(area);
}

public static double areaofcircle(int radius){
    if(radius  <= 0){
        System.out.println("enter the correct radius");
    }
    double area = Math.PI * Math.pow(radius, 2);

      return area;
}


} 