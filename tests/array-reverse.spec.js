import { arrayReverse } from "../dist/array-reverse";
import assert from 'assert';

export default () => {

  const sourceError = /parameter should be an array/;
  assert.throws(() => {
    arrayReverse({prop: 'some test non valid data'})
  }, sourceError);

  const sourceArray0 = ['a', 'b', 'c', 'd', 'e'];
  const resultArray = ['e', 'd', 'c', 'b', 'a'];
  assert.deepEqual(arrayReverse(sourceArray0), resultArray, 'Should reverse elements order in array');

  const sourceArray1 = [1, 2, 3, 4, 5];
  assert(arrayReverse(sourceArray1), sourceArray1, 'Should return new array instead mutation source arrary');

};
