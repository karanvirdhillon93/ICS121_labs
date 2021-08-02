//prompting input
var getUserInput = prompt("please enter a string");
var getUserKey = prompt("please enter key");
//displaying information we have
document.getElementById("part1").innerHTML += "This string is: " + getUserInput;
document.getElementById("part1").innerHTML += "</br>";
document.getElementById("part1").innerHTML += "The key is: " + getUserKey;
document.getElementById("part1").innerHTML += "</br>";

//loop is for putting our string into an array
var userArrays = [];
for (var i = 0; i < getUserInput.length; i++) {
    var currentChar = getUserInput.charAt(i);
    userArrays[i] = currentChar;
}

//using this loop is used to count the occurance of the key in our array
var count = 0;


var suits=["Hearts","Spades","Clubs","Diamonds"];
var numbers=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

var suitpick=Math.floor(Math.random() * 4);   
var tableSample= document.getElementById("suit");
tableSample.innerHTML+=suits[suitpick];
// returns a random integer from 0 to 9
var numberpick=Math.floor(Math.random() * 13);
var tableSample= document.getElementById("num");
tableSample.innerHTML+=numbers[numberpick];
for (var ii = 0; ii < getUserInput.length; ii++) {
    if (getUserKey == userArrays[ii]) {
        console.log(userArrays[ii]);
        userArrays[ii] = "";
        count = count + 1;
    }
}

//displaying our count, with our array - our key occurances
document.getElementById("part1").innerHTML += "The character occurs " + count + " times in the array";
document.getElementById("part1").innerHTML += "</br>";
document.getElementById("part1").innerHTML += "This string is: " + userArrays.join('');
document.getElementById("part1").innerHTML += "</br>";
