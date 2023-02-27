/* Write a JS code to print the Fibonacci series for a given value of N */
var n = 10;
var arr = [0, 1];
for (var i = 2; i < n; i++) {
  arr.push(arr[i - 1] + arr[i - 2]);
}
console.log(arr);