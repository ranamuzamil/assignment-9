/* Write a js program to find reverse of an array. */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reverseArray = [];
for (var i = array.length - 1; i >= 0; i--) {
  reverseArray.push(array[i]);
}
console.log(reverseArray);