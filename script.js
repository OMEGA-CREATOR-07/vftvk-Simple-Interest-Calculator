function print(x){
document.getElementById("toshow").innerHTML=x+"%";

}
function check(){
      var princiamt=document.get.ElementById("amt").value;
        if(princiamt<0){
                alert("please enter a positive number");
        }
}
function calculate(){
var principal1=document.getElementById("amt").value;
var years1=document.getElementById("year").value;
var intamt=document.getElementById("interest").value;
var interests=principal1*(years1*(intamt/100));
interests=interests.toFixed(2);
var year=2020+parseInt(years1);
document.getElementById("toprint").innerHTML= "If you deposit "+principal1+"<br>"+",at an interest rate of "+intamt+"%."+"<br>"+"You will receive "+interests+"<br>"+ ",in the year "+year+".";
return 0;
}
        
