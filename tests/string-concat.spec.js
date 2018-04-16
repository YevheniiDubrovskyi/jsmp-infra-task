import { stringConcat } from "../dist/string-concat";
import assert from 'assert';

export default () => {

  const sourceError = /parameter should be a string/;
  assert.throws(() => {
    stringConcat({ string: null });
  }, sourceError);

  const resultString0 = 'Hello, world!';
  const options0 = {
    prefixes: ['Hello, '],
    string: 'world',
    suffixes: ['!'],
  };
  assert(stringConcat(options0), resultString0, 'Should add prefix and suffixes');

  const resultString1 = 'Hola amigo';
  const options1 = {
    prefixes: ['Hola', ' ', 'amigo'],
    string: '',
  };
  assert(stringConcat(options1), resultString1, 'Should add only prefixes')

};
