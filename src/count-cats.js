import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return matrix.reduce((sum, current) => {
  //   if (current.length > 1) {
  //     sum += current.reduce((sum2, current2) => {
  //       if (current2 == '^^') {
  //         sum2++;
  //       }
  //     }, 0);
  //   } else {
      
  //   }
    
  // }, 0);
  let sum = 0;
  for (let biba = 0; biba < matrix.length; biba++) {
    for (let boba = 0; boba < matrix[biba].length; boba++) {
      if (matrix[biba][boba] == '^^') {
        sum++;
      }
    }
  }
  return sum;
}
