/* Write a js program to insert an element in an array. */
var arr = [1, 2, 3, 4, 5];
var index = 3;
var element = 10;
arr.splice(index, 0, element);
console.log(arr);