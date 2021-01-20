//Question 1
function myReverse(str) {
  // your code here
  let string = str.split("");
  string.reverse();
  let fixString = string.join("");
  return fixString;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here

  //
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
    const myArr = str.split(' ');
    const capsLetters = [];
    for(i=0; i < myArr.length; i++) {
      capsLetters.push(myArr[i].charAt(0).toUpperCase()
      +myArr[i].slice(1));
    } 
  return capsLetters.join(' ');
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  const array =str.split('');
  array.sort();
  console.log(array);
  let answar =[];
  for (i=0; i<array.length; i++){
    if (array[i] !== array[i+1] &&
     array[i] !== array[i-1] &&
      answar.length === 0){
      answar.push(array[i])
    }
  }
  return answar;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***//
console.log()
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
