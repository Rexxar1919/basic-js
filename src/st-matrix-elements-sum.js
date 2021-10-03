import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let k = 0, sum = 0;
  for (let biba = 0; biba < matrix.length; biba++) {
    for (let boba = k; boba < matrix[biba].length; boba++) {
      if (matrix[biba][boba] == 0) {
        k = boba + 1;
      }
      else {
        sum += matrix[biba][boba];
      }
    }
  }
  return sum;
}
