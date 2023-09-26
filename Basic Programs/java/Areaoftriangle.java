import java.util.*;
public class Areaoftriangle {
    public static void main(String[] args) {
      Scanner hello = new Scanner(System.in);
      System.out.println("Enter the base of a triangle");
       double base = hello.nextDouble();
       System.out.println("Enter the height of a triangle");
        double height = hello.nextDouble();
    double area = areaoftriangle(base,height);
    String result = areaoftriangles(base, height);
    System.out.println(Math.round(area));
    System.out.println(result);
    
hello.close();
    }

    public static double areaoftriangle(double base,double height ){
if (base == 0 || height == 0) {
    return -1;
   
}
 double area = base * height / 2;
    return area;
    }
public static String areaoftriangles(double base , double height ){
if (base <= 0 || height <= 0) {
    return "enter correct answer";
}
return"invalid";
    }
}
