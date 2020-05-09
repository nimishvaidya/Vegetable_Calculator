//Start of item1
function add1() {
var add1=document.getElementById("val1").value;
add1=parseInt(add1);
var add2=document.getElementById("quantity1").value;
add2=parseInt(add2);
var add3=(add1/1000)*add2;
document.getElementById("total1").value=add3;    
totalAll();
}

function sub1() {
var sub1=document.getElementById("val1").value;
sub1=parseInt(sub1);
var sub2=document.getElementById("quantity1").value;
sub2=parseInt(sub2);
var sub3=(sub1/1000)*sub2;
document.getElementById("total1").value=sub3; 
totalAll();
}
        
function qa1(){
var qa1 = document.getElementById("quantity1").value;
qa1=parseInt(qa1);
qa1=qa1+250;
qa1=Math.round(qa1);    
document.getElementById("quantity1").value=qa1;  
add1();    
}

function qa1kg(){
var qa1kg = document.getElementById("quantity1").value;
qa1kg=parseInt(qa1kg);
qa1kg=qa1kg+1000;
qa1kg=Math.round(qa1kg);    
document.getElementById("quantity1").value=qa1kg;  
add1();    
}   
        
function qs1(){
var qs1 = document.getElementById("quantity1").value;
qs1=parseInt(qs1);
qs1=qs1-250;
document.getElementById("quantity1").value=qs1;  
sub1();    
}                   
//end of item1
//Start of item2
function add2() {
var add1=document.getElementById("val2").value;
add1=parseInt(add1);
var add2=document.getElementById("quantity2").value;
add2=parseInt(add2);
var add3=(add1/1000)*add2;
document.getElementById("total2").value=add3; 
totalAll();
}

function sub2() {
var sub1=document.getElementById("val2").value;
sub1=parseInt(sub1);
var sub2=document.getElementById("quantity2").value;
sub2=parseInt(sub2);
var sub3=(sub1/1000)*sub2;
document.getElementById("total2").value=sub3; 
totalAll();
}
        
function qa2(){
var qa1 = document.getElementById("quantity2").value;
qa1=parseInt(qa1);
qa1=qa1+250;
qa1=Math.round(qa1);    
document.getElementById("quantity2").value=qa1;  
add2();    
}

function qa2kg(){
var qa1kg = document.getElementById("quantity2").value;
qa1kg=parseInt(qa1kg);
qa1kg=qa1kg+1000;
qa1kg=Math.round(qa1kg);    
document.getElementById("quantity2").value=qa1kg;  
add2();    
}   
        
function qs2(){
var qs1 = document.getElementById("quantity2").value;
qs1=parseInt(qs1);
qs1=qs1-250;
document.getElementById("quantity2").value=qs1;  
sub2();    
}                   
//end of item2

//start of Sitem1
function sadd1() {
var add1=document.getElementById("sval1").value;
add1=parseInt(add1);
var add2=document.getElementById("squantity1").value;
add2=parseInt(add2);
var add3=add1*add2;
document.getElementById("stotal1").value=add3;    
totalAll();
}

function ssub1() {
var sub1=document.getElementById("sval1").value;
sub1=parseInt(sub1);
var sub2=document.getElementById("squantity1").value;
sub2=parseInt(sub2);
var sub3=sub1*sub2;
document.getElementById("stotal1").value=sub3;
totalAll();
}
        
function sqa1(){
var qa1 = document.getElementById("squantity1").value;
qa1=parseInt(qa1);
qa1=qa1+1;
qa1=Math.round(qa1);    
document.getElementById("squantity1").value=qa1;  
sadd1();    
}

        
function sqs1(){
var qs1 = document.getElementById("squantity1").value;
qs1=parseInt(qs1);
qs1=qs1-1;
document.getElementById("squantity1").value=qs1;  
ssub1();    
}                   
//end of Sitem1

function totalAll(){
var z1=document.getElementById("total1").value;
z1=parseInt(z1);
var z2=document.getElementById("total2").value;
z2=parseInt(z2);
var sz1=document.getElementById("stotal1").value;
sz1=parseInt(sz1);    
var zn=z1+z2+sz1;    
document.getElementById("totalAll").value=zn;
}