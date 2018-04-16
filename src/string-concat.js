export function stringConcat({ prefixes = [], string = '', suffixes = [] }) {
  if (typeof string !== 'string') throw new TypeError('stringConcat: parameter should be a string');

  return `${ prefixes.join('') }${ string }${ suffixes.join('') }`;
};
