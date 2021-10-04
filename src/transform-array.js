import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let new_arr = [];
  for (let biba = 0, boba = 0; biba < arr.length; biba++, boba++) {
    if (arr[biba] == '--discard-next') {
      biba += 2;
      new_arr[boba] = arr[biba];
    } else
    if (arr[biba] == '--discard-prev') {
      biba++;
      boba--;
      new_arr[boba] = arr[biba];
    } else
    if (arr[biba] == '--double-next') {
      new_arr[boba] = arr[biba + 1];
    } else
    if (arr[biba] == '--discard-next') {
      new_arr[boba] = arr[biba - 1];
    } else {
      new_arr[boba] = arr[biba];
    }
    
  }
  return new_arr;
}
