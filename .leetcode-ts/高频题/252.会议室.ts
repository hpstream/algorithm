/**
 * 
题目描述:
给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],…] (si < ei)，请你判断一个人是否能够参加这里面的全部会议。

示例 1:
输入: [[0,30],[5,10],[15,20]]
输出: false

示例 2:
输入: [[7,10],[2,4]]
输出: true

方法1：
主要思路：
（1）直观的想，对会议时间进行排序，排序后的安排中，出现后面一个会议的开始时间小于前面一个会议的结束时间，则说明会议有重合，返回false；

 */

function canAttendMeetings(intervals) {
  if (intervals == null || intervals.length == 0) return true;

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][0]) return false;
  }
  return true;
}
