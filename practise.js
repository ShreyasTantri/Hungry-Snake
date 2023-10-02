//// if(1>0)
//// console.log("ENJOY");
//// else
//// console.log("Don't enjoy");
//
////**************************************************************************************************************
//
////Defining an event listener
//
////You basically need to fetch the div from Html Element by using document.getElementById
//
//myDiv = document.getElementById(mydiv);  //This basically brings my div to the javascript 
//console.log(myDiv);
//
//function mousePressed(someInfo){
//    console.log("You pressed the mouse!");   //So basically what happens is, when the mouse is pressed and the function is called some information is given and stored and displayed in the form or in the variable or in the parameter of someInfo.Actually, basically sum if info is an object that stores the key value pairs of X axis and Y axis
//    console.log(someInfo.clientX + someInfo.clientY);  //So now, whichever part of that square you click thatParts X and Y value will be displayed in the console
//}
//
////Listen for mouse click on our div
//myDiv.addEventListener('mousedown',mousePressed);      //Add event listener is used for adding what event you want
//
////mousedown,mouseup,mouseenter,mouseout,mouseover - events
//
////**************************************************************************************************************
//
////JSON - Javascript object notation
//
//var bird = {                                          //So here bird is an object with attributes. 
//     x:10,                                   
//     y:10,
//     color:"blue",
//     eggs:[1,2,3,4,5],
//
//     fly:function(){
//        console.log("Bird is flying");
//        console.log(this.x);                        //if You want to access the X value of the bird inside the class, then you have to use "this.x" Which means that you are referring to the current object.
//     }
//};
//
//console.log(bird.x);                                //if You want to access the X value of the bird outside the class, then you have to use "bird.x"
