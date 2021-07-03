// import React, { Component } from "react";

// class Reset extends Component {

//   constructor(props) {
//     super(props)

//   }




// }
// export default reset




// const url = "https://jsonplaceholder.typicode.com/users/1/todos";
// const response = await fetch(url);
// const result = await response.json()
// console.log(result)

// this.setState({
//   dataBase: result,
//   filterDB: result,
//   displayData: result

// })







// let nums1 = [1, 12, 4, 3, 2,];
// nums1.sort(function (a, b) { return b - a });
// console.log(nums1)


// let nums1 = [1, 5, 4, 3, 2,];
// // console.log(nums1.length)
// let nums2 = [6, 2, 2, 3, 4, 5, 5, 6,];
// let nums3 = [5, 2, 2, 30, 4, 5, 5, 6,];
// function getSecondLargest(nums1) {
//   let array;
//   let i = 0;
//   while (i < nums1.length) {
//     if (nums1[i] > nums1[i + 1]) {
//       let tmp = nums1[i + 1];
//       nums1[i + 1] = nums1[i];
//       nums1[i] = tmp;
//       i++;
//     }
//     console.log(nums1);
//   }
// }

// console.log(array);[1, 2, 3, 6, 8]
// for (i = array.length; i >= 0; i--) {

//   if (array[i] > array[i - 1]) {
//     console.log(array[i - 1]);
//     break;
//   }


// }

// getSecondLargest(nums1)
// getSecondLargest(nums2)
// getSecondLargest(nums3)





// let str = "gameofthrones";
// let str1 = str.split('');
// let vowel = "aeiou"
// let v = 0;
// let c = 0;


// function vowelsAndConsonants() {

//   for (let i = 0; i < str1.length; i++) {
//     let n = vowel.includes(str1[i]);
//     if (n == true) {
//       console.log(str1[i]);
//       v++;
//     }
//   }
//   for (let j = 0; j < str1.length; j++) {
//     let n = vowel.includes(str1[j]);
//     if (n == false) {
//       console.log(str1[j]);
//       c++;
//     }
//   }

// }
// vowelsAndConsonants(str1)
// console.log("there are " + v + " vowels ");
// console.log("and " + c + " consonants");





// let array1 = [1, 2, 5, 6];
// let array2 = [3, 4];

// const len1 = array1.length;
// const len2 = array2.length;

// // console.log(array1.splice(0, 1))
// // let array3 = array1.concat(array2);
// //  console.log(array3)       [ 1, 2, 3, 6, 4, 5 ]
// let i = 0;
// let j = 0;
// while (i < len1 || j < len2) {
//   if (array1[i] <= array2[j]) {
//     // arr.push(array1[i])
//     array2.splice(j, 0, array1[i])
//     array1.splice(i, 1)
//     i++;
//   } else {
//     // arr.push(array2[j])
//     j++;
//   }
// }
// console.log(array2)







// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data));

// const fetch = require("node-fetch");

// async function getUsers() {
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     try {
//         let res = await fetch(url);
//         return res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// function processData(data) {

//     const result = data.filter(person => {
//         return (person.username == 'Karianne')
//     })

//     console.log(result)
// }


// getUsers().then(data => processData(data))

// function main() {

//     const args = process.argv;
//     const parameter = args[2];
//     const propValuePair = parameter.split('=')
//     const prop = propValuePair[0]
//     const value = propValuePair[1]

//     console.log('prop', prop)
//     console.log('value', value)
// }

// main()






// let s = '207';       // string to int conversion
// let n = parseInt(s) 
// console.log(n)




// let s = 'tuckshitfuck';

// function getLetter(s) {
//   let letter;
//   let char = s[2];
//   const set1 = new Set(['a', 'e', 'i', 'o', 'u']);
//   const set2 = new Set(['b', 'c', 'd', 'f', 'g']);
//   const set3 = new Set(['h', 'j', 'k', 'l', 'm']);
//   const set4 = new Set(['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']);
//   switch (true) {
//     case (set1.has(char)):
//       letter = "A";
//       break
//     case (set2.has(char)):
//       letter = "B";
//       break
//     case (set3.has(char)):
//       letter = "C";
//       break
//     case (set4.has(char)):
//       letter = "D";
//       break

//   }


//   return letter;
// }
// console.log(getLetter(s))






// --(2)-- complete the getGrade(score) function in the editor.It has one parameter: an integer, , 
// denoting the number of points Julia earned on an exam.
// It must return the letter corresponding to her  according to the following rules:



// function getGrade(score) {
//     let grade;
//     // Write your code here
//     if (0 <= score && score <= 5) {
//         grade = "F";
//     } else if (5 < score && score <= 10) {
//         grade = "E";
//     } else if (10 < score && score <= 15) {
//         grade = "D";
//     } else if (15 < score && score <= 20) {
//         grade = "C";
//     } else if (20 < score && score <= 25) {
//         grade = "B";
//     } else if (25 < score && score <= 30) {
//         grade = "A";
//     }

//     return grade;
// }
// console.log(getGrade(29));










// --(1)-- Declare a constant variable, PI , and assign it the value Math.PI.You will not pass this challenge unless the variable is declared as a constant and named PI(uppercase).
// Read a number, , denoting the radius of a circle from stdin.
// Use PI  and  to calculate the area  and perimeter of a circle having radius.
// Print area as the first line of output and print perimeter as the second line of output.



// const PI = Math.PI;
// let r = 2.6;
// let area;
// let perimeter;
// area = PI * r * r;
// perimeter = 2 * PI * r;
// console.log(area)
// console.log(perimeter)





// function factorial(n) {
//     let fact = 1;
//     for (i = n; i > 0; i--) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(factorial(4));





// let a = 20;
// let b = 9.11;
// let str = "is my fav tv series";
// let ib = Math.trunc(b);
// console.log(a + ib);
// console.log(b + ib);
// console.log("friends " + str);
// console.log(a + Math.trunc(b));
// console.log(Math.trunc(b) + b);
// console.log("friends " + str);






// let str = "Welcome to 10 Days of JavaScript! "
// function greeting(str) {
//     console.log("hello world" + '\n' + str)
// }
// greeting(str);




// str = "a1a1a1a166yyyy";
// let s = 0;
// var n = 0;
// for (i = 0; i < str.length; i++) {

//     const code = str.charCodeAt(i);

//     console.log('code', code)

//     if (47 < code && code < 58) {
//         n++;
//     }
//     else {
//         s++;
//     }
// }

// console.log(n)
// console.log(s)




//  let numberCount = 0;
//  let characterCount = 0;
//  for(i=0;i<str1.length;i++){
//     if(typeof(str1[i]) == 'string' ){
//         characterCount++ ;
//     }else if(typeof(str1[i]) == 'number' ){
//         numberCount++ ;
//     }
//  }
//  console.log(numberCount);
//  console.log(characterCount);












// let arr1 = [3,2,5,4,1];
// let arr1 = "3,2,5,4,1";

// function abc(arr1, print){
// arr1 = arr1.split(',');
// print('====>',arr1) 
// let len = arr1.length-1;
// let p ;

// print(arr1.join(','))

// for(let i=0; i<arr1.length-1; i++){

//     arr1.shift()
//     arr1.push(arr1[arr1.length-1])
//     print(arr1.join(','))

// } 
// }

// function print(arguments){
//     console.log(arguments)
// }
// function printArrow(a){
//     console.log('===>',a)
// }

// abc(arr1, print)
// abc(arr1, printArrow)

// // // Diamond pattern....

// function heera(n){
//   for(var i=1 ; i<=n  ;i++){
//      for(var s = n-1 ; s >= i ; s--){
//         process.stdout.write(" ");
//      }
//      for(var j = 1 ; j <= i ; j++){
//         process.stdout.write("* ");
//      }
//      console.log();
//   }
//   if(i == n+1){
//      for(var i = 1 ; i <= n-1 ; i++){
//         for(var s = 1 ; s <= i ; s++){
//            process.stdout.write(" ");
//         }
//         for(j = i ; j <= n-1 ; j++){
//            process.stdout.write("* ");
//         }
//         console.log();
//      }
//   }
// }
// heera(9);






// Histograph of an array of elemnts...


// var i;
// var j;
// var m;
// var pmg = [2, 3, 1, 7, 0, 4, 4];
// var unsorted = [2, 3, 1, 7, 0,4,4];
// var omg = unsorted.sort() ;
// var max = omg[omg.length-1];
// var globalmax  =omg[omg.length-1];
// // var a = 0;

// for (i=0 ; i< globalmax ; i++)
// {

//   m = "" ;

//   for (j=0; j<pmg.length; j++)
//   {
//     if(pmg[j]>=max)
//     {
//         m= m +"*";
//     }
//     else
//     {
//       m= m +" ";
//     }
//   }
//   console.log(m);
//    max-- ;
// }








// var p = 10;
// var u = 5;
// var d = 2;
// let input = function days(p , u , d)
// {
//   return p/(u-d)
// }
// console.log(Math.ceil( input(p,u,d)));


// let a = 13;
// let b = 4;
// let c = a/b;
// console.log(Math.ceil(c));





// let numb1 = 190;
// let arr1 = [];
// function togo (n)
// {
//     return n % 10 + Math.floor(n/10);
// }
// for (i = 0 ; i < numb1; i++){
//     if (numb1 % i == 0){
//         arr1.push([i]);
//     }
// }
// }
// for (i=0; i<=arr1.length; i++){
//     if (togo(arr1[i]) == togo([numb1])){ 
//         console.log(arr1[i]);
//     } 

// }

// console.log(arr1);













// let i , j , n ;
// for (i=6 ; i>=1 ; i--){
//     let it = "";
//     for(j=i ; j<=6 ; j++){
//         it = it + '*';
//     } 
//     console.log(it);
// }







// let i;
// let n = 5;
// let j;
// for (i = 1; i <= n; i++) {

//   let m = " ";

//   for (j = 1; j <= i; j++) {
//     m = m + "*";
//   }
//   console.log(m);
// }






















//factorial number ......

// var n = 5 ;
// var fact = 1;
// if (n<0  && n==0 || n == null){
// console.log(n + " is not a factorial number .");
// }else {
//     for (i=n ; i>0 ; i--){
//          fact= fact * i ;
//      } 
//     console.log(fact);
// }


















// let entry = "000";
// let mainEntry = entry.split("");

// let arr1 = entry.split("");
// if (arr1[0] != 1 && arr1[arr1.length - 1] != 1) {
//   console.log(entry + " is not correct ")
// } else {

//   for (i = 1; i < arr1.length - 1; i++) {
//     if (arr1[i] == 0 && arr1[i] == null) {
//       console.log(entry + " is  correct ");
//     } else {
//       console.log(entry + " is not correct ");
//       { break; }
//     }

//   }
// }




















// let word = "malayalak";

// let array1 = word.split("");
// let array3 = word.split(""); 
// let array2 = array1.reverse();

// if(JSON.stringify(array3) == JSON.stringify(array2)){
//     console.log(word + " is a palindromic number .")
// }else{
//     console.log(word + " is not a palindromic number .");
// }













// // to check if string2 exists in string1....

// let str1 = "asifali";
// let str2 = "fail";
// var flag = 0;

// for(i = 0; i< str1.length; i++){
//     if(str1[i] == str2[0]){
//         let k = i+1;
//         let j = 1;
//         while(j<str2.length){
//             if(str2[j] == str1[k]){
//                 flag++;
//             }
//             else{
//                 flag = 0;
//             }
//             if(flag == str2.length){
//                 console.log("yes");
//             }
//         }
//     }
//     else{
//         flag = 0;
//     }
// }



// let str1 = "asifali";
// let str2 = "sif";
// var m = 0;

// for(i=0; i <str1.length; i++){
//     for (j=0; j<str2.length; j++){
//         if(str2[j] == str1[i]){
//             // console.log("yes");
//             console.log(m)
//            m = m + 1;
//            console.log(m)

//         }
//         else{
//             // console.log('no')
//             m = 0;
//         }
//         if(m == str2.length)
//             console.log("Yes")
//     }
// }
// for(i=0 ; i<=str2.length-1 ;i++){
//     for(j=0 ; j<=str1.length-1 ; j++){
//         if(str2[i] == str1[j]){
//         m++;
//         }
//         else{
//             m=0;
//         }
//     }
//     if(m == str2.length){
//         console.log("yes");
//     }



// }












//  fibonacci sequence....
// let n = 12;
// let str =[];
// str[0] = 0;
// str[1] = 1;
// for(i=2 ; i<=n ; i++){
//     str[i] = str[i-2] + str[i-1];
//     str.push(str[i]);
// }console.log(str); 






//  let numb = [1,3,7,9,5,12,2,8];
// let revnumb = [];
// for(i= 0 ; i< numb.length ; i++){

//         revnumb.unshift(numb[i]);
//     }
//  console.log(revnumb); 




// let song = "phir le aaya dil";
// let result =[];
// let arr = song.split(" ");

// console.log(arr);    







//  var str = ' phir le aaya dil';
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];

//   for(var x=0; x<str.length; x++)
//   {
//       if (str[x-1] == ' ' ){
//          result.push(str[x].toUpperCase());
//       }else
//       result.push(str[x]);
//   }
//      // if(UPPER.indexOf(str[x]) !== -1)
//     // {
//     //   result.push(str[x].toLowerCase());
//     //  }
//     // else 
//     //  if(LOWER.indexOf(str[x]) !== -1 && str[x-1] == [" "])
//     // {
//     //    result.push(str[x].toUpperCase());
//     //  }
//     // else 
//     // {
//     //   result.push(str[x]);
//     // }

//    console.log(result.join('')); 






//  let nam = 'prateek';
// let fruits = ['orange', 'papaya', 'banana', 'grapes', 'apple', 'mango'];
// let fruit1 = 'apple';
// let fruit2 = 'mango';

// let like = ` hello ${nam} 
// <h>available ${fruits} </h>
// <p>you have to choose any two</p>
// <p> i recommend ${fruit1} and ${fruit2} coz these are fresh as today</p>`;

// console.log(like); 





// const num = [0, 2, 5, 4, 6, 8];

// const hat = [num[0]];
// for(x=1; x<=num.length; x++){
//     if((num[x-1]%2 === 0) && (num[x]%2 === 0)){
//         hat.push('-' , num[x]);
//     }else{
//         hat.push(num[x]);
//     }
// };
// console.log(hat.join(''));



// ye samjh me aya hai thoda thoda se....

// var arr1=[3, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++)
// {
//         for (var j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ; 











// .splice(for deleting and adding elements in an array)
// let myPet = ['dog', 'cat', 'goat', 'horse','cow'];
// let remove =  myPet.splice(3, 1, 'snake');
// console.log(myPet);

// .splice(index,deletion to - from, elementsto add)
// let numb =[1,2,4,5,6,7,];
// let numb2 = numb.splice(2,2);
// let int = 2;
// let insert = numb.push(int);

// .toFixed to show decimal numbers should be upto...

// let number = 22/7;
// console.log(number.toFixed(4));


// array sorting........at default it only works on single digit numbers..

// let numb =[100,5,3,70,9];
//  numb.sort((a,b) => a-b);
// // numb.sort();
// console.log(numb);


// cloning of array....

// let marks = [6,4,2,7,5,8];
// /* let clonedMarks = [...marks];
// console.log(clonedMarks);*/
//  let clonedMarks = [];
//  for (i=0; i<= marks.length; i++){
//      clonedMarks[i]= marks[i];
//  } 
//  console.log(clonedMarks);


// creating a function to slice elements in an array....

// var ages = [23, 32, 19, 29, 27,25];
// var n =3 ;
// var alal = function(ages ,n) {
//     if(ages == null)
//     return void 0;
//     if(n == null)
//     return ages[0];
//     return ages.slice(0, n);
// };
// console.log(alal(ages,n)); 



// var ages = [23, 32, 19, 29, 27,25];
// var n = 1;
// var alal = function(ages ,n) {
//     if (ages == null)
//     return void 0;
//     return ages.slice(2, ages.length-n)
// };
// console.log(alal(ages,n)); 



// var a = 3;
// var b = 8;
// var aoo = function(a, b) {
//     if (a%2 != 0 && b%2 != 0){
//         console.log(a+b);
//     return a+b;
//     }
//     console.log("not a valid number");
// };
// (aoo(a, b));





// var arr = ['asif', 'clove' , 'prateek'];
// var att = arr.toString();
// console.log(att);





// const sheeps = ['a', 'x', 'f'];

// const cloneSheeps = sheeps.slice();

// // const cloneSheepsES6 = [...sheeps];
// console.log(cloneSheeps);

