/* Write a js program to merge two array to third array. */
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var mergeArray = [];
for (var i = 0; i < array1.length; i++) {
  mergeArray.push(array1[i]);
}
for (var i = 0; i < array2.length; i++) {
  mergeArray.push(array2[i]);
}
console.log(mergeArray);