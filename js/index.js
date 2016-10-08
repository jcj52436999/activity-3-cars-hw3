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
// sprite name is passed as a string
// var for choosing loop to read spriteStypeVar is either "spriteStyleVarKEYForLoop" or "spriteStyleVarNUMBERForLoop" OR "spriteStyleVarKPARAGRAPHS"
//  " is in an array like [ "spriteStyleVarNUMBERForLoop" , 4], where the second value is an integer for loop counts for NUMBER CONTROLLED LOOP
var makeSprite = function ( x, y, colorBod, spriteStyleVar, scaleBodX, flipBodY, signChoicesArray, clickChoicesArray, spriteNameStr, spriteLoopChoiceArr ) {
    // colorBod = 'red';
    // sedan, putfslb

    var spritePartSpec = [];
    var defaultSprite = {
        "spriteStyleVar": "exists",
        "id": 0,
        "spriteDataSchema": "singleLayer",
        "type": "sedan",
        "name": "sedanDefault1",

        // carBody: {
        // spritePartSpec:{
        "0":{
            "spriteBuildMethod": "Path.Rectangle",
            "spritePartCount": 1,
            "spritePart": "carBody",
            "point": [0, 20],
            "size": [100, 25],
            "fillColor": colorBod
        },

        // carTop: {
        "1":{
            "spriteBuildMethod": "Path.Rectangle",
            "spritePartCount": 2,
            "spritePart": "carTop",
            "point": [15, 0],
            "size": [50, 25],
            "fillColor": colorBod
        },


        "2":{
            "spriteBuildMethod": "Path.Circle",
            "spritePartCount": 3,
            "spritePart": "wheel1",
            "center": [75 , 45],
            "radius": 12,
            "fillColor": '#444'
        },
        "3":{
            "spriteBuildMethod": "Path.Circle",
            "spritePartCount": 4,
            "spritePart": "wheel2",
            "center": [24 , 45],
            "radius": 12,
            "fillColor": '#444'
        },
        "4":{
            "spriteBuildMethod": "Path.Circle",
            "spritePartCount": 5,
            "spritePart": "",
            "center": [0 , 0],
            "radius": 0,
            "fillColor": '#444'
        }

    }



    var spriteSubSpecChosen = defaultSprite;
        // ['noSpecialCar']
    if(spriteStyleVar.spriteStyleVar == "exists"){
        spriteSubSpecChosen = spriteStyleVar;
    }

    // var layerArray = [];
    var layerSpritePartsArray = [];

    switch( spriteLoopChoiceArr[0] ){
      case "spriteStyleVarKEYForLoop":  // case eventually desired, for loop automation self senses the spec var
        // /*
        for ( k in spriteSubSpecChosen){
     // BROKEN key seeking loop based sprite parts assembly, uses above data bag for spec
            if ( (typeof spriteSubSpecChosen[k].spritePart != "undefined") && (spriteSubSpecChosen[k].spritePart != "") ){
                // alert("spriteSubSpecChosen[k].spritePart is " + spriteSubSpecChosen[k].spritePart);
                // alert("k is " + k);
                 switch( spriteSubSpecChosen[k].spriteBuildMethod ){
                    case "Path.Rectangle":
                        var spritePart = new Path.Rectangle(
                            // spriteSubSpecChosen.carTop
                            spriteSubSpecChosen[k]
                         );
                        break;
                    case "Path.Circle":
                        var spritePart = new Path.Circle(
                            // spriteSubSpecChosen.carTop
                            spriteSubSpecChosen[k]
                         );
                        break;
                    default:
                        console.log("No geometry chosen.");
                        break;
                 }

            } else {
                console.log("Key not a sprite key.")
            }
            console.log(spriteNameStr, "Pushing spritePart ", spriteSubSpecChosen[k].spritePart);
            layerSpritePartsArray.push(spritePart);
        }
        // */
        break;
     case "spriteStyleVarNUMBERForLoop":
     // fixed counting loop based sprite parts assembly, uses above data bag for spec
        for ( k = 0; k < spriteLoopChoiceArr[1]; k++ ){
            if ( (typeof spriteSubSpecChosen[k].spritePart != "undefined") && (spriteSubSpecChosen[k].spritePart != "") ){
                // alert("spriteSubSpecChosen[k].spritePart is " + spriteSubSpecChosen[k].spritePart);
                // alert("k is " + k);
                 switch( spriteSubSpecChosen[k].spriteBuildMethod ){
                    case "Path.Rectangle":
                        var spritePart = new Path.Rectangle(
                            // spriteSubSpecChosen.carTop
                            spriteSubSpecChosen[k]
                         );
                        break;
                    case "Path.Circle":
                        var spritePart = new Path.Circle(
                            // spriteSubSpecChosen.carTop
                            spriteSubSpecChosen[k]
                         );
                        break;
                    case "Path.Ellipse":
                        var spritePart = new Path.Ellipse(
                            // spriteSubSpecChosen.carTop
                            spriteSubSpecChosen[k]
                         );
                        break;
                    case "Path.Point":
                        var spritePart = new Path.Point(
                            spriteSubSpecChosen[k]
                        );
                        break;
                    case "Path.RegularPolygon":
                        console.log(spriteSubSpecChosen[k].point);
                        console.log(spriteSubSpecChosen[k].sides);
                        console.log(spriteSubSpecChosen[k].radius);

                        var spritePart = new Path.RegularPolygon(
                            spriteSubSpecChosen[k]
                        );
                        /*
                        var center = new Point(spriteSubSpecChosen[k].point);
                        //var triangle = new Path.RegularPolygon(center,
                        //                3, 400);
                        var triangle = new Path.RegularPolygon(center,
                                        spriteSubSpecChosen[k].sides, spriteSubSpecChosen[k].radius);
                            triangle.fillcolor = 'red';
                            triangle.rotate(-150);
                            triangle.selected = true;
                        */
                        break;
/*
var center = new Point(50, 50);
var sides = 3;
var radius = 40;
var triangle = new Path.RegularPolygon(center, sides, radius);
triangle.fillColor = 'black';
*/
                    default:
                        console.log("No geometry chosen.");
                        break;
                 }

            } else {
                console.log("Key not a sprite key.")
            }
            console.log(spriteNameStr, "Pushing spritePart ", spriteSubSpecChosen[k].spritePart);
            layerSpritePartsArray.push(spritePart);
        }
        break;
     default:
     // paragraph based sprite parts assembly like original class example, except uses above data bag for spec
        var tempNum = 0;
        var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
        // alert("tempDim$ is " + tempDim$);
        // alert("spriteSubSpecChosen[tempDim$].spritePart is " + spriteSubSpecChosen[tempDim$].spritePart);


        var spritePart = new Path.Rectangle(
            // spriteSubSpecChosen.carBody
            // spriteSubSpecChosen.spritePartSpec[0]
            // spriteSubSpecChosen["0"]

            spriteSubSpecChosen[tempDim$]
        );

        // layerArray.push(carBody);
        //alert("carBody.spritePartCount = " + carBody.spritePartCount.toString())
        // layerSpritePartsArray[carBody.spritePartCount] = carBody;
        console.log(spriteNameStr, "Pushing spritePart ", spriteSubSpecChosen[tempDim$].spritePart);
        layerSpritePartsArray.push(spritePart);
        // alert("layerVehiclePartsArray[carBody] = ", layerSpritePartsArray[carBody])


        var tempNum = 1;
        var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
        // alert("tempDim$ is " + tempDim$);
        var spritePart = new Path.Rectangle(
            // spriteSubSpecChosen.carTop
            spriteSubSpecChosen[tempDim$]
         );
        console.log(spriteNameStr, "Pushing spritePart ", spriteSubSpecChosen[tempDim$].spritePart);
        layerSpritePartsArray.push(spritePart);


        var tempNum = 2;
        var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
        // alert("tempDim$ is " + tempDim$);
        var spritePart = new Path.Circle(
            // spriteSubSpecChosen.wheel1
            spriteSubSpecChosen[tempDim$]
         );
        console.log(spriteNameStr, "Pushing spritePart ", spriteSubSpecChosen[tempDim$].spritePart);
        layerSpritePartsArray.push(spritePart);


        var tempNum = 3;
        var tempDim$ = tempNum.toString();  // String.fromCharCode( 34, 48, 34);  // "0";  //toString(0);
        // alert("tempDim$ is " + tempDim$);
        var spritePart = new Path.Circle(
            // spriteSubSpecChosen.wheel2
            spriteSubSpecChosen[tempDim$]
         );
        console.log(spriteNameStr, "Pushing spritePart ", spriteSubSpecChosen[tempDim$].spritePart);
        layerSpritePartsArray.push(spritePart);
        break;
   }


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
var moveSprite = function (car, speed) {
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

var fishSprite = {
        "spriteStyleVar": "exists",
        "id": 1,
        "spriteDataSchema": "singleLayer",
        "type": "ellipseFish",
        "name": "fishDefault1",

        // fishBody: {
        // spritePartSpec:{
        "0":{
            "spriteBuildMethod": "Path.Ellipse",
            "spritePartCount": 1,
            "spritePart": "fishBody",
            "point": [100, 300],
            "size": [180, 60],
            "fillColor": "orange"
        },

/*
var path = new Path.Ellipse({
    point: [20, 20],
    size: [180, 60],
    fillColor: 'black'
});
*/
        /*
        // fishTailPoint
        "1":{
            "spriteBuildMethod": "Path.Point",
            "spritePartCount": 2,
            "spritePart": "fishTailPoint",
            "point": [50, 50]

        },
        */


        // fishTail: {
        "1":{
            "point": [40,310],
            "size": [88,50],
            // "radius": 50,
            "fillColor": "red",
            // "rotate": -250,
            "selected": "true",
            "spritePart": "fishTail",
            "spriteBuildMethod": "Path.Rectangle",
            "spritePartCount": 2
        },

/*
var center = new Point(50, 50);
var sides = 3;
var radius = 40;
var triangle = new Path.RegularPolygon(center, sides, radius);
triangle.fillColor = 'black';
*/
        // fishEye
        "2":{
            "spriteBuildMethod": "Path.Circle",
            "spritePartCount": 3,
            "spritePart": "fishEye",
            "center": [240 , 320],
            "radius": 12,
            "fillColor": '#444'
        },
        "3":{
            "spriteBuildMethod": "Path.Circle",
            "spritePartCount": 4,
            "spritePart": "",
            "center": [24 , 45],
            "radius": 12,
            "fillColor": '#444'
        },
        "4":{
            "spriteBuildMethod": "Path.Circle",
            "spritePartCount": 6,
            "spritePart": "",
            "center": [0 , 0],
            "radius": 0,
            "fillColor": '#444'
        }

    }



var spriteStyleVar = {spriteStyleVar: "notExists"};
// alert("Makes it here to var car makes.");
// sprite name is passed as a string
// var for choosing loop to read spriteStypeVar is either "spriteStyleVarKEYForLoop" or "spriteStyleVarNUMBERForLoop" OR "spriteStyleVarKPARAGRAPHS"
//  " is in an array like [ "spriteStyleVarNUMBERForLoop" , 4], where the second value is an integer for loop counts for NUMBER CONTROLLED LOOP
//call makeCar function:
var car1 = makeSprite( 0, 50, 'red', (spriteStyleVar), -.5, .5, ['noSign'], ['noClick'], "car1", ["spriteStyleVarNUMBERForLoop", 4]);
// alert("Makes it through var car1. ")
var car2 = makeSprite( 0, 100, 'blue', (spriteStyleVar), -.75, .75, ['noSign'], ['noClick'], "car2", ["spriteStyleVarNUMBERForLoop", 4]);

var car3 = makeSprite( 0, 150, 'green', (spriteStyleVar), 1.2, 1.2, ['noSign'], ['noClick'], "car3", ["spriteStyleVarNUMBERForLoop", 4]);

var car4 = makeSprite( 0, 200, 'orange', (spriteStyleVar), 2, -2, ['Driver \nin Training','center','black'], ['yesClick'], "car4", ["spriteStyleVarNUMBERForLoop", 4]);
// alert("car4 done.");

var put1 = makeSprite(0, 250, 'yellow', (spriteStyleVar), 2, 2, ['noSign'], ['noClick'], "put1", ["spriteStyleVarNUMBERForLoop", 4]);

var fish1 = makeSprite(100, 340, 'yellow', (fishSprite), 1, 1, ['noSign'], ['noClick'], "fish1", ["spriteStyleVarNUMBERForLoop", 3]);     //  spriteStyleVarKEYForLoop
var fin = new Path.RegularPolygon(new Point(150, 390), 3, 30);
fin.fillColor = '#e9e9ff';
fin.rotate(20);
fin.selected = true;


var fish2 = makeSprite(50, 400, 'pink', (fishSprite), 1, 1, ['noSign'], ['noClick'], "fish2", ["spriteStyleVarNUMBERForLoop", 3]);     //  spriteStyleVarKEYForLoop
var fin = new Path.RegularPolygon(new Point(100, 450), 3, 30);
fin.fillColor = '#e9e9ff';
fin.rotate(20);
fin.selected = true;
// fish2.add(fin);


// alert("put1 done.");
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
    moveSprite(car1, -1);
    moveSprite(car2, -2);
    moveSprite(car3, 4);
    moveSprite(car4, 7);
    moveSprite(put1, 8);
    moveSprite(fish1, 3);
    moveSprite(fish2, 2);
};