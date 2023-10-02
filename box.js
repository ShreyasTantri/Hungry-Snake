////Snake game
//
////Game Loop - Init,Draw,Update,
////The game loop is He used to loop the two functions, draw and update.
////Now in "draw() and update() ----> gameLoop()" are not called again and again.To call these again and again, there is something called "set interval" in javascript.
//
//function init(){
//    //    console.log("Init");
//    canvas = document.getElementById("mycanvas");    //Fetching the canvas from the html to javascript.
//    pen = canvas.getContext('2d');                   //Every drawing board comes with a pen.So we are using a?method called "canvas.getContext('2D')" To basically draw a 2D image on the screen using a pen.
//    W = canvas.width;                                //To view the width and height of the canvas.
//    H = canvas.height;
//
//    box = {
//        x:10,
//        y:20,
//        w:20,
//        h:20,
//        speed:5,
//    };
//}
//
//function draw(){
//    console.log("Draw");
//    pen.clearRect(0, 0, W, H);                              // Clear the canvas.This is used to clear the rectangle.Because each time you move that box to the next position, then the previous position should be cleared....
//    pen.fillStyle = "green";                                // pen.fillStyle = "String"; . String--->property . Set the fill color
//    pen.fillRect(box.x,box.y,box.w,box.h);         //fillRect() method provided by the 2D drawing context in the HTML5 Canvas API. This method is used to draw a filled rectangle on the canvas. fillRect(x, y, width, height);
//}
//
//function update(){
//    console.log("Update");
//    //box.x+=10;
//    box.x+=box.speed;
//
//    if(box.x>=W){
//        box.speed = box.speed * -1;     //If the box.x Value is more than the width of the canvas. Then it will get reversed.
//
//    }
//}
//
//function gameLoop(){
//    draw();
//    update();
//}
//
//init();
////Call Game Looper after t time.This will initiate your game..
//setInterval(gameLoop,100);      //So this makes the draw and update to be displayed in console infinitely..