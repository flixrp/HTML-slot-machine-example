# HTML Slot machine skeleton example

![GitHub](https://img.shields.io/github/license/flixrp/HTML-slot-machine-example)

A self-styled slot machine layout made with vanilla Javascript and HTML/CSS.
It's a lightweight example of how you can do a slot machine.

This was a prototype for an in-game FiveM casino that was never completed.

**It's designed to be able to calculate the result on the server** and just "Show" the result for the user.
This approach is the only way to prevent cheating! But you have to make some changes on your own. Currently, the result is randomized in Javascript inside the [`setResult()`](https://github.com/flixrp/HTML-slot-machine-example/blob/main/script.js#L79-L96) function.

Credit to piJoe's [Codepen](https://codepen.io/piJoe/pen/BLwRza) for inspiration.

## Preview

[![preview.png](https://github.com/flixrp/HTML-slot-machine-example/assets/44061123/0cc0d810-d1d0-413c-8c38-2e036ed1a8d0)](https://user-images.githubusercontent.com/44061123/224442965-085b31c4-513e-4480-a1ea-c36dbac3561a.mp4)

## The concept behind it

The slot machine has around 40 spinning items that move down through a CSS animation.
Once the reels start spinning, the first and last three items are set to the generated combination (currently client-side).
The user will see the reels stop at the generated combination. Surprise!

## Show your kindness

Be sure to leave a ⭐️ if you like the project :) Thank you! Contribute, if you're interested!
