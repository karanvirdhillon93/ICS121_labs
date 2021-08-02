//-------------------------------------------------------------------------
//DEALING WITH BEGINNING SCREEN TRANSITION[]
//-------------------------------------------------------------------------
var name;
var nameFormat = true;
var totalRight=0;
var count=0;
var welcomeName
$("#welcome2").hide();
$("#welcome2-0").hide();
$('form').hide();
$("#MYsubmit").hide();
var score;
function submission() {
var name = document.getElementById("textbox").value;
if (name.length > 0) {
  alert("Welcome " + name);
  $("#name").fadeOut(1000);
  $("#welcome").fadeOut(1000);
  $("#welcome2").show();
  $("#welcome2-0").show();
  $('MYsubmit').show();
  $('form').show();
welcomeName=document.getElementById("welcome3-1").innerHTML +="Welcome "+name+" !"+"Good Luck!";
} else {
  nameFormat == false;
  alert("Please enter the name again");
}
}
//-------------------------------------------------------------------------
//DONE[X]
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//AFTER TRANSITION WE ARE APPENDING SOME QUESTIONS[x]
//-------------------------------------------------------------------------
var welcomeName=document.getElementById("Question1").innerHTML +="1. How long does it take the average person to fall asleep?";
var welcomeName=document.getElementById("Question2").innerHTML +="2.How many eggs does the average american eat per year?";
var welcomeName=document.getElementById("Question3").innerHTML +="3.How many taste buds does the average american have?";
var welcomeName=document.getElementById("Question4").innerHTML +="4.What is the average lifespan of a squirrel?";
var welcomeName=document.getElementById("Question5").innerHTML +="5.on average __% of all restaurant meals include potato chips";
//-------------------------------------------------------------------------
//DONE[X]
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//CHECKING QUESTIONS AND CALCULATING THE CORRECT ANSWERS[]
//-------------------------------------------------------------------------
var arr=[];
function finalsubmit() {
  totalRight=0;
  if(document.getElementById('correctAnswer-1').checked) {
    totalRight=totalRight+1;
    count=count+1;
}
else if(document.getElementById('wrongAnswer-1').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-2').checked) {
  
  count=count+1;
}
else if(document.getElementById('wrongAnswer-3').checked) {
  
  count=count+1;
}

  if(document.getElementById('correctAnswer-2').checked) {
    totalRight=totalRight+1;
   
}
else if(document.getElementById('wrongAnswer-4').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-5').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-6').checked) {
 
  count=count+1;
  
}


if(document.getElementById('correctAnswer-3').checked) {
    totalRight=totalRight+1;
    count=count+1;
}
else if(document.getElementById('wrongAnswer-7').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-8').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-9').checked) {
 
  count=count+1;
  
}
  if(document.getElementById('correctAnswer-4').checked) {
    totalRight=totalRight+1;
    count=count+1;
}
else if(document.getElementById('wrongAnswer-10').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-11').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-12').checked) {
 
  count=count+1;
  
}
else{

}


  if(document.getElementById('correctAnswer-5').checked) {
    totalRight=totalRight+1;
    count=count+1;
}
else if(document.getElementById('wrongAnswer-13').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-14').checked) {
 
  count=count+1;
}
else if(document.getElementById('wrongAnswer-15').checked) {
 
  count=count+1;
  
}
else{
    
}
//-------------------------------------------------------------------------
//DONE[X]
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//CHECKING QUESTIONS AND CALCULATING THE CORRECT ANSWERS[X]
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//CHECKING MISSING ANSWERS[]
//-------------------------------------------------------------------------
console.log(count);
if(count<4){
  alert("Missing question or questions, please answer all");
}
else{
    
}

document.getElementById("score").innerHTML +="RESULT for "+name+"You Scored "+totalRight+" out of 5!"+"<br>";
score=document.getElementById("ans").innerHTML +="You scored "+totalRight+" out of 5";
if(totalRight==5){
 
  $( "#score" ).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);({
    
  }, 10000, function() {
    document.getElementById("score").innerHTML +="You score 5/5 PERFECT!";
  });

}
else{
    
}
$( "#book" ).animate({
  
}, 3000, function() {
 document.getElementById("ans").innerHTML ="";
});



//-------------------------------------------------------------------------
//DONE[X]
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//APPENDING OUR SCORE TO SHOW WITH 3 SECOND RESET[] 
//-------------------------------------------------------------------------
setTimeout(
  function() 
  { 
  document.getElementById("ans").innerHTML ="";
  document.getElementById("score").innerHTML ="";
  document.getElementById("score").innerHTML ="";
  }, 3000);

}
//-------------------------------------------------------------------------
//DONE[X]
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//MOUSE HINT HOVERING []
//-------------------------------------------------------------------------
$(document).ready(function(){
  $('#hint1').hover(function() {
    $(this).text("7Minutes");
  },
      function() {
        $(this).text("[HINT]");
      });
});
$(document).ready(function(){
  $('#hint2').hover(function() {
    $(this).text("263Eggs");
  },
      function() {
        $(this).text("[HINT]");
      });
});
$(document).ready(function(){
  $('#hint3').hover(function() {
    $(this).text("10,000");
  },
      function() {
      $(this).text("[HINT]");
      });
});
$(document).ready(function(){
  $('#hint4').hover(function() {
    $(this).text("7Years");
  },
      function() {
        $(this).text("[HINT]");
      });
});
$(document).ready(function(){
  $('#hint5').hover(function() {
    $(this).text("7%");
  },
      function() {
        $(this).text("[HINT]");
      });
});
//-------------------------------------------------------------------------
//DONE[X]
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//END
//-------------------------------------------------------------------------

