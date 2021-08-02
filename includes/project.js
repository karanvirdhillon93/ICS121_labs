var name;
var nameFormat = true;
$("#welcome2").hide();
$("#welcome2-0").hide();
$("#submit").hide();

function submission() {
    var name = document.getElementById("textbox").value;
  if (name.length > 0) {
    alert("Welcome " + name);
    $("#name").fadeOut(1000);
    $("#welcome").fadeOut(1000);
    $("#welcome2").show();
    $("#welcome2-0").show();
    $("#submit").show();
    var welcomeName=document.getElementById("welcome3-1").innerHTML +="Welcome "+name+"!"+"Good Luck!";


  } else {
    nameFormat == false;
    alert("Please enter the name again");
  }



}


