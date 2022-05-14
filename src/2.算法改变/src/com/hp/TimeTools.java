package com.hp;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeTools {
  private static final SimpleDateFormat fmt = new SimpleDateFormat("HH:mm:ss.SSS");

  public interface Task {
    void execute();
  }

  public static void check(String title,Task task) {
    if(task == null) return;
    title = (title == null)? "" : "["+title+"]";
    System.out.println(title);
    System.err.println("开始:" + fmt.format(new Date()));
    long begin = System.currentTimeMillis();
    task.execute();
    long end = System.currentTimeMillis();
    long delta = (end - begin) / 1000;
    System.err.println("耗时" + delta + "秒");
    System.err.println("结束：" + fmt.format(new Date()));

  }
}
