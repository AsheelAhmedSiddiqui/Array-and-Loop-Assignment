// 3. Write a program to print numeric counting from 1 to 10.
/* for (let i = 0; i < 10; i++) {
    document.write(`${i} <br>`)
} */

/* 4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user. */
/* var userNum = +prompt("Enter a number to show its multiplication table");
var tableLenght = +prompt("Enter lenght multiplication table");
document.write(`Multiplication table of ${userNum} <br> Lenght is ${tableLenght} <br> <br>`)
for (let i = 1; i <= tableLenght; i++) {
    document.write(`${userNum} X ${i} = ${userNum * i} <br>`);
} */

/* 5. Write a program to print items of the following array
using for loop:
 */
/* let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(`${fruits.join("<br>")} <br> <br>`)
for(let i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
} */

/* 10. Write a program to print multiples of 5 ranging 1 to
100 */
/* for (let i = 1; i <= 20; i++) {
  document.write(i * 5 + "<br>");
} */

/* 1. Declare and initialize an empty multidimensional array.
(Array of arrays) */
let multiArr = [[]];
console.log(multiArr);