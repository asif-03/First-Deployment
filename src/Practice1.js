// let num = 6;
// let numbers = [];
// for (let i = 1; i <= 6; i++) {

//   numbers.push(null);
// }
// let foo = 0;
// const doubleValue = numbers.map((number) => {
//   foo++;
//   return number = foo;

// });
// console.log(doubleValue);





//---------------------------------------------------------------------------------------------

// async function foo() {

//    new Promise((resolve) => {
//       setTimeout(resolve, 2000)
//    })


// }

// foo.then((data) =>  console.log(data))





// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));




// wait(3000).then(() => console.log("hello"))





//-----------------------------------------------------------------------------------


// function TaggedLiteralEg(strings) {
//    console.log(strings);
// }

// TaggedLiteralEg`okays, its working..`;



// let principal = 1000;
// let noofyears = 1;
// let rateofinterest = 7;

// let SI = `Simple Interest is ${(principal *
//    noofyears * rateofinterest) / 100}`;


// console.log(SI)



//---------------------------------------------------------------------------------------

// function foo() {

//    let a = 365;
//    let b = 500;
//    let percentage = (a / b) * 100;
//    return percentage;
// }

// const promise = new Promise(resolve => {
//    setTimeout(() => {
//       resolve(foo());
//    }, 2000);
// });

// promise.then(value => value.toFixed(2))
//    // .then(value => value + " %")
//    .then(value => console.log(value + " %   (Passed with First Division)"))






//-----------------------------------------------------------------------------------------------


// let person3 = { name: "asif", age: 28, gender: "male" };
// let person1 = person3;
// let person2 = person3;
// let person2 = { name: "prateek", age: 27, gender: "male" };

// console.log(person1 === person2)

// function message(p1, p2, p3) {

//    console.log(p1 + this.name + p2 + this.age + p3)
   // console.log(p1 + this.name + p2 + this.age)

// }

// message.apply(person1, [" the age of ", " is ", " years "])
// message.apply(person2, [" the age of ", " is ", " years "])

// let foo = Object.getPrototypeOf(obj);
// console.log(foo)


// function person(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
// }

// var p1 = new person('John', 'Doe');
// var p2 = new person('Robert', 'Doe');
// console.log(p1, p2)










//-------------------------------------------------------------------------------


// function insertionSort(arr) {

//    for (var i = 1, len = arr.length; i < len; i++) {
//       key = arr[i];
//       j = i - 1;

//       while (j >= 0 && arr[j] > key) {
//          arr[j + 1] = arr[j]
//          j--;
//       }

//       arr[j + 1] = key;
//    }

//    return arr;
// }

// var arr = [3, 1, 5, 6, 2];

// console.log(insertionSort(arr));





//-------------------------------------------------------------------------------------------


// let array = [4, 19, 7, 5, 1, 20];

// function selectionSort(array) {
//    let len = array.length;
//    let min, temp;

//    for (let i = 0; i < len; i++) {

//       min = i;
//       for (let j = i + 1; j < len; j++) {

//          if (array[j] < array[min]) {

//             min = j;
//          }

//       }
//       temp = array[i];
//       array[i] = array[min];
//       array[min] = temp;

//    }
//    return array;

// }

// console.log(selectionSort(array))







//--------------------------------------------------------------------------------------------------


// let array = [2, 9, 7, 5, 1, 4];

// function bubbleSort(array) {

//    let len = array.length - 1;

//    for (let i = len; i >= 0; i--) {

//       for (let j = 1; j <= i; j++) {

//          if (array[j - 1] > array[j]) {

//             [array[j - 1], array[j]] = [array[j], array[j - 1]];

//          }

//       }
//    }
//    return array;
// }


// console.log(bubbleSort(array))






//-------------------------------------------------------------------------------------------


// const random = (min, max) => {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(random(4, 90));

//----------------------------------

// let a = 7.9;
// let b;

// b = ~~a;

// console.log(b);



//----------------------------------------------------------------------------------------

//         // shuffling the array....


// var a = [99, 150, 299, 340, 390, 450, 590, 600];
// var len = a.length;

// while (len > 0) {
//    index = Math.floor(Math.random() * len);
//    len--;
//    t = a[len];
//    a[len] = a[index];
//    a[index] = t;
// }

// console.log(a);


//------------------------------------------------------------------------------------


// for (var i = 0; i < 3; i++) {
//    const log = () => {
//       console.log(i);
//    }
//    setTimeout(log, 1000);
// }


//--------------------------------------------------------------------------


// const { rejects } = require("node:assert");
// const { resolve } = require("node:path");

// function factorial(n) {

//    let data = 1;
//    if (n <= 1) {
//       return (data);
//    } else {
//       return n * factorial(n - 1);

//    }
// }
// console.log(factorial(4));


// let promise = new Promise((resolve, rejects) => {

// })


//--------------------------------------------------------------------------------------



// let code = (function fact() {
//    function getFactorial(n) {
//       return new Promise((resolve, reject) => {
//          if (n <= 1) {
//             console.log("Please enter number greater than 1")
//             resolve(1);
//          } else {
//             resolve(
//                getFactorial(n - 1).then(data => {
//                   return data * n;
//                })
//             )
//          }
//       });
//    }

// })();

// console.log(code.getFactorial(4))



//------------------------------------------------------------------------------------




// function fact(n) {
//    let result = 1;
//    if (n > 1) {
//       for (let i = n; i >= 1; i--) {
//          result = result * i;
//       }
//       return result;
//    } else {
//       return ("number should be greater than 1");
//    }

// }
// console.log(fact(-4));




//---------------------------------------------------------------------------------


// function computeSum(arr) {
//    if (arr.length === 1) {
//       return arr[0];
//    }
//    else {
//       return arr.pop() + computeSum(arr);
//    }
// }

// console.log(computeSum([7, 8, 9, 99]))


//----------------------------------------------------------------------------



// function multiply(a) {
//    return (b) => a * b;
// }

// console.log(multiply(2)(3))



//-----------------------------------------------------------------------------------

// (function () {
//    // var a = b = 5;
//    var a = b;
//    b = 5;

// })();

// console.log(b);


//-----------------------------------------------------------

// let n = 6;
// let array = [1, 2, 3, 8, 7, 6, 9];

// let mid = Math.floor(array.length / 2);
// // array.splice(0, mid);
// array.splice(mid, array.length - 1);

// console.log(array);
// console.log(array[0])


//----------------------------------------------------------------


// var a = [
//    1,
//    2,
//    4,
//    6,
//    1,
//    100,
//    0,
//    10000,
//    3
// ];

// a.sort(function (a, b) {
//    return a - b;
// });

// console.log('a,', a);

// function binarySearch(arr, i) {
//    var mid = Math.floor(arr.length / 2);
//    console.log(arr[mid], i);

//    if (arr[mid] === i) {
//       console.log('match', arr[mid], i);
//       return arr[mid];
//    } else if (arr[mid] < i && arr.length > 1) {
//       console.log('mid lower', arr[mid], i);
//       binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
//    } else if (arr[mid] > i && arr.length > 1) {
//       console.log('mid higher', arr[mid], i);
//       binarySearch(arr.splice(0, mid), i);
//    } else {
//       console.log('not here', i);
//       return -1;
//    }

// }
// var result = binarySearch(a, 100);
// console.log(result);


//--------------------------------------------------------------------------------------------------



// let rot = 3;
// let array = [2, 4, 6, 8, 1];
// for (let i = array.length - 1; i >= array.length - rot; i--) {

//    let res = array.splice(array.length - 1, 1)
//    array.splice(-array.length, 0, res[0]);
//    res.length = 0;
// }
// console.log(array);


//----------------------------------------------------------------------------------------------------


// let rot = 3;
// let array = [2, 4, 6, 8, 1];
// let newArray = [];
// for (let i = array.length - 1; i >= 0; i--) {

//    newArray.unshift(array[i]);
//    if (newArray.length == rot) {
//       break;
//    }

// }

// for (let i = 0; i < array.length - rot; i++) {
//    newArray.push(array[i]);

// }
// console.log(newArray);



//-----------------------------------------------------------------------------------------------



// function check() {
//    console.log(Array.isArray({ name: 'asif', age: 28 }));
// }

// check();  // returns False


//-----------------------------------------------------------------------------


// let str = "one two three four five"
// let arr = str.split(' ');
// console.log(str);

// let str1;
// let result;
// let finalResult = [];

// for (let i = 0; i < arr.length; i++) {
//    // reverseString(arr[i])
//    result = arr[i].split('');
//    for (let i = result.length - 1; i >= 0; i--) {
//       finalResult.push(result[i]);

//    }
//    finalResult.push(" ")
//    str1 = finalResult.join('');

// }
// console.log(str1);

// let str1 = result.toString();
// console.log(str1);
// finalResult.push(str1);


//-------------------------------------------------------------------------------------------


// function reverseString(data) {
//    let newData = data.split('');
//    for (let i = newData.length - 1; i >= 0; i--) {
//       result.push(newData[i]);
//    }
//    return result;
// }


//---------------------------------------------------------------------------------------


// var arr = [1, 2, 3, 4, 5];

// function modifyArray(arr, callback) {

//    arr.push(100);

//    callback();
// }



// modifyArray(arr, function () {
//    console.log("array has been modified", arr);
// });


//----------------------------------------------------------------------------------------


// function sum() {
//    a = 10;
//    function done() {
//       b = 9;
//       console.log(a + b);
//    }
//    return done()
// }
// sum()


//------------------------------------------------------------------


// let time = 5000;
// setTimeout(() => {
//    console.log("first");
// }, time);

// time = time - 4000;

// setTimeout(() => {
//    console.log("second");
// }, time);


//--------------------------------------------------------------------------------------------



// const p1 = fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
// const p2 = fetch("https://jsonplaceholder.typicode.com/comments?postId=1")

// const promiseArr = Promise.all([p1, p2]);

// promiseArr.then(async data => {
//    const response1 = data[0];
//    const response2 = data[1];

//    const data1 = await response1.json()
//    const data2 = await response2.json()

//    console.log(data1)
//    console.log(data2)
// })



//-------------------------------------------------------------------------------------------------





// let p1 = Promise.resolve(50);
// let p2 = 200;
// let p3 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 1000, 'geek');
// });
// let p4;

// Promise.all([p1, p2, p3, p4]).then(function (values) {
//    console.log(values);
// });


//-----------------------------------------------------------------------------


// function job() {
//   setTimeout(callback1, 2000);

//   let count = 0;
//   let data = setInterval(() => {

//     callback2();

//     count += 1;

//     if (count >= 5) {
//       clearInterval(data);
//     }

//   }, 1000);
// }
// function callback1() {
//   console.log("setTimeout");
// }
// function callback2() {
//   console.log("setInterval");
// }

// job();


//-----------------------------------------------------------------------------



// let count = 0;
// let n = 17;
// let data = setInterval(() => {
//   count += n;

//   console.log(count);

//   if (count >= n * 10) {
//     clearInterval(data);
//   }
// }, 500);

// console.log("data");



//-----------------------------------------------------------------


// setTimeout(() => {
//   console.log("this will always be the last statement");
// }, 1000);

// console.log("this is the first statement");
// for (let i = 0; i < 1000; i++) {
//   doSomething();
// }
// console.log("this is the second statement");

// function doSomething() {
//   return 1 + 1;
// }



//-------------------------------------------------------------------------------


// let n1 = "2";
// let n2 = "3";

// let sum = +n1 + +n2;

// // let sum = parseFloat(n1) + parseFloat(n2);

// // let sum = parseInt(n1) + parseInt(n2);


// console.log(sum);



//---------------------------------------------------------------------



// function factorial(n) {
//   let fact = 1;
//   for (let i = n; i > 0; i--) {

//     fact = fact * i;
//   }
//   return fact;
// }
// console.log(factorial(4));




//---------------------------------------------------------------------------


// function job(delay) {
//    return new Promise(function (resolve) {
//       setTimeout(function () {
//          console.log('Resolving', delay);
//          resolve('done ' + delay);
//       }, delay);
//    });
// }

// var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

// promise.then(function (data) {
//    console.log('All done');
//    data.forEach(function (text) {
//       console.log(text);
//    });
// });


//-------------------------------------------------------------------------------------------



// let arr = [
//   [1, 2, 3],      // [00,01,02]      [00,10,20]
//   [4, 5, 6],     // [10,11,12]      [01,11,21]
//   [7, 8, 9]     // [20,21,22]      [02,12,22]
// ];
// // let array = [[], [], []];

// let temp;
// for (let i = 0; i < arr.length; i++) {

//   for (let j = 0; j < arr[i].length; j++) {
//     // console.log(arr[i][j]);
//     if (i < j) {

//       temp = arr[i][j];
//       arr[i][j] = arr[j][i];
//       arr[j][i] = temp;
//     }
//   }
// }
// console.log(arr);


//-------------------------------------------------------------------------------------






// let n = 4;
// let arr = [2, 4, 5, 9];
// let arr1 = arr.sort();

// let maxDifference = arr1[arr1.length - 1] - arr1[0];


// let minDifference = arr1[arr1.length - 1];


// for (let i = 0; i < arr1.length; i++) {

//   if (arr1[i + 1] - arr1[i] < minDifference) {
//     minDifference = arr1[i + 1] - arr1[i];
//   }

// }
// console.log(maxDifference);
// console.log(minDifference);



//--------------------------------------------------------------------------------------


// let arr = [
//   [1, 2, 3],    [00,01,02]      [00,10,20]
//   [4, 5, 6],    [10,11,12]      [01,11,21]
//   [7, 8, 9]     [20,21,22]      [02,12,22]
// ];
// // console.log(arr);

// let diagonal1Sum = 0;
// let diagonal2Sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i == j) {
//       diagonal1Sum = diagonal1Sum + arr[i][j];
//     } if (i + j == arr.length - 1) {
//       diagonal2Sum = diagonal2Sum + arr[i][j];
//     }
//   }

// }
// console.log(diagonal1Sum, diagonal2Sum);

// function job() {
//   return new Promise(function (resolve, reject) {

//     reject();


//   });
// }


//-----------------------------------------------------------------------------------------------

// let promise = job();

// promise

//   .then(function () {
//     console.log('Success 1');
//   })

//   .then(function () {
//     console.log('Success 2');
//   })

//   .then(function () {
//     console.log('Success 3');
//   })

//   .catch(function () {
//     console.log('Error 1');
//   })

//   .then(function () {
//     console.log('Success 4');
//   });




//---------------------------------------------------------------------------------


// function job(data) {
//   let promise = new Promise(function (resolve, reject) {
//     if (typeof (data) != Number) {
//       reject('error');
//     } else if (data % 2 == 0) {
//       resolve('even');
//     } else {
//       resolve('odd');
//     }
//   })

//   // promise.catch((data) => {
//   //   console.log(data)
//   // });

//   promise.then((data) => {
//     console.log(data);
//   });

//   // return promise;
// }

// job(8)


//----------------------------------------------------------------------------------





// let num = 8;
// let arr = [-7, 7, 4, 0, -3, 4, -2, 1];
// let n = 0;
// let z = 0;
// let p = 0;
// function data(num, arr) {
//   let arr1 = arr.sort();
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] < 0) {
//       n++;
//     } else if (arr1[i] == 0) {
//       z++;
//     } else {
//       p++;
//     }
//   }

// }

// function proportion(n, z, p) {
//   let neg = (n / num) * 100;
//   let zer = (z / num) * 100;
//   let pos = (p / num) * 100;

//   console.log(neg)
//   console.log(zer)
//   console.log(pos)
// }

// data(num, arr)
// proportion(n, z, p)

// console.log(n);
// console.log(z);
// console.log(p);



//------------------------------------------------------------------------



// let a = [3, 9, 5];
// let b = [2, 7, 4];

// function compare(a, b) {
//   let a_p = 0;
//   let b_p = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       a_p++;
//     } else {
//       b_p++;
//     }

//   }

//   let array = [];
//   array[0] = a_p;
//   array[1] = b_p;

//   let result = array.join();
//   return result;
// }


// console.log(compare(a, b));



//---------------------------------------------------------------------------------




// functmeNumber(n) {
//   let counter = 0;
//   for (var i = 1; counter <= n; i++) {
//     let bool = false;
//     for (let j = 1; j < i; j++) {
//       let bool = i % j == 0;
//       if (bool) {
//         break;
//       }

//     }
//     if (!bool)
//       counter++;

//   }

//   console.log(i);

// }

// primeNumber(3)


//---------------------------------------------------------------------------------------




// function primeNumber(n) {
//   for (let i = 2; i < n / 2; i++) {
//     let bool = n % i
//     if (!bool) {
//       return false;
//     }
//   }
//   return true;
// }


//----------------------------------------------------------------


// function nthPrimeNumber(n) {
//   let count = 0;
//   for (var index = 1; count <= n; index++) {
//     let isPrimeNumber = primeNumber(index);
//     if (isPrimeNumber) {
//       count++;
//     }
//   }
//   console.log(index);
// }

// nthPrimeNumber(3)



//-----------------------------------------------------------------------------------



// function job() {

//   // setTimeout(function () {
//   //   let m = 1;
//   //   console.log(m);
//   // }, 2000);

//   setTimeout(() => {
//     clearInterval(foo)
//   }, 3001);

//   let foo = setInterval(function () {
//     let n = 2;
//     console.log(n);
//   }
//     , 1000);


// }

// job();


//--------------------------------------------------------------------------------------




// for (var i = 0; i < 10; i++) {
//   (function (index) {
//     setTimeout(() => {
//       console.log(index)
//     }, 0)
//   })(i)
// }


//--------------------------------------------------------------


// let num = 397;
// let workDone = setInterval(() => {
//   let result = (num / 500) * 100;
//   console.log(result);
// }, 1000);
// setTimeout(() => {
//   clearInterval(workDone)
// }, 3001);


//------------------------------------------------------------------


// let num = 432;
// setTimeout(data, 3000);

// function data() {
//   let result = (num / 500) * 100;
//   console.log(result);
// }



//---------------------------------------------------------


// function job(callback1, callback2) {

//   setTimeout(callback1(), 2000);

//   setInterval(callback2(), 1000);
//   // callback2();
// }

// function callback2() {
//   let num2 = 2;
//   console.log(num2);
// }

// function callback1() {
//   let num = 1;
//   console.log(num);
// }

// job(callback1, callback2)

// setTimeout(() => {
//   console.log("These are the following numbers");
// });


//-------------------------------------------------------------------------------



// let arr = [];
// let num = 39;
// for (let i = 1; i < 1000; i++) {
//   if (i % 39 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr.join());


//------------------------------------------------------------------


// let fetchdata = {
//   method: "GET",
//   Headers: {},
//   "name": "asif"
// };
// fetch("url", fetchdata)
//   .then((Response) => Response.JSON())
//   .then((data) => console.log(data))



//----------------------------------------------------------------------------



// let arr = [2, 5, 8, 4, 3];
// let num = 12;
// let result;
// for (let i = 0; i < arr.length; i++) {
//   let result = num - arr[i];
//   if (arr.includes(result)) {
//     console.log("The sum of " + `${arr[i]}` + " + " + `${result}` + " = " + `${num}`);
//     break;
//   }
// }


//----------------------------------------------------------------------------------------------------------






// let Arr = [5, 8, 2, 9, 6];
// let newArr = [];
// let arr1 = [];


// function fetchdata(data) {

//   for (let i = 0; i < data.length; i++) {
//     if (data[i] < 100 && data[i] > 0) {
//       newArr.push(data[i] * data[i]);
//     } else {
//       console.log("number is not in the domain");
//     }
//   }

//   return new Promise(function (resolve, reject) {
//     if (data) {
//       resolve(newArr.join());
//     } else {
//       reject("error")
//     }

//   });
// }
// let newData = fetchdata(newArr);

// newData.then(function (data) {
//   console.log(data);
// })



//------------------------------------------------------------------------------------------------------




/* CALLBACK FUNCTION =>

   callback function is a function which called only after completion of
   some particular task.
   callback function is passed as a parameter to another function .


   CALLBACK HELL =>

   it is the combination of many callback function called after one another
   which makes the code messy, dificult to read and understand.
   to overcome this problem we use promises.
   */


// var example = null;
// console.log(typeof (example));  // prints object



// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;



//---------------------------------------------------------------------------------------------------------------------------

// var str = "abc";
// var int = 9;
// var what = isNaN(int);
// if (!what) {
//   int = int * 10000;
//   console.log(int)
// } else {
//   console.log("is False")
// }



