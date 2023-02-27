/* Write a js program to put even and odd elements of array in two */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];
var odd = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}
console.log(even);
console.log(odd);