import java.util.Scanner;

public class Areaofrectangle {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the length of a retangle");
    int length = scanner.nextInt();
    System.out.println("Enter the breadth of a rectangle");
    int breadth = scanner.nextInt();
    int area = areaofrectangle(length, breadth);
    System.out.println("area of a rectangle : " + area);
    }
    public static int areaofrectangle(int length , int breadth){
if (length <= 0 || breadth <= 0) {
System.out.println("Enter a valid number");

}
int area = length * breadth;
return area;
    }
}
