# Bonus: Save Game State To Survive Page Refreshes

To do this, you need a way to save the state of a `Game` into local storage and,
then, a way to get it out. Sounds like a job for a `GameJsonSerializer` class
and a `GameJsonDeserializer` class!

You may need to change the `Game` class to serialize and deserialize with
respect to the instructions below. Feel free to do that! This is your code,
after all.

## The serializer

In this case, you want to turn the game into a a JSON string that you can use
to save into local storage. To do that, create and export a `GameJsonSerializer`
class. Have its constructor take a `Game` object. Here's the hard part: you have
to get the data out and store it in a way that you can put it back into a `Game`
object using only the methods and properties available to you, namely:

* `getTokenAt(rowIndex, columnIndex)`
* `player1Name`
* `player2Name`
* `playInColumn(columnIndex)`

The serializer should not mess around with the `columns` array because those are
`Column` objects in there and, by the Law of Demeter, the serializer should only
talk directly to the `Game` object.

Once you figure out how to organize your data, create a `serialize` method on
the `GameJsonSerializer`, have it build the data, `JSON.stringify` it, and
return that string.

## The deserializer

In this case, you have the JSON string, and you want to create a `Game` object
from it. To do this, you should declare and export a class named
`GameJsonDeserializer` which has a constructor that accepts the JSON string. It
should have a `deserialize` method that calls `JSON.parse` on the JSON string.
Then, it should create a new instance of the `Game` class and pass in the
save player names to the constructor. Then, using the `playInColumn` method, you
need to restore the state of the board. Once you've done that, return that
configured `Game` object.

## Hooking them up

Now that you have those, in your **connect-four.js**, you should use the
`GameJsonSerializer` at the end of the handler for the click targets. Create a
new serializer by passing in the `Game` object into its constructor, call
serialize on it, and save the returned string into local storage.

You should use the `GameJsonDeserializer` as the last line of the
"DOMContentLoaded" handler. It should read a value from local storage and, if
that value's not `null`, then create an instance of the deserializer and pass
the string into its constructor. Call the `deserialize` method and set the
global `game` variable to the return value. Then, call `updateUI` because you
now have a game!
