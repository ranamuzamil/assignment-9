/* 5. Write a JS code to print a pattern using for loop */
/* 1 2 3 4 5 6 */
var n = 8;
for (var i = 1; i <= n; i++) {
  var str = '';
  for (var j = 1; j <= i; j++) {
    str += j + ' ';
  }
  console.log(str);
}