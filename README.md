# filter-xtend

[![locked](http://badges.github.io/stability-badges/dist/locked.svg)](http://github.com/badges/stability-badges)

Extend like a boss, *with filters*

[xtend][xtend] is a basic utility library by [Raynos][raynos] which allows you to extend an object by appending all of the properties from each object in a list. When there are identical properties, the right-most property takes precedence.

**But, this is xtend with filters!** Filter-xtend provides the same classic functionality with the ability to filter the individual keys. 

## Examples

```js
var extend = require("filter-xtend")

// extend returns a new object. Does not mutate arguments
var combination = extend({
    a: "a",
    b: "c",
    c: "nope"
}, {
    b: "b"
}, (target, source, key, index) => {return key !== "c"})
// { a: "a", b: "b" }
```

## Stability status: Locked

## MIT Licenced
[xtend]: https://github.com/Raynos/xtend
[Raynos]: https://github.com/Raynos