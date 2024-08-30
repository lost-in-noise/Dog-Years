const myAge = 22;
// your age
let earlyYears = 2;
// the value will change
earlyYears *= 10.5;
// accounted for the first two years
let laterYears = myAge - 2;
// accounted later years
laterYears *= 4;
// calculate the number of dog years accounted for by your later years
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears + laterYears;
// calculate my age in dog years
let myName = "Nancy".toLowerCase();
// store my name as a string
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
// displays your name and age in dog years
