var background = function (window) {
    'use strict';

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function (app, ground) {
        /* Error Checking - DO NOT DELETE */
        if (!app) {
            throw new Error("Invalid app argument");
        }
        if (!ground || typeof (ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;

        // container which will be returned
        var background;

        // ANIMATION VARIABLES HERE:
        var tree

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight = groundY, 'black');
            background.addChild(backgroundFill);
            // TODO: 3 - Add a moon and starfield
            var moon = draw.bitmap("https://www.publicdomainpictures.net/pictures/400000/nahled/vollmond-mond-png-clipart.png");
            moon.x = 900;
            moon.y = -150;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            background.addChild(moon);

            for (var i = 0; i < 150; i++) {
                var circle = draw.circle(10, "white", "LightGray", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }

            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?


            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5653372f-c704-4218-b683-1c0147c9040e/dfpeqsm-bdcd9428-5503-4bfd-9c41-bba2dfcf079d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2NTMzNzJmLWM3MDQtNDIxOC1iNjgzLTFjMDE0N2M5MDQwZVwvZGZwZXFzbS1iZGNkOTQyOC01NTAzLTRiZmQtOWM0MS1iYmEyZGZjZjA3OWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yFX7l4QbQOHfdEqkz6XO9LzQi0Qu4Nw-oXiAl5d1hbg");
            tree.x = 100;
            tree.y = 100;
            background.addChild(tree);


        } // end of render function - DO NOT DELETE


        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            // TODO 4: Part 2 - Move the tree!
            

            // TODO 5: Part 2 - Parallax


        } // end of update function - DO NOT DELETE



        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;

        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);

        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
