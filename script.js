function print(x){
document.getElementById("toshow").innerHTML=x+"%";

}
function check(x){
if(x<0)
alert("please enter a positive number");
}
function calculate(){
var principal1=document.getElementById("amt").value;
var years1=document.getElementById("year").value;
var intamt=document.getElementById("interest").value;
if(principal1==null||principal1==0){
alert("please enter an positive number ");
}
else{
var interests=principal1*(years1*(intamt/100));
interests=interests.toFixed(2);
var year=new Date().getFullYear()+parseInt(years1);
document.getElementById("toprint").innerHTML= "If you deposit "+principal1+","+"<br>"+"at an interest rate of "+ intamt+"."+"<br>"+"You will receive an amount of "+interests+"<br>"+"in the year "+year+".";

}}
        
