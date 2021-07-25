function getCrossing(n) {
  let a1 = 1;
  let a2 = 25;
  let b1 = 1;
  let list = [];

  for (let i = a1; i <= a2; i++) {
    for (let j = b1; j <= n; j++) {
      if (i === j) {
        list.push(i);
      }
    }
  }

  return list;
}

function getQuantity(n) {
  let count = 0;
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (i % 5 === 0 && !(i % 7 === 0)) {
      count = count + 1;
      sum = sum + i;
    }
  }

  return [count, sum];
}

function checkPalindrome(n) {
  function isPalindrome(number) {
    let reverse = Number(number.toString().split('').reverse().join(''));
    let square = number * number;
    let squareReverse = Number(square.toString().split('').reverse().join(''));
    return (number === reverse && square === squareReverse);
  }

  let all = [];

  for (let i = 1; i < n; i++) {
    if (isPalindrome(i)) {
      all.push(i);
    }
  }

  return all;
}

module.exports = {
  checkPalindrome,
  getQuantity,
  getCrossing
};