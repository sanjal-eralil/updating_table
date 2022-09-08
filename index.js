/*global console,$,document*/
/*eslint-disable no-console*/

var row=1;

 var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);

function displayDetails(){
  var name= document.getElementById("name").value;
  var phone= document.getElementById("phone").value;
  var area= document.getElementById("area").value;
  var quantity=document.getElementById("quantity").value;

if(!name || !area|| !phone){
  alert("Please fill all the details");
  return;
}
var display= document.getElementById("display");
var newRow=display.insertRow(row);

 var cell1=newRow.insertCell(0);
 var cell2=newRow.insertCell(1);
 var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);

cell1.innerHTML=name;
cell2.innerHTML=area;
cell3.innerHTML=phone;
cell4.innerHTML=quantity;


  row++;
}

/*var row=1;
var entry=document.getElementById("entry");
entry.addEventListener("click",display);

function display(){

  var name=document.getElementById("name").value;
  var quantity=document.getElementById("quantity").value;
  var phone_no=document.getElementById("phone_no").value;
  var area=document.getElementById("area").value;
  var time=getTime();
  alert(quantity);


if(!name||!quantity||!phone_no||!area){
  alert("Please fill in all the details");
  return;
}

var show=document.getElementById("show");
var newRow=show.insertRow(row);

 var cell1=newRow.insertCell(0);
 var cell2=newRow.insertCell(1);
 var cell3=newRow.insertCell(2);
 var cell4=newRow.insertCell(3);
 var cell5=newRow.insertCell(4);


 cell1.innerHTML=name;
 cell2.innerHTML=quantity;
 cell3.innerHTML=phone_no;
 cell4.innerHTML=area;
 cell5.innerHTML=time;

 row++;

}*/
