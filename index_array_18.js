/* Write a js program to search an element in an array. */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var search = prompt('Enter a number to search');
var found = false;
for (var i = 0; i < array.length; i++) {
  if (array[i] == search) {
    found = true;
    break;
  }
}
if (found) {
  console.log('Found');
} else {
  console.log('Not Found');
}