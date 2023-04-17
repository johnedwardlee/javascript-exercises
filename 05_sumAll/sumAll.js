const sumAll = function (num1, num2) {
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  )
    return 'ERROR';
  let sum = 0;
  let high = num2;
  let low = num1;
  if (low > high) {
    let temp = low;
    low = high;
    high = temp;
  }
  for (let i = low; i <= high; ++i) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
