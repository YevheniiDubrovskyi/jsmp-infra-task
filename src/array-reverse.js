import { slice, reverse } from 'lodash';

export function arrayReverse(arr = []) {
  if (!(arr instanceof Array)) throw new TypeError('arrayReverse: parameter should be an array');

  return reverse(slice(arr));
};
