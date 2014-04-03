/*
     Name: Andrew Tillett
     Date: 4/3/14
     Class & Section:  WIA-0414
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

if(Modernizr.canvas){


	var Canvas1 = document.getElementById("Canvas1");
	var ctx = Canvas1.getContext("2d");

	ctx.fillStyle = "blue";
	ctx.strokeStyle = "black";

	ctx.fillRect(0,0, 50, 100);
	ctx.strokeRect(0,0, 50, 100);
}else{
	console.log("Canvas is not supported");
};

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
if(Modernizr.canvas){
	var Canvas2 = document.getElementById("Canvas2");
	var ctx = Canvas2.getContext("2d");

	var degrees = 360;
	var radians = (degrees/180)*Math.PI;

	ctx.strokeStyle = "black";
	ctx.fillStyle = "rgba(225, 0, 0, .5)";

	ctx.beginPath();
	ctx.arc(50,50, 30, 0, radians);
	ctx.stroke();
	ctx.fill();

}else{
	console.log("Canvas is not supported");
};



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
if(Modernizr.canvas){
	var Canvas3 = document.getElementById("Canvas3");
	var ctx = Canvas3.getContext("2d");

	ctx.fillStyle = "yellow";
	ctx.strokeStyle = "orange";

	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(110, 70);
	ctx.lineTo(120, 100);
	ctx.lineTo(150, 100);
	ctx.lineTo(120, 115);
	ctx.lineTo(130, 150);
	ctx.lineTo(110, 125);
	ctx.lineTo(90, 150);
	ctx.lineTo(100, 115);
	ctx.lineTo(70, 100);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

}else{
	console.log("Canvas is not supported");
};

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
if(Modernizr.canvas){
	var Canvas4 = document.getElementById("Canvas4");
	var ctx = Canvas4.getContext("2d");

	var degrees = 180;
	var radians = (degrees/180)*Math.PI;

	ctx.fillStyle = "blue";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.arc(150, 100, 80, 0, radians, true);
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "lightblue";

	ctx.beginPath();
	ctx.bezierCurveTo(72,103, 80, 118, 95, 103);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.bezierCurveTo(105,103, 112, 118, 128, 103);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.bezierCurveTo(138,103, 145, 118, 161, 103);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.bezierCurveTo(171,103, 178, 118, 194, 103);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.bezierCurveTo(204,103, 211, 118, 227, 103);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

}else{
	console.log("Canvas is not supported");
};



/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

if(Modernizr.canvas){
	var Canvas5 = document.getElementById("Canvas5");
	var ctx = Canvas5.getContext("2d");

	ctx.font = "25pt Helvetica";
	ctx.fillStyle = "blue";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1.5;

	ctx.fillText("Hello World!", 50, 100);
	ctx.strokeText("Hello World!", 50, 100);

}else{
	console.log("Canvas is not supported");
};

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

if(Modernizr.canvas){
	var Canvas6 = document.getElementById("Canvas6");
	var ctx = Canvas6.getContext("2d");

	var logo = document.getElementById("logo");

	ctx.drawImage(logo, 50,50);

	ctx.drawImage(logo, 600, 75, 225, 50);

	ctx.drawImage(logo, 50, 5, 95, 50,900, 75,95, 50 );


}else{
	console.log("Canvas is not supported");
};



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
//Using Rectangles, Circles, Text,  and Lines

if(Modernizr.canvas){
	var Canvas7 = document.getElementById("Canvas7");
	var ctx = Canvas7.getContext("2d");

	var degrees = 180;
	var radians = (degrees/180)*Math.PI;

	ctx.strokeStyle = "black";
	ctx.fillStyle = "blue";
	ctx.lineWidth = 4;

	//Draw Rectangle for glasses frame 1
	ctx.strokeRect(25, 50, 40, 20);

	//Draw line to connect frames
	ctx.beginPath();
	ctx.moveTo(65, 62);
	ctx.lineTo(100, 62);
	ctx.closePath();
	ctx.stroke();

	//Draw Rectangle for glasses frame 2
	ctx.strokeRect(100, 50, 40, 20);

	//Draw Eye 1
	ctx.beginPath();
	ctx.arc(45, 68, 10, 0, radians, true);
	ctx.closePath();
	ctx.fill();

	//Draw Eye 2
	ctx.beginPath();
	ctx.arc(120, 68, 10, 0, radians, true);
	ctx.closePath();
	ctx.fill();

	ctx.fillStyle = "black";

	//Draw Iris 1
	ctx.beginPath();
	ctx.arc(45, 68, 5, 0, radians, true);
	ctx.closePath();
	ctx.fill();

	//Draw Iris 2
	ctx.beginPath();
	ctx.arc(120, 68, 5, 0, radians, true);
	ctx.closePath();
	ctx.fill();

	//Text
	ctx.font = "15pt Helvetica";
	ctx.fillText("Blue Eyes and Glasses", 50, 100);



}else{
	console.log("Canvas is not supported");
};











