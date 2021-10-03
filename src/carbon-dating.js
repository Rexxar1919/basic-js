import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample( sampleActivity ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (sampleActivity == Number(sampleActivity) && sampleActivity > 0 && typeof sampleActivity === 'string') {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let a = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k;
    return (Math.ceil(a) > 0) ? Math.ceil(a) : false;
  } else {
    return false;
  }
  
}
