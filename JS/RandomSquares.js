/**
 * Created by KathrynMcBain on 07/08/2019.
 */

$(document).ready(function () {

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let c = document.getElementById("squareGrid");
    let ctx = c.getContext("2d");
    ctx.canvas.width = screenWidth;
    ctx.canvas.height = screenHeight;

    let squarePX = screenWidth / 10; //Size dimensions of a square to be 1/10th of the device screen width.
    console.log('squarePX' + squarePX);
    let rows = Math.round((screenHeight / squarePX) + 0.5);
    let blockCount = Math.round((screenHeight / squarePX) + 0.5) * 10; //number of squares that will fit in height of screen - x10 for rows = total squares required.
    console.log('blockCount: ' + blockCount);
    //Sets up array of colours, can be hex codes or uncomment for names - no restriction on size.
    let colours = ["#3B0030", "#F53A33", "#FF9130", "#FEDD55", "#128C87", "#324D5C", "#14B278", "#F0CA4D", "#E37B40", "#ED3752", "#BF0C2B", "#02173E", "#09A38C", "#F5900E", "#F14C13"];
    //var colours = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    var squares = [];

    //position of first square
    let y = 0;
    let width = squarePX;
    let height = squarePX;
    let x = 0;



    //draw new row
    //let k=0;
    for (let i = 0; i < rows; i++) { //new row
        for (let j = 0; j < 10; j++) { //draw horizontal along row
            let random = Math.floor((Math.random() * colours.length));

            let id = ((i.toString()) + (j.toString()));//works as coordinate .eg. 00,01,02,03....10,11,12 etc etc
            id = parseInt(id).toFixed(0); //turns coordinate into int and slices of leading 0 so it can be used to access array position
            //let id =k;
            let points = [y, width, height, x];
            squares[id] = new Square(id, points, colours[random]);

            //increment position of left and right for next square along
            //r += squarePX;
            x += squarePX;

            if (j === 9) { //if on last iteration through loop i.e last square in current row, then set x position back to 0 again (left of screen)
                x = 0;
            }
            k=+1;
        }
        //increment position of top and bottom for next square down
        y += squarePX;
        //b += squarePX;
    }


    function Square(id, points, colour) { //constructor
        this.id = id;
        this.points = points;
        this.colour = colour;
    }


    for (let j = 0; j < blockCount; j++) {
        console.log('j: ' + j + ' colour: ' + squares[j].colour);
        ctx.fillStyle = squares[j].colour;
        console.log(squares[j].points[3], squares[j].points[0]);
        ctx.fillRect(squares[j].points[3], squares[j].points[0], squarePX, squarePX);
    }


    //Jumble array so squares disappear in a random order rather than consecutively
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    var squaresToFade = [];
    for (let e = 0; e < squares.length; e++) {
        squaresToFade.push(squares[e]);
    }

    squaresToFade = shuffle(squaresToFade);
    console.log(squaresToFade);

    //loop
    let q = 0;

    var fade = setInterval(
        function () {
            console.log(q);

            if (q >= blockCount-1) {
                console.log('done fading');
                clearInterval(fade);
            }
            //fade
            ctx.clearRect(squaresToFade[q].points[3], squaresToFade[q].points[0], squarePX, squarePX);
            console.log(squaresToFade[q]);
            q++;

        }, 100);

//removeSquares(ctx, blockCount,squares,squarePX);

});

/*
 function test(ctx,squares,squarePX, k, blockCount){
 var fade = setInterval(
 function () {
 ctx.clearRect(squares[k].points[3], squares[k].points[0], squarePX, squarePX);
 if (k=blockCount) {
 console.log('k: '+k);
 clearInterval(fade);
 }
 }, 1000);
 }
 */
/*
 function removeSquares(ctx, blockCount,squares, squarePX) {
 for (let j = 0; j < blockCount; j++) {

 setTimeout(function myFunction(ctx,squares,squarePX){
 ctx.clearRect(0,0,150,150);
 //ctx.clearRect(squares[j].points[3], squares[j].points[0], squarePX, squarePX);
 }, 3000);
 }
 }
 */
/*
 function removeSquares(){
 //clearRect()
 }
 drawSquares();

 removeSquares();
 */