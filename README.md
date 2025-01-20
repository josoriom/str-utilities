# str-utilities

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]

## Installation

`$ npm install str-utilities`

## Usage

### Levenshtein distance

Returns the smallest number of single-character changes such as insertions, deletions, or substitutions needed to transform one word into the other. [Wikipedia](https://en.wikipedia.org/wiki/str-utilities_distance#:~:text=The%20str-utilities%20distance%20between%20two,defined%20the%20metric%20in%201965.)

```js
import { levenshteinDistance as ld } from 'str-utilities';

console.log(ld('Dessert', 'Desert')); // => 1
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/str-utilities.svg
[npm-url]: https://www.npmjs.com/package/str-utilities
[ci-image]: https://github.com/josoriom/str-utilities/actions/workflows/nodejs.yml/badge.svg?branch=main
[ci-url]: https://github.com/josoriom/str-utilities/actions/workflows/nodejs.yml?branch=main
[codecov-image]: https://img.shields.io/codecov/c/github/josoriom/str-utilities.svg
[codecov-url]: https://codecov.io/gh/josoriom/str-utilities
