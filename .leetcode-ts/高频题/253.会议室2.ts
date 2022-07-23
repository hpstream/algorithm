import {BinaryHeap} from "../../src/9.堆/BinaryHeap";
/**
 * 
题目
给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。

示例 1:

输入: [[0, 30],[5, 10],[15, 20]]
输出: 2
示例 2:


输入: [[7,10],[2,4]]
输出: 1

 */
console.log(
  minMeetings1([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
function minMeetings(intervals: number[][]) {
  if (intervals == null || intervals.length == 0) return true;

  // 存放所有会议的开始时间
  let begins: number[] = [];
  // 所有会议的结束时间
  let ends: number[] = [];
  begins.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    begins.push(intervals[i][0]);
    ends.push(intervals[i][1]);
  }
  let room = 0,
    endIndx = 0;

  for (const begin of begins) {
    if (begin >= ends[endIndx]) {
      endIndx++;
    } else {
      room++;
    }
  }

  return room;
}
function minMeetings1(intervals: number[][]) {
  if (intervals == null || intervals.length == 0) return true;

  intervals.sort((a, b) => a[0] - b[0]);

  // 小顶
  let heap = new BinaryHeap<number>([], (o1, o2) => {
    return o2 - o1;
  });
  heap.add(intervals[0][1]);
  for (let i = 1; i < intervals.length; i++) {
    // 目前占用会议室最早结束的时间
    if (intervals[i][0] >= (heap.get() as number)) {
      heap.remove();
    }
    heap.add(intervals[i][0]);
  }
  return heap.size;
}
