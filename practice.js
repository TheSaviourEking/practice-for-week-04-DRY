function multiplyBiggerNumByTwo(num1, num2) {
  // let bigNum = findBigNum(num1, num2);
  let bigNum = compareNumbers(num1, num2, 'bigger');

  return bigNum * 2;
}


function divideBiggerNumByThree(num1, num2) {
  let bigNum = compareNumbers(num1, num2, 'bigger');

  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compareNumbers(sum1, sum2, 'bigger');

  return `I ate ${bigNum} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
  // let smallDog = findSmallNum(weight1, weight2);
  let smallDog = compareNumbers(weight1, weight2, 'smaller');
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

// First DRYed it to these 2 functions //

// function findBigNum(num1, num2) {
//   let bigNum = num1;
//   if (num2 > bigNum) {
//     bigNum = num2;
//   }

//   return bigNum;
// }

// function findSmallNum(num1, num2) {
//   let smallNum = num1;
//   if (num2 < smallNum) {
//     smallNum = num2;
//   }

//   return smallNum
// }

// Had to DRY it more since they look so similar
function compareNumbers(num1, num2, compareType) {
  if (compareType === 'bigger') {
    return num1 > num2 ? num1 : num2;
  } else if (compareType === 'smaller') {
    return num1 < num2 ? num1 : num2;
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
