import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dArr = [], dStr = '';

  if (Array.isArray(members) && members.length > 0) {
    for (let biba of members) {
      if (typeof(biba) == 'string' && typeof(biba.trim()[0]) === 'string') {
        dArr.push(biba.trim()[0].toUpperCase());
      }
    }
    dStr = dArr.sort().join('');
    return (dStr.length > 0) ? dStr : false;
  } else {
    return false;
  }
}
