# Test package for educational program

This package was created for publishing test package and for getting familiar with publishing flow.
__This package is absolutely useless!__

## Package

### arrayReverse

Reverses array.
#### Parameters:
1. arr: `Array<any>`
#### Output:
1. reversedArray: `Array<any>`
#### Usage example:
```js
import { arrayReverse } from 'jsmp-infra-test-package';

const reversedArray = arrayReverse(sourceArray);
```

### stringConcat

Concat all provided prefixes and suffixes to according positions.
#### Parameters:
1. options: `StringConcatOptions`
```typescript
interface StringConcatOptions {
  prefixes?: Array<string>;
  string: string;
  suffixes?: Array<string>;
}
```
#### Output:
1. concatedString: `string`
#### Usage examples:
```js
import { stringConcat } from 'jsmp-infra-test-package';

const concatedString = stringConcat({
  string: sourceString,
  prefixes: ['Hola Amigo, '],
});
```
