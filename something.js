var aText2 = new Array(
"Skhi.",
"Welcome to my world."
);
var aText3 = new Array("Lyrics about sky - artist.");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
 // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter(aText, index)
{
    var iArrLength = aText[index].length;
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout(function(){ typewriter(aText, iIndex)}, 500);
  }
 } else {
  setTimeout(function(){typewriter(aText, index)}, iSpeed);
 }
}

