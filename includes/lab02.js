var Number1= prompt("Please entere 3 numbers. first number:");
var Number2= prompt("Please entere 3 numbers. second number:");
var Number3= prompt("Please entere 3 numbers. third number:");
middleNumber(Number1,Number2,Number3);
var Grade= prompt("Please enter a percentage: a number from 0-100");
console.log("grade calc scores A (90-100)");

//Middle number Function
function middleNumber(a,b,c){
    if( b>a && a>c || c>a && a>b ){
        document.getElementById("part0301").innerHTML="The middle number of: ("+Number1+","+Number2+","+Number3+")"+" is:"+a;
    }
    if ( a>b && b>c || c>b && b>a ){
        document.getElementById("part0301").innerHTML="The middle number of: ("+Number1+","+Number2+","+Number3+")"+" is:"+b;
    }
    if ( a>c && c>b || b>c && c>a ){
        document.getElementById("part0301").innerHTML="The middle number of: ("+Number1+","+Number2+","+Number3+")"+" is:"+c;
    }
}
//end of Middle number function

//start of grade function
Grade=parseInt(Grade);
switch(true) {
    //A grade
    case (Grade>=90 && Grade<=100):
        document.getElementById("part0302").innerHTML="grade calc scores A (90-100)";
        console.log("grade calc scores A (90-100)");
    break;
    case (Grade>=80 && Grade<=89):
        document.getElementById("part0302").innerHTML="grade calc scores B (80-89)";
        console.log("grade calc scores B (80-89)");
    break;
     case (Grade>=65 && Grade<=80):
        document.getElementById("part0302").innerHTML="grade calc scores C (65-80)";
        console.log("grade calc scores C (65-80)");
    break;
    case (Grade>=50 && Grade<=64):
        document.getElementById("part0302").innerHTML="grade calc scores D (50-64)";
        console.log("grade calc scores D (50-64)");
    break;
    case (Grade>0 && Grade<=49):
    document.getElementById("part0302").innerHTML="grade calc scores F (0-49)";
    console.log("grade calc scores F (0-49)");
    break;
    default:
        document.getElementById("part0302").innerHTML="incorrect – not between [0-100]";
    break;
    // code block
  }


hour=0;
xy=100;
while(true){
    xy=xy*1.06;
    hour=hour+1;
    document.getElementById("part0303").innerHTML=hour;
    console.log(hour);
    if(xy>=125000){
        document.getElementById("part0303").innerHTML="Fully envelop Bangkok in MINUTES: "+hour;
        document.getElementById("hello").innerHTML+="<br/>";
        break;
    
    }
 
}
hour=0;
xy=100;
while(true){
    xy=xy*1.06;
    hour=hour+1;
    if(xy>=(125000/2)){
        document.getElementById("hello").innerHTML+="<br/>";   
        document.getElementById("part0303").innerHTML+=" Fully envelop Bangkok in MINUTES: "+hour;
        document.getElementById("hello").innerHTML+="<br/>";   
        break;
    }


}
  //end of grade function

  function printAstrik() {
    let x = '';
  let limit;
  for (let i = 0; i < 10; i += 1) {
    limit = i;
    if (limit > 5) {
      limit = 10 - limit;
    }
    for (let y = 0; y < limit; y += 1) {
      x += '*';
    }
    x += '</br>';
  }
  return x;
}
document.getElementById("astrik").innerHTML+=printAstrik();  




