# Swipe
JavaScript to detect touch swipe left,right, up or down on any touchscreen device.

##Installation

Using git:
````
git clone https://github.com/Heriberto-Juarez/swipe.git
````
Using npm

````
npm i herii-swipe
````


## How to use
Swipe is a class, so in order to use it we must create an instance of it:

````

let swipe = new Swipe();

````

To execute functions every time a swipe event is fired we need to call the 
*"onSwipe""* method which receives 2 arguments:
* Type
* callback function

The possible types are:
* right
* left
* up
* down

And the callback function is a function that contains the code you want to execute.

Example:

````

swipe.onSwipe("right", function () {
    console.log("This is the code that is executed every swipe to the right");
});

swipe.onSwipe("down", function () {
    console.log("This is the code that is executed every swipe to the bottom of the screen (down)");
});

````


## Target specific elements
By default `document` is the target that the event listener is attached to. We sometimes
want to execute code if the swipe was fired on a specific DOM element.

To target a specific element we need to pass a parameter to the Swipe class,
this parameter is an object containing `key:value` pairs.

The key in this case must be ``target`` and the value is some DOM object.

Example:

HMTL

````
<div id="gallery">
<div>
````

JS

````
let swipe = new Swipe({
    target: document.getElementById("gallery")
);
````


