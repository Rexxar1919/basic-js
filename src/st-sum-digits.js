import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let arr = n.toString(), sum = 0;
  
  //   for (let biba = 0; biba < arr.length; biba++) {
  //     sum += parseInt(arr.charAt(biba), 10);
  //   }
  //   let arr2 = sum.toString();
  //   if (arr2.length > 2) {
  //     getSumOfDigits( sum );
  //   } else {
  //     return sum;
  //   }
  let sum = Array.from(n.toString()).map(Number).reduce((res, val) => res + val, 0);
  return sum < 10 ? sum : getSumOfDigits(sum);
}
