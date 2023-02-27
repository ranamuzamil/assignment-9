/* Write a JS code for Linear search algorithm */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var element = 3;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === element) {
    console.log(i);
    break;
  }
}