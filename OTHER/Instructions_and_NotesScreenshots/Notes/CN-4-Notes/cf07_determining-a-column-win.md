# Determine A Win, Part One, The Columns

![tie game announces tie below board](https://assets.aaonline.io/Module-JavaScript/oop/oop-connect-four-end-of-step-7.gif)

Now that you are checking for a tie, you should now start checking for wins to
complete this game. The first step will be to check the columns to see if there
are four in a row in any of the columns.

Your first instinct may be to say to yourself, "Self, I have this nifty Column
class. How about if I put a 'check for a winner' method on there?" That's a good
first thought! Try applying the SRP to determine if it's a good place to do it!

The purpose of the `Column` class is to manage the placement of tokens in the
column. Everything it does is about managing the state of the board. Managing
the state of the board and checking for a win in the column are _two different
kinds of behavior_. So, even though it makes sense at first to put that behavior
on the `Column` class, a mindful application of the Single-Responsibility
Principle warns you away from it.

Now, that you've talked yourself out of putting it on the `Column` class, you
say to yourself, "Self, maybe I should put it on the 'Game' class." You look
at the `Game` class and think that you're going to end up putting a lot of
looping and stuff right there in the `Game` class which muddies up the reason
for the `Game` class to exist: managing the state of the game and using helper
classes (like `Column`) to help it.

"Hey," you excitedly reason with yourself. "Hey! Helper classes! I can just
create another helper class to help me check whether or not a column has a
winner in it! I'll call it the 'ColumnWinInspector'!" (Yes, naming things is
one of the hardest things in computer programming.)

## A new class

Create a new file named **column-win-inspector.js**. In it, create and export a
class named `ColumnWinInspector`. Now, for this inspector to exist, it needs a
column on which to perform its inspection. So, create a constructor that accepts
a `Column` object.

Create a method named `inspect` that takes no parameters. In that method, have
it check to see if the column has four contiguous tokens of the same player. If
they do, return that player's number. Otherwise, return `0`.

## Check for a column win

In the **game.js** file, import the `ColumnWinInspector` class so that you can
use it.

Create a new method in the `Game` class called `checkForColumnWin`. Call it
after you call the `checkForTie` method in the `playInColumn` method. As a first
step, if the value of `winnerNumber` is already non-zero, skip the method.
There's already a winner, in this case; there's no need to go on checking. In
the `checkForColumnWin`, loop over every column in the `columns` array. For each
column, create a new instance of the `ColumnWinInspector` class handing it the
`column` that you're currently inspecting. Call the `inspect` method on the
inspector object. If it returns `1` or `2`, then there's a winner. Set the value
of `winnerNumber` to the value and stop inspecting.

It's is _totally_ ok to create an instance of an object and use it in just a
method. There are programmers out there that detest creating objects just for
the lifetime of a method. That's left over from old languages where memory
management is at a premium, and programmers had to do it all by hand. In modern
computers, you are blessed with significant memory. Feel free to `new` up
objects for use in a method. The JavaScript runtime will manage that memory for
you.

## Update the name of the game

In the `getName` method, if the `winnerNumber` is `1`, return the message
"«Player one name» wins!". If the `winnerNumber` is `2`, return the message
"«Player two name» wins!". Otherwise, just return the "tie" message or the "vs"
message like before.

## Make it so the columns are "full"

If there is a winner, it's as if all of the columns are full. In the
`isColumnFull` method, check to see if `winnerNumber` is `1` or `2`. If so, just
return `true`. (You don't have to check if there is a tie, that is, if
`winnerNumber` is `3`. Why is that?)
