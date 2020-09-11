# Hints For Determining A Tie

To determine if all of the columns are full, consider using the ["every" method]
on your array of `Column` objects. The method will test every element in the
array against a callback function that you provide and return `true` if _all_
elements pass the test function. Otherwise, it will return false. You will just
test `isFull()` on every column.

["every" method]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
