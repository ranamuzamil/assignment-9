/* Write a js program to count total number of negative elements in an */
/* array. */
var arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count++;
  }
}
console.log(count);