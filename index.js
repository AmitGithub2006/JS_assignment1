//Ques.1:-Using a loop print all odd numbers up to and including n. Don’t include 0.

let n = parseInt(process.argv[2]);
for (let i = 1; i <= n; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Ques2:-Print the sum of all even numbers in a range from a to b. (Including a,b)

// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let sum = 0;
// for (i = a; i <= b; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//Ques3:-Write a program to read the first and last digit of a number.

// let num = parseInt(process.argv[2]);
// let firstDigit = num;
// while (firstDigit >= 10) {
//   firstDigit = parseInt(firstDigit / 10);
// }
// lastDigit = num % 10;

// console.log(firstDigit + "," + lastDigit);

//Ques4:-Check whether the given number is an armstrong number or not.

// let num = parseInt(process.argv[2]);
// firstDigit = Math.floor(num / 100);
// midDigit = Math.floor(num / 10) % 10;
// lastDigit = num % 10;
// sum = Math.pow(firstDigit, 3) + Math.pow(midDigit, 3) + Math.pow(lastDigit, 3);
// if (sum == num) {
//   console.log("It is a armstrong number");
// } else {
//   console.log("It is not a armstrong number");
// }

//Ques5:-Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even

// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let pro = 1;
// for (let i = a; i <= b; i++) {
//   if (i % 2 == 0 && parseInt(i / 10) % 10 == 4) {
//     a >= 40;
//     pro = pro * i;
// }
// }
// if (pro < 1680) {
//   console.log("Condition is not satisfied");
// } else {
//   console.log(pro);
// }

//Ques6:-Take a number and return all the even digits of the number.

// let num = parseInt(process.argv[2]);
// let last = 0;
// let temp = num;
// while (temp > 0) {
//   last = temp % 10;
//   temp = parseInt(temp / 10);
//   if (last % 2 == 0) {
//     console.log(last);
//   }
// }

//Ques7:-Check whether the given number is equal to its reverse number or not.

// let num = parseInt(process.argv[2]);
// let rev = 0;
// let temp = num;
// while (temp > 0) {
//   last = temp % 10;
//   rev = rev * 10 + last;
//   temp = parseInt(temp / 10);
// }
// if (rev == num) {
//   console.log("This number is equal to its reverse number");
// } else {
//   console.log("This number is not equal to its reverse number");
// }
