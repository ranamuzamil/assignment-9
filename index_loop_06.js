/* Write a JS code to find the no of digits in a number */
var num = 12345;
var count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);