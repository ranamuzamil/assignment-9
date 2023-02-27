/* Write a JS code for Binary search algorithm */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var element = 3;
var start = 0;
var end = arr.length - 1;
var mid = Math.floor((start + end) / 2);
while (start <= end) {
  if (arr[mid] === element) {
    console.log(mid);
    break;
  } else if (arr[mid] < element) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
  mid = Math.floor((start + end) / 2);
}