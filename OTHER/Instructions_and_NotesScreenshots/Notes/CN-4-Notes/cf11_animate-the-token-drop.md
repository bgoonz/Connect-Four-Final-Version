# Bonus Goal: Animate Your Token Drop

Right now, when a player clicks above the column, it just shows up at the
appropriate place in the board. It's up to you to now animate that so that it
moves from above the board down to its final resting place in the column. While
the token is animating its fall, the game should _not_ process any clicks.

You can do this a few different ways. Here are some hints that you can use
exclusively or in combination with one another.

* You can try to use [CSS transitions] to have the CSS "move" the token for you.
* You can try using a third-party library like [tween] to "more" the token for
  you.
* You can use [CSS positioning] and write a JavaScript `setInterval` to "move"
  the token yourself.

[CSS transitions]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
[tween]: https://github.com/tweenjs/tween.js/
[CSS positioning]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
