# Hints For Determine A Win, Part Two, The Rows

When you need to "slice" the `columns` array, you may want to use the
["slice" method] available on arrays.

Since you're only checking four values, don't get loop fancy, if you don't want
to. Use the following pseudo-code to guide your implementation.

```js
inspect() {
  // Loop over each of the row indexes from 0 to 5, inclusive
  // For each row index:
  //   in a local variable, store the value of columns[0].getTokenAt(row index)
  //   in a local variable, store the value of columns[1].getTokenAt(row index)
  //   in a local variable, store the value of columns[2].getTokenAt(row index)
  //   in a local variable, store the value of columns[3].getTokenAt(row index)
  //   if all of the values equal one another and the values are not null or undefined
  //     return that value
  //
  // If none of them match, then return 0
}
```

["slice" method]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
