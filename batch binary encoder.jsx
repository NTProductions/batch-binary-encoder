// batch binary encoder
var namingPrefix = "image";
var numberArray = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine",  "Thirty", "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine",  "Forty", "FortyOne", "FortyTwo", "FortyThree", "FortyFour", "FortyFive", "FortySix", "FortySeven", "FortyEight", "FortyNine", "Fifty", "FiftyOne", "FiftyTwo", "FiftyThree", "FiftyFour", "FiftyFive", "FiftySix", "FiftySeven", "FiftyEight", "FiftyNine",  "Sixty", "SixtyOne", "SixtyTwo", "SixtyThree", "SixtyFour", "SixtyFive", "SixtySix", "SixtySeven", "SixtyEight", "SixtyNine",  "Seventy", "SeventyOne", "SeventyTwo", "SeventyThree", "SeventyFour", "SeventyFive", "SeventySix", "SeventySeven", "SeventyEight", "SeventyNine", "Eighty", "EightyOne", "EightyTwo", "EightyThree", "EightyFour", "EightyFive", "EightySix", "EightySeven", "EightyEight", "EightyNine", "Ninety", "NinetyOne", "NinetyTwo", "NinetyThree", "NinetyFour", "NinetyFive", "NinetySix", "NinetySeven", "NinetyEight", "NinetyNine"];

var folder = Folder("C:/test/shapeStuff");
var files = folder.getFiles();
var images = [];
for(var i = 0; i < files.length; i++) {
    if(files[i].name.indexOf(".png") != -1) {
        images.push(files[i]);
        }
    }
var thisBinary;
var totalString = "";

for(var i = 0; i < images.length; i++) {
    images[i].encoding = 'BINARY';
    images[i].open('e');
    thisBinary = images[i].read().toSource();
    totalString+="var "+namingPrefix+numberArray[i]+ " = " + thisBinary.slice(thisBinary.lastIndexOf('("')+1, thisBinary.lastIndexOf('")')+1)+";\r";
    images[i].close();
    }

var myFile = new File(folder.fsName+"/binary.txt");
        myFile.open("w");
        myFile.encoding = "BINARY";
        myFile.write(totalString);
        myFile.close();
        
alert("done");