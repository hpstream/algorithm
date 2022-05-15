
import java.util.ArrayList;

public class Main {
  
  private static final ArrayList<String> list = new ArrayList<String>();

  public static void main(String[] args) {
    //  list.add(1);
     list.add("1");
     list.add("2");
     for(int i=0;i<list.size();i++){
       System.out.println(list.get(i));
     }
     
  }
}
