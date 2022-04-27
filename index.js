"use strict";
function isWerewolf(target) {
  const arr = target.split("");
  const arrRevers = arr.reverse();

  let strRevers = "";
  for (let leters of arrRevers) {
    if (leters !== " " && leters !== "," && leters !== "?") {
      strRevers += leters;
    }
  }

  const lowstrRev = strRevers.toLowerCase();
  const rowArr = target.split("");

  let srtRow = "";
  for (let leter of rowArr) {
    if (leter !== " " && leter !== "," && leter !== "?") {
      srtRow += leter;
    }
  }

  const lowstrRow = srtRow.toLowerCase();
  return !!(lowstrRev == lowstrRow);
}

function getSuccessRate(statistic) {
  let sum = 0;
  if (statistic.length == " ") {
    return 0;
  }
  for (let item of statistic) {
    if (item == "1") {
      sum += 1;
    }
  }

  let result = (sum / statistic.length) * 100;

  return Math.round(result);
}

// console.log(getSuccessRate("11111"));
//   getSuccessRate('11100')
//   getSuccessRate('1100')
//   getSuccessRate('000000')
//   getSuccessRate('11111')
//   getSuccessRate('')

function createArray(N) {
  // write code here
  let arr = [];

  for (let i = 1; i <= N; i += 1) {
    arr.push(i);
  }
  return arr;
}
// console.log(createArray(0));

// createArray(3)
// createArray(0)

function makeStickers(detailsCount, robotPart) {
  let arr = [];

  for (let i = 1; i <= detailsCount; i += 1) {
    if (detailsCount === 0) {
      return arr;
    }
    arr.push(`${robotPart} detail #${i} `);
  }
  return arr;
}

//  console.log( makeStickers(3, 'Body'))

function doublePower(currentPowers) {
  // write code here
  let arr = [];
  if (!currentPowers.length) {
    return arr;
  }

  for (let item of currentPowers) {
    arr.push(item * 2);
  }
  return arr;
}

//   console.log(doublePower([]) )

function isSorted(boxNumbers) {
  let isSort = true;

  if (boxNumbers.length === 1) {
    return isSort;
  }

  if (!boxNumbers.length) {
    return isSort;
  }

  for (let i = 1; i < boxNumbers.length; i += 1) {
    if (boxNumbers[i] >= boxNumbers[i - 1]) {
      isSort = true;
    } else {
      isSort = false;
      break;
    }
  }
  return isSort;
}

//   console.log(isSorted([2]))

function getLocation(coordinates, commands) {
  // write code here
  let coordinateX = coordinates[0];
  let coordinateY = coordinates[1];

  for (let item of commands) {
    if (item === "back") {
      coordinateY -= 1;
    }
    if (item === "forward") {
      coordinateY += 1;
    }
    if (item === "right") {
      coordinateX += 1;
    }
    if (item === "left") {
      coordinateX -= 1;
    }
  }

  return [coordinateX, coordinateY];
}

//   console.log(getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']))

function getPlan(startProduction, numberOfMonths, percent) {
  // write code here
  let product = startProduction;
  let arr = [];

  for (let i = 0; i < numberOfMonths; i += 1) {
    product = Math.floor((percent * product) / 100) + product;
    arr.push(product);
  }
  return arr;
}

//   console.log(getPlan(200, 3, 50))

function getSpeedStatistic(testResults) {
  // write code here
  let arr = [];
  let min = testResults[0];
  let max = testResults[0];
  let mean = 0;
  let sum = 0;
  if (!testResults.length) {
    return [0, 0, 0];
  }
  for (let i = 1; i < testResults.length; ++i) {
    if (testResults[i] > max) {
      max = testResults[i];
    }
    if (testResults[i] < min) {
      min = testResults[i];
    }
  }

  for (let i = 0; i < testResults.length; i += 1) {
    sum += testResults[i];
  }
  mean = Math.floor(sum / testResults.length);

  arr.push(min);
  arr.push(max);
  arr.push(mean);

  return arr;
}

//   console.log(getSpeedStatistic([8, 9, 3, 12]))

function compareRobots(firstRobotResults, secondRobotResults) {
  // write code here
  let message = "";
  let total1 = firstRobotResults.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  let total2 = secondRobotResults.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  if (total1 > total2) {
    message = "First robot for sale!";
  }
  if (total2 > total1) {
    message = "Second robot for sale!";
  }
  if (total1 === total2) {
    message = "Both robots for sale";
  }

  return message;
}

// console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12]))

function checkNumber(number) {
  // write code here
  const isPositive = number > 0;
  const isEven = number % 2 === 0;
  const isMultipleTen = number % 10 === 0;
  let arr = [];

  arr.push(...[isPositive, isEven, isMultipleTen]);
  return arr;
}

// console.log(checkNumber(-1))
//    === [true, false, false]
// checkNumber(10) === [true, true, true]
// checkNumber(0) === [false, true, true]
// checkNumber(-1)

function getArraysSum(arr1, arr2) {
  // write code here
  const arr = [...arr1, ...arr2];
  let sum = 0;

  for (let item of arr) {
    sum += item;
  }
  return sum;
}

// console.log( getArraysSum([], []) )  // 1 + 2 + 3 + 4 = 10
// getArraysSum([], [])

function combineArrays(first, second) {
  // write code here
  let arr = [];

  for (let i = 0; i < first.length; i += 1) {
    let item = first[i] + second[i];
    arr.push(item);
  }
  return arr;
}

// console.log(combineArrays([], []));
//  === [4, 8, 6]
// combineArrays([1], [6]) === [7]
// combineArrays([], [])

function splitString(str) {
  // write code here
  const isEven = str.length % 2;
  let newStr = str;
  let arr = [];
  let arrResult = [];

  if (isEven) {
    newStr = str + "_";
  }

  arr = newStr.split("");

  for (let i = 1; i < arr.length; i += 2) {
    let item = arr[i - 1] + arr[i];
    arrResult.push(item);
  }
  return arrResult;
}

// console.log( splitString('abcde'))

function scrollingText(word) {
  // write code here
  let wordUp = word.toUpperCase();
  let arr = [wordUp];
  let item = "";
  for (let i = 0; i < word.length - 1; i += 1) {
    let firstLeter = wordUp.charAt(0);

    item = wordUp.slice(1);
    item += firstLeter;

    arr.push(item);
    wordUp = item;
  }
  return arr;
}
// console.log( scrollingText('robot'))

function isSpecialNumber(n) {
  const wrongMessage = "NOT!!";
  const trueMessage = "Special!!";
  let resultMessage = "";
  let toStringNumber = n.toString();

  for (let i = 0; i <= toStringNumber.length; i += 1) {
    let item = toStringNumber[i];
    if (+item > 5) {
      resultMessage = wrongMessage;
      break;
    }
    resultMessage = trueMessage;
  }
  return resultMessage;
}

// console.log(isSpecialNumber(0))

function isTidy(number) {
  // write code here
  const numberStr = "" + number;
  for (let i = 0; i <= numberStr.length; i += 1) {
    if (+numberStr[i] > +numberStr[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(isTidy (567))

function isJumping(number) {
  // write code here
  let message;
  const numberStr = "" + number;
  if (number <= 9) {
    return "JUMPING";
  }

  for (let i = 0; i < numberStr.length - 1; i += 1) {
    let firstNumber = +numberStr[i];
    let secondNumber = +numberStr[i + 1];
    console.log(secondNumber == firstNumber + 1);
    if (secondNumber == firstNumber + 1 || secondNumber == firstNumber - 1) {
      message = "JUMPING";
    } else {
      message = "NOT JUMPING";
      break;
    }
  }

  return message;
}

// console.log(isJumping(12378))

function getSum(numbers) {
  // write code here
  return numbers.reduce((acc, currentItem) => acc + currentItem, 0);

}

// console.log(getSum([1.2, 2.8, 3]));

function getOddNumbers(numbers) {
  // write code here
  let oddNumbers = [];
  for (const number of numbers){
    if(number%2) {
      oddNumbers.push(number)
    }
  }
  return oddNumbers
}

// console.log(getOddNumbers([0, 2, 4, 1, 5]))



function getLastDigit(number) {
  // write code here
  return +number.toString().slice(-1);
}

// console.log(typeof (getLastDigit(-24.547)))


function getLastCharacter(input) {
  // write code here
  return input.slice(-1)
}

// console.log(getLastCharacter("inputter"))

function getUniqNames(names) {
  // write code here
return names.filter((item, index, array) => array.indexOf(item) === index)
}

// console.log(getUniqNames([
//   'Eileen',
//   'Peter',
//   'Jared',
//   'Robert',
//   'Robert',
//   'Robert',
//   'David',
// ]))


function removeLetter(word, letter) {
  // write code here
  const strArr = word.split("");
  const arrFiltred = strArr.filter(item => item !== letter);
  const resultStr = arrFiltred.join('');
  return resultStr
}

// console.log(removeLetter('rtdre', 'a'))

 
const reverseSeq = n => {
  let arr =[];
  
  for (let i = 0; n > i; i+=1 ){
      arr.push(n-i);
    }
  return arr;
};

// console.log (reverseSeq(9))

function fakeBin(x){
  let newArr =[]
const strArr = x.split('');
  for (let item of strArr){
    let binarElem = (item>5) ? 1 : 0
    newArr.push(binarElem)
  } 
  return newArr.join('')
}

// console.log(fakeBin('45385593107843568'))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const sum = classPoints.reduce( (acc, curentVal) => acc+curentVal, 0); 
  const sumAll = sum+yourPoints;
  const average = sumAll / (classPoints.length + 1);
  return (average < yourPoints)? "True" : "False";
}


// console.log(betterThanAverage([2, 3], 5))

function solution(a, b){
  // your code here
  // const firstStr = '';
  //   const secondStr = '';
  //   const thirdStr = '';

  if(a.length > b.length){
    //  firstStr = b;
    //  secondStr = a;
    //  thirdStr = b;
     return b+a+b
  }
    //  firstStr = a;
    //  secondStr = b;
    //  thirdStr = a;

return a+b+a
}

// console.log(solution('Soon', 'Me'))


    // (solution('13', '200')
    // (solution('Soon', 'Me')

    function mod(a,b){
      return Math.abs(a) 
  }

  // console.log(  mod(-49, 46))

  function squareOrSquareRoot(array) {
    
    return array.map(item => Number.isInteger(Math.sqrt(item) ) ? Math.sqrt(item) : Math.pow(item, 2));  
  }

  // console.log( squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))

function binaryStr(n){
  let arr = [];
  for( let i = 0; i < n; i+=1){
    
     arr.push((i%2) ? 0 : 1)
   
   
  }
  return arr.join('')
}

// console.log(binaryStr(6))

function capitalizeWord(word) {
  
 const newWord = word[0].toUpperCase()+ (word.slice(1));
  return newWord;
}

// console.log(capitalizeWord("word"))

function numberMultiplat(c,d) {
const arr = [];
for(let i=1; i <= d; i+=1){
 if(!(i%c)) {
  arr.push(i)
 }  
}


return arr
}

// console.log(numberMultiplat(2,6))

function arrClean(arr) {
  const newArr =[];
  for(let i=0; i< arr.length; i+=2 ){
   newArr.push(arr[i])
  }
  return newArr
}

// console.log(arrClean(["Keep", "Remove", "Keep", "Remove", "Keep"]))

function numberSorts(arr){
  const numMax = Math.max( ...arr );
  const numMin = Math.min( ...arr );
  const newArr = [];
  for (let i=numMin; i<=numMax; i+=1){
    newArr.push(i)
  }
  return newArr
}

// console.log(numberSorts([1,3,5,6,7,8]))

function psevdoArr(...theArgs){

  return theArgs.reduce((previous, current) => {
    return previous + current;
  },0)

}

// console.log(psevdoArr(1, 2, 3, 4))

function getAge(inputString){
  // return the girl's correct age as an integer. Happy coding :)
  console.log(inputString[0])
    return +(inputString[0])
  }

  // console.log(getAge("4 years old"))

  function solution(nums){
  //   let arr = [];  console.log(nums.length)
  //   if(nums.length && (nums[0]!== null) && (nums[0]!== 0) ){
    
  //     return nums.sort((a,b)=> a-b);
  //   }
  
  // return arr;
  // }
  // return (nums.includes(null) )? [] : nums.sort((a,b)=> a-b)
  return (nums.length == 0)? [] : nums.sort((a,b)=> a-b)
  
}
  // console.log(solution([1, 2, 10, 50, 5]))
  
  // console.log(sortNumbArr([1, 2, 10, 50, 5]))

  function unusedDigits(){
    const arr = Array.from(arguments)
 const arrStr = arr.filter(item => typeof(item) === 'number').join('');
  const arrNum = arrStr.split('');
//  console.log('arr num', arrNum);
 const arrComparison = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 let newArr = [];

 for (let i=0; i <= arrComparison.length; i+=1) {
  //  console.log('else>>>>', arrNum.indexOf(''+arrComparison[i]) === -1 )
  if (arrNum.indexOf(''+arrComparison[i]) === -1 && (typeof(arrComparison[i]) !== 'undefined') ) {

    newArr.push(arrComparison[i]);
    console.log(arrComparison[i])
  }
}
return newArr.sort().join('');
  }
  // console.log(unusedDigits(12, 34, 56, 78))

  function sumSymbolStr (str){
    const arrStr = str.split('');
     const resultArrNumber = [];
     const resultArrToUp = [];
     const resultArrToLower =[];
     const resultArrSymbol = [];
     
// console.log(arrStr)


  for(let i = 0; i<arrStr.length; i+=1){
      let item = +arrStr[i]
      if((0 <= item <= 9) && (!Number.isNaN(item)) ) {
        resultArrNumber?.push(item)
      }
      if((arrStr[i].toUpperCase() == arrStr[i]) && ( arrStr[i] !== arrStr[i].toLowerCase() )) {
        resultArrToUp.push(arrStr[i])
      }
      if((arrStr[i].toUpperCase() !== arrStr[i]) && ( arrStr[i] == arrStr[i].toLowerCase() )) {
      resultArrToLower.push(arrStr[i])
      }
    }
    const sumSymbol = ''
    const resultArr = [resultArrToUp.length, resultArrToLower.length ,resultArrNumber.length, (arrStr.length-(resultArrToUp.length + resultArrToLower.length + resultArrNumber.length)) ];


    // console.log(resultArrNumber)
    // console.log(resultArrToUp)
    // console.log(resultArrToLower)
    // console.log(resultArrSymbol)
    return resultArr
  }

  // console.log(sumSymbolStr ("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"))


  function arrArrSorts(arr){
    // let newWordArr = [];
    // let wordArr = [];
    // let arrWords = [];
    // let str ='';
    // for (let i = 0; i< arr[0].length; i+=1){

    //  wordArr = arr.map((itemArr) => itemArr[i]);
    //  newWordArr.push(wordArr)
     
    // }
    // for (let word of newWordArr) {
      
    //   let wordStr = word.join("")
    //   arrWords.push(wordStr)
    // }
    //   console.log(arrWords)
    //    str = arrWords.join(' ');
    //    console.log(str)
    //    return str
  }

  arrArrSorts([ 
    [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    [ '', 'o', '', '', 'e', '', '', 'l' ],
    [ '', 'c', '', '', 'r', '', '', '' ],
    [ '', 'h', '', '', 'h', '', '', '' ],
    [ '', 'o', '', '', 'o', '', '', '' ],
    [ '', 'n', '', '', 'u', '', '', '' ],
    [ '', 'd', '', '', 's', '', '', '' ],
    [ '', 'r', '', '', 'e', '', '', '' ],
    [ '', 'i', '', '', '', '', '', '' ],
    [ '', 'a', '', '', '', '', '', '' ] ])


    function findSum(){
      const arr = Array.from(arguments)
      const sumArgs = arr.reduce((acc,curent) => {
        if(arr.length === 0){
          return 0
        }
        if(curent < 0) {
          return -1
        }
        return acc + curent
      },0);
      return sumArgs;
    }

    // console.log(findSum())

    function isAllPossibilities(a){
      const nElement = a.length 
      let controlArr = [];
      for( let i=0; i<nElement; i+=1){
        controlArr.push(i);
        // console.log(a)
        // console.log(i)
        // console.log(a.includes(i))
       if (!a.includes(i) ) {
           return false
       }
      } 
      return true    
    }

    // console.log(isAllPossibilities([0,2,3,4]))




    function isAllLeters(a){
      const controlArr = [ 'a', 'e', 'o', 'i', 'u']
      let counter = 0;
      const arrStr = a.split('');
      for( let leter of controlArr){
       
        
        for(let item of arrStr ){
          if(leter === item){
            counter += 1;
          }
        }
         
      
      } 
      return counter    
    }

    // console.log(isAllLeters("jarer arer"))


    // function firstLetUp(str){
    //   const arr = str.split(' ');
    //  const newArr =  arr.map( item => {
    //   let firstLeter =  item.charAt(0);
    //   let firstLUp = firstLeter.toUpperCase();
      
    //   item = firstLUp + item.slice(1);
    //   // console.log(">>>>>firstLeter",item)
    //   return item});
       
    // //  console.log(newArr)
    //  return newArr.join(" ")
    // }

    // console.log(firstLetUp("How can mirrors be real if our eyes aren't real"))

    // String.prototype.toJadenCase = function () {
    //   const arr = this.split(' ');
    //      const newArr =  arr.map( item => {
    //       let firstLeter =  item.charAt(0);
    //       let firstLUp = firstLeter.toUpperCase();
    //       item = firstLUp + item.slice(1);
    //       return item});
    //      return newArr.join(" ")
    // };

    // console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

  function multiplFive(n){
    return Math.ceil(n/5)*5;
   }

  // console.log(multiplFive(3))

  function formRegistration(arrArr) {
    return arrArr.map(arr => {
      if ((arr[0]>= 55) && ((26 >= arr[1])&&(arr[1] >= 7))) {
        return "Senior"
      }
      return "Open"
    })
  }

  // console.log(formRegistration([[76,4],[14,9],[88,6],[82,7],[79,24],[61,7],[63,25],[46,18]]))

  function insert_dash(num) {
    const str = num+'';
    let arr = str.split('');

    const newArr = arr.map((item, i) => {
      if(((arr[0+i])%2 === 1)&&((arr[1+i])%2 === 1)){
            (arr[0+i]) += '-';
      }
    })
    console.log(newArr, "newArr")
   
    return arr.join('')
  }

  // console.log(insert_dash(454793))

  function dotCaculator(str) {
    const arr = str.split(" ");
    let newArr = [];
    if(arr[1] === '-') {
      const subtraction = (arr[0].length - arr[2].length);
      for(let i=1;i <= subtraction;i+=1){
        newArr.push('.')
      }
     return (subtraction > 0) ? newArr.join('') : ""
    }

    if(arr[1] === '+') {
      const addition = (arr[0].length + arr[2].length);
      for(let i=1;i <= addition;i+=1){
        newArr.push('.')
      }
     return (addition > 0) ? newArr.join('') : ""
    }

    if(arr[1] === '*') {
      const multiplication = (arr[0].length * arr[2].length);
      for(let i=1;i <= multiplication;i+=1){
        newArr.push('.')
      }
     return (multiplication > 0) ? newArr.join('') : ""
    }

    if(arr[1] === '%') {
      const integerDivision = (arr[0].length % arr[2].length);
      for(let i=1; i <= integerDivision; i+=1){
        newArr.push('.')
      }
     return (integerDivision > 0) ? newArr.join('') : ""
    }

  }

  // console.log(dotCaculator(".. % .."))


  function mxdiflg(a1, a2) {

    if(a1.length === 0 && a2.length === 0){
      return -1;
    }
    const getMax = (a, b) => Math.max(a, b.length);
    // console.log(a1.reduce( getMax,0))
    // console.log(a2.reduce(getMax, 0))

return a1.reduce( getMax,0) - a2.reduce(getMax, 0)

  }
// console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// , ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))

//   a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]



 function maskify(str) {
   const strArr = str.split('')
   const lastSymbol = strArr.splice(-4).join('')
  //  console.log(lastSymbol)
  //  console.log(strArr)
   const maskaStr = Array.from({length: strArr.length}, () => '#').join('')
  //  console.log(maskaStr)
 return (maskaStr + lastSymbol)  
    
 }

//  console.log(maskify(""))

function ifNarcys( num){
  const strNum = num+''
  const n = strNum.length
  let total = 0;
  for( let i=0; i< n; i+=1) {
    total += (strNum[i]**n)
   
  }
  return (total === num) ? 'true' : 'false';
}

// console.log(ifNarcys(1553))

function binarSum(first,second){
  return (first+second).toString(2)
}

// console.log(binarSum(5, 9))

function findCapital(str) {
  const arrStr = str.split('');
  const arr =[];
  for( let i = 0; i < arrStr.length; i+=1){
    
   if((arrStr[i] === arrStr[i].toUpperCase())) {
     arr.push(i);
    //  console.log(i)
   }
  }
  return arr
}

// console.log(findCapital('CodEWaRs'))

function multiplTen(n) {
  return Math.round(n/10)*10;
}

console.log(multiplTen(35))