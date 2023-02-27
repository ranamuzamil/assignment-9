/* Write a JS code to calculate the sum of digits in a number */
var num = 12345;
var sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);