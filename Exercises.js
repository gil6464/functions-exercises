//Question 1
function myReverse(str) {
  // your code here
  let string = str.split("");
  string.reverse();

  let fixString = string.join("");
  return fixString;
};

//Question 2
function allCombinations(str) {
  // your code here
  let combinations = [];

  for(i = 0; i < str.length; i++) {
    for(j = i + 1 ; j < str.length+1; j++) {
      combinations.push(str.slice(i, j));
    }
};
      return combinations;
};
//

//Question 3
function allCaps(str) {
  // your code here
    const myArr = str.split(' ');
    const capsLetters = [];

    for(i=0; i < myArr.length; i++) {
      capsLetters.push(myArr[i].charAt(0).toUpperCase()
      +myArr[i].slice(1));
    } ;
      return capsLetters.join(' ');
};

//Question 4
function myPower(x, n) {
  // your code here
  if (n === 0) {
    return 1;
  } else {
  for (i = 1; i < n; i++) {
    x *= x;
  };
   return x;
 }
};


//Question 5
function getFirstNotRepeating(str) {
  // your code here
  for (let i = 0; i < str.length; i++) {
       let char = str[i];
    
    if (str.indexOf(char) === i && 
    str.indexOf(char, i + 1) === -1) {
      return char;
    };
  };
};

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  let counter = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0){
      counter += i;
    }
  };
    if (counter === num){
      return true;
    } else {
      return false;
    }
  return "I'm interested in the bonus question :)";
};

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
