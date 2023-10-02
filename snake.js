//Snake game--------> DO THESE---> {[1] Add boundary condition for this project.[2] Add scoring.}
//HW----> 1.Read about the HTML local storage API. 2.If the snake is itself, you will call the alert dialouge box calling game over..

//Game Loop - Init,Draw,Update,
//The game loop is He used to loop the two functions, draw and update.
//Now in "draw() and update() ----> gameLoop()" are not called again and again.To call these again and again, there is something called "set interval" in javascript.

function init(){
    //    console.log("Init");
    canvas = document.getElementById("mycanvas");    //Fetching the canvas from the html to javascript.
    pen = canvas.getContext('2d');                   //Every drawing board comes with a pen.So we are using a?method called "canvas.getContext('2D')" To basically draw a 2D image on the screen using a pen.
    W = canvas.width;                                //To view the width and height of the canvas.
    H = canvas.height;
    game_over=false;

    //Create an object for food.
    food = getRandomFood();
    score=0;

    snake = {
        init_length:5,
        color:"white",
        cells:[],                                       //Let's think that the snake is made up of cells...So each cell is an object in itself.
        direction:"right",                              //Let it have an initial direction rightt
        
        createSnake:function(){                          //This message is used to insert something into the cells.
             for(var i=this.init_length-1;i>=0;i--){
                this.cells.push({x:i,y:0});
             }
        },

        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillStyle = this.color;                                        //The pens color will be set to the color of the snake using this.color
                pen.strokeStyle = "green";                                                      //Gives outline
                pen.lineWidth = 5;                                                 //The strokes intensity or Thickness changed (increased/decreased).   
                pen.strokeRect(this.cells[i].x * 10,this.cells[i].y * 10,10,10);    //this.cells[i].x Will make only small fill area of rectangle, but I want it.but I want it to be big, so I multiply by 20.
                pen.fillRect(this.cells[i].x * 10,this.cells[i].y * 10,10,10);
            }
        },
        updateSnake:function(){
            //Array goes like this----->(4,0) , (3,0) , (2,0) , (1,0) , (0,0).So (4,0) is the head of the array.

            var headX = this.cells[0].x;                      //So basically, these are the (x,y) values of the head of the array
            var headY = this.cells[0].y; 

            //Assuming snake is moving right.
            //Insertion at head.Basically using unshift.
            //var nextX, nextY;
            //nextHeadX = headX + 1;                           //So the space for an extra cell to be added to the left of the header cell will be created.
            //this.cells.pop();                               //Now, after adding an extra cell, we have to pop the rightmost cell using pop operation.
            //this.cells.unshift({x:nextHeadX,y:headY});      //This is only for moving right, but if I want for every direction then we'll do it as done below. 

            if(headX==food.x && headY==food.y){
                food = getRandomFood();                        //Food is a new object so Food will be Drawn on new place.
                score++;
            }
            else{
                this.cells.pop();                             //Pop the last cell if the food is not eaten.If food is eaten then no need to pop.
            }

            if(this.direction=="right"){
                nextX = headX + 1;
                nextY = headY;  
            }
            else if(this.direction=="left"){
                nextX = headX - 1;
                nextY = headY;
            }
            else if(this.direction=="down"){
                nextX = headX;
                nextY = headY + 1;
            }
            else {
                nextX = headX;
                nextY = headY - 1;
            }
            //Insert the new cell at head or front
            this.cells.unshift({x:nextX,y:nextY});

            //Find the last coordinate (boundary) the snake can Pass
            var last_x = Math.round(W / 10);
            var last_y = Math.round(H / 10);

            if(this.cells[0].y<0 || this.cells[0].x<0 || this.cells[0].x>last_x || this.cells[0].y>last_y){
                alert("Game Over");
                game_over=true;
            }
        }
};            
    snake.createSnake();      
    //snake.updateSnake();                                    //Function call to create and update snake. 

    //Add event listeners to our game.
    //Listen for keyboard events. 

    function keyPressed(e){
                                                             //When mesmerizing thing is that you can create function inside a function in Java script. It is allowed.
        console.log("You pressed a key");
        console.log(e);   

        if(e.key=="ArrowRight")
            snake.direction="right";
        else if(e.key=="ArrowLeft")
            snake.direction="left";
        else if(e.key=="ArrowDown")
            snake.direction="down";
        else 
            snake.direction="up";
    }

    document.addEventListener('keydown',keyPressed);                            
    //Since we are listening the event in the for the whole document, sowe are adding document.()...                                                         
    //element.addEventListener('keydown', function(event) {                                                                       
    // Handle the keydown event                                                                   
    // You can access the pressed key using event.key
}


function draw(){                                             
    pen.clearRect(0, 0, W, H);                              // Clear the canvas.This is used to clear the rectangle.Because each time you move that box to the next position, then the previous position should be cleared....
    snake.drawSnake();                                      //Note : we have not made the drawing in draw function. We have only called the function for a draw and a drawing is done in the snake object.
    //Let us draw the food. 
    //pen.fillStyle = "white";
    pen.fillStyle = food.color;
    pen.fillRect(food.x*10,food.y*10,10,10);

    pen.fillStyle = "white";
    pen.font="10px Gotham Bold";
    pen.fillText("Score : " + score,10,10);                   //context.fillText(text, x, y, maxWidth);
}

function update(){
    //console.log("Update");
    snake.updateSnake();
    }

function gameLoop(){
    draw();
    update();
    if(game_over==true){
        clearInterval(f);                                    //When the game is over, you give the reference of the set interval in the clear interval.
    }
}

function getRandomFood(){
    foodX=Math.round(Math.random()*(W-10)/10);
    foodY=Math.round(Math.random()*(H-10)/10);

    foodColors = ["red","green","blue","aqua","orchid","coral"];
    var i= Math.round(Math.random()*foodColors.length);

    var food = {
        x:foodX,
        y:foodY,
        color:foodColors[i]
    };
    return food;

}

init();
//Call Game Looper after t time.This will initiate your game..
var f = setInterval(gameLoop,100);      //So this makes the draw and update to be displayed in console infinitely..