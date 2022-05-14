package com.hp;
import com.hp.TimeTools.Task;



public class Main {
  public static int fib1(int n) {
    if(n <= 1) return n;
    return fib1(n-1) + fib1(n-2);
  }
  public static int fib2(int n) {
    if(n <= 1) return n;
    int first = 0;
    int second = 1;
    for(int i=0;i<n;i++){
      int sum = first + second;
      first = second;
      second = sum;

    }
    return second;

  }
  public static void main(String[] args) {
    int n = 46;
    TimeTools.check("fib1", new Task(){
      public void  execute(){
        fib1(n);
      }
    });
      TimeTools.check("fib2", new Task(){
      public void  execute(){
        fib2(n);
      }
    });
  }
}
