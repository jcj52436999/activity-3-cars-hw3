/*--------------------------------------
  set up code (you can ignore this part)
  --------------------------------------*/
paper.install(window);
paper.setup('myCanvas');
$('#myCanvas').height($(window).height());
var canvasHeight = view.size.height;
var canvasWidth = view.size.width;
/*------------------------------------------*/

//define makeCar function:
var makeCar = function ( x, y, colorBod, spriteStyleVar, scaleBodX, flipBodY, signChoicesArray, clickChoicesArray ) {
    // colorBod = 'red';
    // sedan, putfslb

    var spritePartSpec = [];
    var defaultSprite = {
        spriteStyleVar: "exists",
        id: 0,
        spriteDataSchema: "singleLayer",
        type: "sedan",
        name: "sedanDefault1",

        // carBody: {
        // spritePartSpec:{
        "0":{
            spriteBuildMethod: "Path.Rectangle",
            spritePartCount: 1,
            spritePart: "carBody",
            point: [0, 20],
            size: [100, 25],
            fillColor: colorBod
        },

        // carTop: {
        "1":{
            spriteBuildMethod: "Path.Rectangle",
            spritePartCount: 2,
            spritePart: "carTop",
            point: [15, 0],
            size: [50, 25],
            fillColor: colorBod
        },


        "2":{
            spriteBuildMethod: "Path.Circle",
            spritePartCount: 3,
            spritePart: "wheel1",
            center: [75 , 45],
            radius: 12,
            fillColor: '#444'
        },
        "3":{
            spriteBuildMethod: "Path.Circle",
            spritePartCount: 4,
            spritePart: "wheel2",
            center: [24 , 45],
            radius: 12,
            fillColor: '#444'
        },
        "4":{
            spriteBuildMethod: "Path.Circle",
            spritePartCount: 5,
            spritePart: "",
            center: [0 , 0],
            radius: 0,
            fillColor: '#444'
        }

    }

    var spriteSubSpecChosen = defaultSprite;
        // ['noSpecialCar']
    if(spriteStyleVar.spriteStyleVar == "exists"){
        spriteSubSpecChosen = spriteStyleVar;
    }

    // var layerArray = [];
    var layerSpritePartsArray = [];

    /*
    var carBody = new Path.Rectangle({
        spritePartCount: 1,
        spritePart: "carBody",
        point: [0, 20],
        size: [100, 25],
        fillColor: colorBod
    });
    */

    var tempNum = 0;
    var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
    // alert("tempDim$ is " + tempDim$);
    var spritePart = new Path.Rectangle(
        // spriteSubSpecChosen.carBody
        // spriteSubSpecChosen.spritePartSpec[0]
        // spriteSubSpecChosen["0"]

        spriteSubSpecChosen[tempDim$]
    );

    // layerArray.push(carBody);
    //alert("carBody.spritePartCount = " + carBody.spritePartCount.toString())
    // layerSpritePartsArray[carBody.spritePartCount] = carBody;
    layerSpritePartsArray.push(spritePart);
    // alert("layerVehiclePartsArray[carBody] = ", layerSpritePartsArray[carBody])

    /*
    var carTop = new Path.Rectangle({
        point: [15, 0],
        size: [50, 25],
        fillColor: colorBod
    });
    layerArray.push(carTop);
    */

    var tempNum = 1;
    var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
    // alert("tempDim$ is " + tempDim$);
    var spritePart = new Path.Rectangle(
        // spriteSubSpecChosen.carTop
        spriteSubSpecChosen[tempDim$]
     );
    layerSpritePartsArray.push(spritePart);

    /*
    var wheel1 = new Path.Circle({
        center: new Point(75, 45),
        radius: 12,
        fillColor: '#444'
    });
    layerArray.push(wheel1);
    */

    var tempNum = 2;
    var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
    // alert("tempDim$ is " + tempDim$);
    var spritePart = new Path.Circle(
        // spriteSubSpecChosen.wheel1
        spriteSubSpecChosen[tempDim$]
     );
    layerSpritePartsArray.push(spritePart);

    /*
    var wheel2 = new Path.Circle({
        center: new Point(24, 45),
        radius: 12,
        fillColor: '#444'
    });
    layerArray.push(wheel2);
    */

    var tempNum = 3;
    var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
    // alert("tempDim$ is " + tempDim$);
    var spritePart = new Path.Circle(
        // spriteSubSpecChosen.wheel2
        spriteSubSpecChosen[tempDim$]
     );
    layerSpritePartsArray.push(spritePart);

    if(signChoicesArray[0] != 'noSign'){
    var sign = new PointText(new Point(50, 20));
    // alert("signChoicesArray[0] = " + signChoicesArray[0])
          sign.justification = signChoicesArray[1];
          sign.fillColor = signChoicesArray[2];
          sign.content = signChoicesArray[0];
          // layerArray.push(sign);
          layerSpritePartsArray.push(sign);
    }

// alert("layerArray - ", layerArray);
// console.log("layerArray - ", layerArray);
/*
function onMouseDown(event) {
	console.log('You pressed the mouse!');
}

function onMouseDrag(event) {
	console.log('You dragged the mouse!');
}

function onMouseUp(event) {
	console.log('You released the mouse!');
}
*/
    // Group all of the shapes into a single layer
    // (similar to how Photoshop and Illustrator work):
    var spriteAssy = new Layer({   // spriteAssy was layer
        // children: [carTop, carBody, wheel1, wheel2, sign],   // layerArray
        children: layerSpritePartsArray , // layerArray ,
        position: [ x, y ]  // ,
        // scale[scaleBod]
        // this.scale(scaleBod);
    });

    if(clickChoicesArray[0] != 'noClick'){
      spriteAssy.onClick = function (event) {
        console.log("redirecting via mouse");
        alert("redirecting...");
        window.location = "https://jcj52436999.github.io/wellKnowIt/";
    };
    }

    // this.scale(scaleBod);
    spriteAssy.scale(scaleBodX, flipBodY);
    return spriteAssy;  // layer;
};
// alert("Makes it to moveCar var def. ")
//define moveCar function:
var moveCar = function (car, speed) {
    if (speed > 0)
        {
            car.position.x += speed;
            if (car.position.x > canvasWidth) {
                car.position.x = 0;
            }
        }
    else if (speed < 0)
        {
            // car.position.x += speed;
            if (car.position.x <= 0) {
                car.position.x = canvasWidth;
            }
            car.position.x += speed;
        }

    /* var carPosX = car.position.x;
    if (car.position.x > canvasWidth && speed > 0) {
        car.position.x = 0;}
       else if (carPosX <= 0 && speed < 0) {
        car.position.x = canvaswidth;
        car.position.x += speed;}
    else {car.position.x += speed;}
    */
};

var spriteStyleVar = {spriteStyleVar: "notExists"};


// alert("Makes it here to var car makes.");
//call makeCar function:
var car1 = makeCar( 0, 100, 'red', (spriteStyleVar), -.5, .5, ['noSign'], ['noClick']);
// alert("Makes it through var car1. ")
var car2 = makeCar( 0, 200, 'blue', (spriteStyleVar), -.75, .75, ['noSign'], ['noClick']);
var car3 = makeCar( 0, 300, 'green', (spriteStyleVar), 1.2, 1.2, ['noSign'], ['noClick']);
var car4 = makeCar( 0, 400, 'orange', (spriteStyleVar), 2, -2, ['Driver \nin Training','center','black'], ['yesClick']);

var put1 = makeCar(0, 450, 'yellow', (spriteStyleVar), 2, 2, ['noSign'], ['noClick']);
        /*
        put1.sign.justification = 'center';
        put1.sign.fillColor = 'white';
        put1.sign.content = 'Driver \nin Training';
        */

// work but not needed at moment
// car1.scale(.5);
// car2.scale(.75);
// car3.scale(1.2);
// car4.scale(2);
// alert("Makes it to view.onFrame. ")
view.onFrame = function (event) {
    // call moveCar function each 
    // time the frame draws:
    moveCar(car1, -1);
    moveCar(car2, -2);
    moveCar(car3, 4);
    moveCar(car4, 7);
    moveCar(put1, 8);

};