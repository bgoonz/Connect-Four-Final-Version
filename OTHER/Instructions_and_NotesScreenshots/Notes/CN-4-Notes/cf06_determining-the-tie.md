# Determine The Tie

![tie game announces tie below board](https://assets.aaonline.io/Module-JavaScript/oop/oop-connect-four-end-of-step-6.gif)

In this case, you will just need to check if all of the columns are full. You
already have the `isFull` method on each `Column` object, it should be a snap to
get a tie determined.

In terms of responsibility, it seems like the `Game` should know whether or not
the game is in a tie. So, you'll put this behavior in the `Game` class.

This seems like a new instance variable to carry whether the game is over.
Declare an instance variable in the constructor named `winnerNumber`. You'll set
that to `1` if Player One wins, `2` if Player Two wins, and `3` if both win
(that is, it is a tie). Set `winnerNumber` in the constructor equal to `0` to
indicate that no one has won.

You need to check for a tie after every play. You have a method named
`playInColumn` in the `Game` class, so this seems like a nice place to check for
a tie. Rather than putting all of the code in the `playInColumn` method, call
a new method named `checkForTie` at the end of the `playInColumn` method.

Now, declare the `checkForTie` method. In there, check to see if every column is
full. If so, set the instance variable `winnerNumber` to `3`.

In the `getName` method, check to see if the instance variable `winnerNumber`
has the value of `3`. If it does, have it return the message "«Player one name»
ties with «Player two name»!" Otherwise, just let it return the "vs" message it
already returns.
