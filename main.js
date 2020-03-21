"use strict"

/* 
Homework 4
Pavlo Pechenevskyi
 */

// task 1

let arr1 = [1,2,3,4,5,6,7,8,9,0];
let arr2 = [];

function copyArr(arr) {
    for (let index = 0; index < arr.length; index++) {
        arr2[index] = arr[index];
    }
}

copyArr(arr1);
console.log(arr2);

// task 3
/* Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 Элементы массива будут разделены запятой. Получите результат двумя разными методами.
 */

//  method 1 (or way 1)

let arr3 = ['apple',10,'banana',20,'orange',30];
let arr3ToString = '';

for (let index = 0; index < arr3.length; index++) {
    arr3ToString += arr3[index]+',';
}

console.log(arr3ToString);

// method 2 (or way 2)

let arr3ToString1 = arr3.join(',');
console.log(arr3ToString1);

// Заполните массив 10-ю иксами с помощью цикла.

let arr4 = [];

for (let index = 0; index <= 9; index++) {
    arr4[index] = 'X';
}
console.log(arr4);

// Заполните массив числами от 1 до 10 с помощью цикла

let arr5 = [];

for (let index = 0; index <= 9; index++) {
    arr5[index] = index + 1;
}
console.log(arr5);

/* Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
 Дроби округляйте до двух знаков в дробной части.
 */

let arr6 = [];

for (let index = 0; index < 10; index++) {
    arr6[index] = Math.round(Math.random()*100)/100;
}
console.log(arr6);

// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 

for (let index = 0; index < 10; index++) {
    arr6[index] = Math.round(Math.random()*10);
}
console.log(arr6);

/* 
 Дан массив с числами.
 С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.  */

 let arr7 = [1,25,32,8,23,9,-2,24,75,75,5.56,5,26,9,10,0,4.555];

 for (let index = 0; index < arr7.length; index++) {
     if ( arr7[index] > 0 && arr7[index] < 10) {
       console.log(arr7[index]);
     }    
 }

 /* Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
  Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл.
   Если такого элемента нет - ничего не выводите.
 */
   
 for (let i = 0; i < arr7.length; i++) {
     if (arr7[i] == 5) {
         console.log('Есть');
         break
     } 
 }

//  Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

let arr7Sum =0;
for (let i = 0; i < arr7.length; i++) {
arr7Sum += arr7[i];
}
console.log(arr7Sum);

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

let arr7SumQ =0;
for (let i = 0; i < arr7.length; i++) {
arr7SumQ += arr7[i]*arr7[i];
}
console.log(arr7SumQ);


// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

let arr7Sum1 =0;
for (let i = 0; i < arr7.length; i++) {
arr7Sum1 += arr7[i];
}
let arr7Average = arr7Sum1 / arr7.length;
console.log(arr7Average);

/* Пользователь вводит многозначное число через promt. 
Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента
 и вставляет двоеточие (:) между двумя нечетными числами.
  Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
 */


function colonOdd(num) {
    let ourString = '';
    for (let i = 0; i < num.length; i++) {
        if (+num[i]%2 > 0 && +num[i+1]%2 > 0) {
            ourString = ourString + num[i] +':';
        } else {
            ourString = ourString + num[i];
        } 
    } return ourString
}

let someNumber = prompt(`Tape big number`,0);
 console.log (colonOdd(someNumber));

/*  Напишите функцию removeDuplicates(arr), которая возвращает массив,
 в котором удалены повторяющиеся элементы из массива arr
  (игнорируйте чувствительность к регистру).
 */

 function removeDuplicates(arr) {
     let arrRemuved = [];
     for (let key of arr) {
         if (!arrRemuved.includes(key) ) {
             arrRemuved.push(key);
         }
     } return arrRemuved;
 }
  
 let arr8 = [11,12,13,13,'Aa','aa','sq','qs','aa','AA','sq','qs','2A','2a','2b'];
 console.log(arr8);
 console.log(removeDuplicates(arr8));
 

 /* 
 Напишите функцию getFirst(array, n), которая возвращает фрагмент массива,
  содержащий первые 'n' элементов массива.
 */

 function getFirst(arr, n) {
     if(arr == null) return false; // можно и без {}?
     if (n == null) {
         return arr[0];
     }
    return arr.slice(0,n);
 }
 console.log(getFirst(arr8,7));

 /* 
 Напишите код, который создаёт массив элементов представляющих собой сумму
 соответствующих элементов заданных массивов.
 */

 function sumTwoArray(arr1,arr2) {
     let arrSum = [];
     let arrLength;
     if (arr1.length >= arr2.length) {
          arrLength = arr1.length;
     } else {
        arrLength = arr2.length;
     }
     for (let i = 0; i < arrLength; i++) {
        if (arr1[i] === undefined) {
            arr1.push(0);
        } 
        if (arr2[i] === undefined) {
            arr2.push(0);
        }
        arrSum.push( arr1[i] + arr2[i]) ;
    }
      return arrSum;
 }
 console.log(sumTwoArray(arr7,arr8)); //почемуто после этой функции в arr8 добавляется два нуля в конец массива

/* 
Напишите функцию union, которая возвращает массив состоящий только
 из уникальных элементов из каждого массива.
 */

 /* сначала у меня была такая функция,
  но в конце добавлялись лишние нули (разобрался из за предыдущей функции)
  и если в первом масиве повторялись элементы то они тоже повторялись
  */
//  function union(arr1,arr2) {
//      let arrUniq = [];
//      for (const key in arr1) {
//          if (!arr2.includes(key) ) {
//              arrUniq.push(arr1[key]);
//          }
//      }
//      arr2.forEach(element => {
//         arrUniq.push(element);
//      });
    
//      return arrUniq;
//  }
// console.log(union(arr7,arr8));


function union(arr1,arr2) {
    let arrTemp = arr1.concat(arr2);
        return  removeDuplicates(arrTemp) ; // исользовал функцию из предыдущего задания
}
 console.log(union(arr7,arr8));

/* 
Напишите функцию union, которая возвращает массив, содержащий все элементы arr1,
 которые не находятся в arr2 и наоборот.
 */

 function union1(arr1,arr2) {
    let  ourResult = [];
    // у меня получилось два варианта оба работают
// for (const key of arr1) {
//     if (!arr2.includes(key)) {
//         ourResult.push(key);
//     }
// }
//     for (const key of arr2) {
//         if (!arr1.includes(key)) {
//             ourResult.push(key);
//         }
// } 
arr1.forEach(e =>  {if (!arr2.includes(e)) {ourResult.push(e);}});
arr2.forEach(e =>  {if (!arr1.includes(e)) {ourResult.push(e);}});
return ourResult
 }

 let arr11 = [10, 22, 45,'aa',75,75];
 let arr12 = [21, 22, 3, 45, 'ab', 'aa'];
 console.log(union1(arr11, arr12));

 /* 
 Напишите функцию compareNumbers(arr), которая возвращает массив,
  элементы которого отсортированы по убыванию их значений. */

  function compareNumbers(arr) {
     return  arr.sort((a, b) => a - b);
  }

  let arr13 = [11,23,21,45,65,23,85,65,98,125,3];
  console.log(compareNumbers(arr13));

//   Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

function sumOfSquares(arr){
  return  arr.reduce((sumOf,e) => sumOf + e*e,0);
}
let arr14 = [11,23,21,45,65,23,85,65,98,125,3];
  console.log(sumOfSquares(arr14));
console.log(arr14);

//   Напишите код, который определяет сумму и произведение значений массива.

let sumOfArr14 = arr14.reduce((sumOf,e) => sumOf + e, 0);
let productOfArr14 = arr14.reduce((prodOf,e) => prodOf * e, 1);

console.log(`Sum of Arr14 = ${sumOfArr14} 
Product of Arr14 = ${productOfArr14}`);

/* Напишите функцию filterFalse(arr), которая очищает массив 
от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
 */

 function filterFalse(arr) {return arr.filter(e => !!e)};

 let arr15 = [NaN,88,'Hello',true, undefined, 0, 10, false, -100, null, '', 185];
 console.log(filterFalse(arr15));

/* Напишите функцию moveElement(arr,from,to), которая позволяет
 переместить элемент массива из позиции from в позицию to.
 */
function moveElement(arr,from,to) {
    return arr = arr.splice(to, 0, arr.splice(from, 1)[0]);
}
 let arr16 = [12,12,32,34,43,54,56,76,78,98,78];
 console.log(arr16);
 moveElement(arr16,1,10);
 console.log(arr16);

 /* Напишите функцию generateNumbers(start, len), которая генерирует массив
  заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.
 */

 function generateNumbers(start, len) {
     let newArr =[];
     for (let i = 0; i < len; i++) {
         newArr.push(start++);
     } return newArr
 }
 console.log(generateNumbers(3,20));

 /* Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
  Использую метод reduce() напишите функцию currentSums(numbers), которая 
  возвращает новый массив из такого же числа элементов, в котором на каждой
   позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
 */

 function currentSums(numbers) {
     let newArrNumbers = [];
     numbers.reduce((sum,e,i) =>  newArrNumbers[i] = sum + e,0);
     return newArrNumbers;
 }
 
 let numbers1 = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(currentSums(numbers1));

// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let arr17 = ['a', 'b', 'c'];
arr17.push( 1, 2, 3);
console.log(arr17);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

let arr18 = [1, 2, 3];
arr18.reverse();
console.log(arr18);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arr19 = [1, 2, 3];
arr19.unshift(4, 5, 6);
console.log(arr19);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент

let arr20 = ['js', 'css', 'jq'];
console.log(arr20[arr20.length - 1]);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

let arr21 = [1, 2, 3, 4, 5];
let newArr21 = arr21.slice(3);// or arr21.slice(3,5) or arr21.slice(-2);
console.log(newArr21);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let arr22 = [1, 2, 3, 4, 5];
 arr22.splice(1,2);
 console.log(arr22);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

let arr23 = [1, 2, 3, 4, 5];
let newArr23 = arr23.splice(1,3);
console.log(newArr23);

// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

let arr24 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr24[1][0]);

// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

let obj01 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj01.js[0]);

// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

let arr25 = ['a', 'b', 'c'];
alert(`arr25 =[${arr25}]`);

/* С помощью массива arr из предыдущего номера выведите
 на экран содержимое первого, второго и третьего элементов.
 */
alert(arr25); // :-)

// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

let arr26 = ['a', 'b', 'c', 'd'];
alert(`${arr26[0]}+${arr26[1]}, ${arr26[2]}+${arr26[3]}`);

/* Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый 
 элемент массива на второй, а третий элемент на четвертый. 
 Результаты сложите, присвойте переменной result. 
 Выведите на экран значение этой переменной.
 */

let arr27 = [2, 5, 3, 9];
let resultArr27 = arr27[0] * arr27[1] + arr27[2] * arr27[3];
alert(resultArr27);


// The END
