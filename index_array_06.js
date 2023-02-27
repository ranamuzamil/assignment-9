/* Write a js program to count total number of even and odd elements in */
/* an array. */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = 0;
var odd = 0;
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log('Even: ' + even);
console.log('Odd: ' + odd);