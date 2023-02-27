/* Write a js program to find second largest element in an array. */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var max = arr[0];
var secondMax = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax) {
    secondMax = arr[i];
  }
}
console.log(secondMax);