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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = n.toString(10).replace(/\D/g, '0').split('').map(Number), sum = 0;
  if (arr.length > 1) {
    for (let biba = 0; biba < arr.length; biba++) {
      sum += arr[biba];
    }
    getSumOfDigits( sum );
  } else {
    if (sum == 0) {
      return n;
    }
    return sum;
  }
}
