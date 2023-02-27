/* Write a js program to sort array elements in ascending or descending */
var array = [1, 6, 5, 4, 3, 2, 7, 8, 9, 10];
var ascending = [];
var descending = [];
for (var i = 0; i < array.length; i++) {
  ascending.push(array[i]);
  descending.push(array[i]);
}
ascending.sort(function(a, b) {
  return a - b;
});
descending.sort(function(a, b) {
  return b - a;
});
console.log(ascending);
console.log(descending);