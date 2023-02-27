/* Write a js program to find maximum and minimum element in an array. */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var max = array[0];
var min = array[0];
for (var i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
}
console.log('Max: ' + max);
console.log('Min: ' + min);