/* Write a JS code to find the largest number in an array */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);