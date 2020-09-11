# Determine A Win, Part Two, The Rows

![tie game announces tie below board](https://assets.aaonline.io/Module-JavaScript/oop/oop-connect-four-end-of-step-8.gif)

This is going to be something similar to what you did for the columns. But,
obviously, it's for the rows.

In this case, you want to check for the existence of four in a row across the
rows four columns at a time. Here's an animation to show you what that means.
Choose four contiguous columns and check each row to see if the entries in the
row are the same as one another.

![row checking strategy animation](https://assets.aaonline.io/Module-JavaScript/oop/oop-connect-four-show-row-selection-strategy.gif)

Here are the steps.

For the new class:

* Create a file named **row-win-inspector.js**.
* Create and export a class named `RowWinInspector`.
* Declare the constructor to have a `columns` parameter that should contain
  four column objects. Save them in an instance variable.
* Create an `inspect` method (with no parameters) that loops through the six
  rows and checks the token at each row in each of the columns. If any of the
  rows have identical entries in all four areas, then return the value of that
  winner's number. Otherwise, if there is no winner, return `0`.

In `Game` class:

* At the end of the `playInColumn` method, call a new method, this time named
  `checkForRowWin`.
* Create the `checkForRowWin` method in the `Game` class.
* If the value of `winnerNumber` is already non-zero, skip the method.
* Slice the `columns` array with groups of columns 0 - 3, 1 - 4, 2 - 5, and 3 -
  6.
* For each of those slices, create a new instance of the `RowWinInspector`
  class.
* Call the `RowWinInspector` class' `inspect` method. If the return value is
  greater than `0`, then set the winner number and break.
