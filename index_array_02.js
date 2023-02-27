/* Write a js program to print all negative elements in an array. */
var array = [1, 2, -5, 10, -2, 3, -4];
var negativeArray = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeArray.push(array[i]);
  }
}
console.log(negativeArray);