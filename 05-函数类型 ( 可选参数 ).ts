function mySlice(start?: number, end?: number): void {
  console.log("开始索引:" + start, '结束索引：' + end);
}

mySlice()
mySlice(1)
mySlice(1, 3)