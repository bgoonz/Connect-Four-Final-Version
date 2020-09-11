# Hints For Save Game State To Survive Page Refreshes

The hardest part about this is figuring out how to model the data to store. In
the past, you were able to just plop down whatever data you saved and go with
it. Now that you have proper objects with behavior (methods, that is, methods
and constructors), you should interact with the object through those
constructors and methods rather than trying to access data directly in it. That
breaks the Law of Demeter and leads to brittle serializers and deserializers.

Here are two ways that solve the problem of saving the game state.

## The algorithmic way
This way preserves the Law of Demeter.

The strategy for this is that you have to come up with a way to restore the
board using only the methods that allow someone to play the game. This means
that restoring the board should mimic what happens when players play the tokens.

For what it's worth, it doesn't have to be in _the exact order_ in which the
tokens were originally played. As long as the board state remains the same, then
you are ok. That's why you can use the following algorithm to generate a list of
column indexes that will restore the board based on the alternation of current
players found in the `Game` class.

* Create an array of seven fives called `currentIndexes`. These will be the
  tokens to inspect.
* Create an empty list (array) called `instructions` to hold the column indexes
  that you will serialize.
* Initialize the `valueToLookFor` variable to `1`
* Initialize the `columnIndex` loop at 0
  * Get the value out of `currentIndexes` and call it the `rowIndex`.
  * Get the token value for `rowIndex` of the column at `columnIndex`.
  * If the token value is the `valueToLookFor`:
    * Push the value of `columnIndex` onto the `instructions` array.
    * Change the `valueToLookFor` from `1` to `2`, or `2` to `1`.
    * Add one to the value in `currentIndexes` at `columnIndex`.
    * Set the `columnIndex` back to 0 and loop
  * Otherwise, increment the value of `columnIndex` and loop

Or...

## The brute force method
This way does not preserve the Law of Demeter, but is much easier to implement.

Create a method called `boardToArray` on the `Game` class. Use it to convert the
state of the columns into an array that contains seven arrays of six entries
each. Each entry in the outer array is a column.

```js
[
  [null, null, null, null, null, null], // Column 1
  [null, null, null, null, null, null], // Column 2
  [1,    1,    1,    null, null, null], // Column 3
  [2,    2,    2,    null, null, null], // Column 4
  [null, null, null, null, null, null], // Column 5
  [null, null, null, null, null, null], // Column 6
  [null, null, null, null, null, null], // Column 7
]
```

Create a method on the `Column` class called `restore`. Make is accept six
values to restore the contents of its state.

Create a method on `Game` called `arraysToBoard` which takes that kind of array
and restores each `Column` to its state by passing the corresponding array to
the `restore` method.

The reason this is the less favorable method is because you changed the code
classes to respond to serialization and deserialization, which breaks the Law of Demeter. Sometimes, for the sake of expedience, you must make this choice.
However, if you can avoid it, it is recommended that you should not make choices for expedience.
