import java.util.Scanner;

public class fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter how many numbers want to print ");
        int fibonacci = scanner.nextInt();
        int firstnum = 0;
        int secondnum = 1;
        for (int i = 0; i <= fibonacci; i++) {
            System.out.println(firstnum + " ");
            int next = firstnum + secondnum;
            firstnum = secondnum;
            secondnum = next;
        }
    
    }
}
