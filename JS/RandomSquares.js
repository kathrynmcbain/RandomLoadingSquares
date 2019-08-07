/**
 * Created by KathrynMcBain on 07/08/2019.
 */

$(document).ready(function (){

    let screenwidth = screen.width;
    let screenHeight = screen.height;

    let squarePX = screenwidth/10; //Size dimensions of a square to be 1/10th of the device screen width.

    let blockCount = (screenHeight/squarePX)*10; //number of squares that will fit in height of screen - x10 for rows = total squares required.

    //Sets up array of colours, can be hex codes or uncomment for names - no restriction on size.
    let colours = ["#3B0030", "#F53A33", "#FF9130", "#FEDD55", "#128C87", "#324D5C", "#14B278", "#F0CA4D", "#E37B40", "#ED3752", "#BF0C2B", "#02173E", "#09A38C", "#F5900E", "#F14C13"];
    //var colours = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    var squares=[];

    //position of first square
    let t=0;
    let r=squarePX;
    let b=squarePX;
    let l=0;

    //draw new row
    for (let i = 0; i < 10; i++) { //draw horizontal

        for (let j = 0; j < 10; j++) { //draw horizontal
            let random = Math.floor((Math.random() * colours.length));

            let id=(i.toString())+(j.toString()); //works as coordinate .eg. 00,01,02,03....10,11,12 etc etc
            let points = [t, r, b, l];
            squares[id] = new Square(id, points, colours[random]);

            //increment position of left and right for next square along
            r += squarePX;
            l += squarePX;

        }
        //increment position of top and bottom for next square down
        t += squarePX;
        b += squarePX;
    }


    function Square(id,points,colour){ //constructor
        this.id=id;
        this.points=points;
        this.colour=colour;
    }
    console.log(squares);
});

function drawSquares(){
    //ctx.fillRect(0, 0, 150, 75);

    /*
     square


     */
}
/*
 function removeSquares(){
 //clearRect()
 }
 drawSquares();

 removeSquares();
 */