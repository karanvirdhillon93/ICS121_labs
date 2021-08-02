function letterCount(x,y){
var count=0;
var currentChar;
    for( i=0;i<x.length-1;i++){
     
        currentChar=x.charAt(i);
        if(currentChar==y){
            count=count+1;
          
        }
       
    }
    return count;
}
document.getElementById("part1").innerHTML+="The letter i appears"+letterCount("This is a string","i")+" times.";

var monthNames=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
var getMonth=prompt("enter month");
var workWeek= new Date(getYear,getMonth,0);
var options={weekday:'long'}
var options2={day:'numeric'}
var getMonth=getMonth-1;
var getYear=prompt("enter year");


document.getElementById("part2").innerHTML+="Month: "+monthNames[getMonth];
document.getElementById("part2").innerHTML+="</br>";
document.getElementById("part2").innerHTML+="Year: "+getYear;
document.getElementById("part2").innerHTML+="</br>";


function daysInMonth(month,year){
    return new Date(year,month,0).getDate();
}
function isWeekday(year, month, day) {
    var day = new Date(year, month, day).getDay();
    return (day !=0 )&& (day !=6);
    }
    function getWeekdaysInMonth(month, year) {
        var days = daysInMonth(month, year);
        var weekdays = 0;
        for(var i=0; i< days; i++) {
            if (isWeekday(year, month, i+1)) weekdays++;
        }
        return weekdays;
        }
        var weekdays = getWeekdaysInMonth(getMonth, getYear);
        document.getElementById("part2").innerHTML+="Weekdays: "+weekdays;
        document.getElementById("part2").innerHTML+="</br>";
        var salary=prompt("Please enter hourly wage");
        document.getElementById("part2").innerHTML+="Salary:$"+salary;
        document.getElementById("part2").innerHTML+="</br>";
        salary=salary*weekdays;
        document.getElementById("part2").innerHTML+="Pay:$"+salary;

       function calcFutureValue(principal,rate,year){
      
           var monthlyRate=(rate/12)/100;
           var months =years*12;
           var futureValue=0;
           for(var i=0;i<months;i++){
futureValue=(futureValue+principal)*(1+monthlyRate);
           }
if(principal<=0){
throw "incipal value must be greater than zero";


}
if(rate<=0){


throw "ate value must be greater than zero";

}
if(year<=0){

throw "rs value must be greater than zero";

}
return Number(futureValue).toFixed(2);

        }
       var investment=10;
      var  annualRate=4;
       var years=5;
        try {
            document.getElementById("part2-1").innerHTML+="The future Value is: "+calcFutureValue(investment,annualRate,years);
            document.getElementById("part2-1").innerHTML+="</br>";
        investment=12;
        annualRate=4;
        years=5;
        document.getElementById("part2-1").innerHTML+="The future Value is: "+calcFutureValue(investment,annualRate,years);
        document.getElementById("part2-1").innerHTML+="</br>";
            investment=0;
            annualRate=4;
            years=5;
            document.getElementById("part2-1").innerHTML+="The future Value is: "+calcFutureValue(investment,annualRate,years);
            document.getElementById("part2-1").innerHTML+="</br>";
          }
       catch(e){
        document.getElementById("part2-1").innerHTML+=e;
           console.log(e);
       }
