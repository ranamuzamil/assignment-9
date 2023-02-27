/* Write a js program to copy all elements from an array to another array. */
var array1 = [1, 2, 3, 4, 5];
var array2 = [];
for (var i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
}
console.log(array2);