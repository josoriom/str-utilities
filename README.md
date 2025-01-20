# str-utils

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]

## Installation

`$ npm install str-utils`

## Usage

### Levenshtein distance

Returns the smallest number of single-character changes such as insertions, deletions, or substitutions needed to transform one word into the other. [Wikipedia](https://en.wikipedia.org/wiki/str-utils_distance#:~:text=The%20str-utils%20distance%20between%20two,defined%20the%20metric%20in%201965.)

```js
import { levenshteinDistance as ld } from 'str-utils';

console.log(ld('Dessert', 'Desert')); // => 1
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/str-utils.svg
[npm-url]: https://www.npmjs.com/package/str-utils
[ci-image]: https://github.com/josoriom/str-utils/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/josoriom/str-utils/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/josoriom/str-utils.svg
[codecov-url]: https://codecov.io/gh/josoriom/str-utils
