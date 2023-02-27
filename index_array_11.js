/* Write a js program to count frequency of each element in an array. */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var uniqueArray = [];
var duplicateArray = [];
for (var i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i]);
  } else {
    duplicateArray.push(array[i]);
  }
}
console.log(duplicateArray.length);