//Created by KM 10/09/18
//Tidy version...

//set up squares
//display squares

$(document).ready(function () {

    var screenwidth = screen.width;
    var screenHeight = screen.height;

    var squarePX = screenwidth/10; //Size dimensions of a square
    console.log('squarePX: '+squarePX);
    var blockCount = (screenHeight/squarePX)*10 //number of squares that will fit in height - x10 for rows = total squares required.
    var squares = [];

    //Sets up array of colours, can be hex codes or names - no restriction on size.
    var colours = ["#3B0030", "#F53A33", "#FF9130", "#FEDD55", "#128C87", "#324D5C", "#14B278", "#F0CA4D", "#E37B40", "#ED3752", "#BF0C2B", "#02173E", "#09A38C", "#F5900E", "#F14C13"];
    //var colours = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    var i;

    //number of squares required


    function Square(ID, colour, text) { //constructor creates a new instance of the square object
        this.sqID = ID; //used to manipulate
        this.sqColour = colour; //used to set background colour of squares
    }


    for (i = 0; i < blockCount; i++) {
        var random = Math.floor((Math.random() * colours.length));
        squares[i] = new Square(i, colours[random], "");

        //Append square to DOM
        $("#squareGrid").append('<div class="square" id="' + squares[i].sqID + '" style="background-color:' + squares[i].sqColour + ';"></div>')
    }


    var q = 0;
    var end = squares.length; //point to end
    for (var r = 0; r < squares.length; r++) {
        var randomFadesRemaining = squares[end];
        randomFader = Math.floor((Math.random() * randomFadesRemaining)).toString();
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
    for (var e = 0; e < squares.length; e++) {
        squaresToFade.push(squares[e].sqID);
    }

    squaresToFade = shuffle(squaresToFade);


    var fade = setInterval(
        function () {
            var fadingSquare = squaresToFade[q];

            if (q >= squaresToFade.length) {
               //Things to do when squares have all disappeared

                $("square").css("display", "none");
                clearInterval(fade);
            }
            $("#" + fadingSquare).css("background-color", "white");
            $("#" + fadingSquare).css("z-index", "0"); //puts faded square behind content
            q++;

        }, 100);

});