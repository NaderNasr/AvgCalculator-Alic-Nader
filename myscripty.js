$(document).ready(function(){


 var sum=0

     $("#b1").click(function(){
     	
var m=parseInt(($("#"+num).val()))
     	conuter();
     var text = $("<label> subject # "+num+" "+" "+" </label><input type='text' id='"+num+"' > <br>")
     
      sum=sum+m

   
     text.appendTo("body");
    
});
     $("#res").click(function(){

     	alert(sum/num)
       text.appendTo("body");
     });


var num=0
function conuter(){
	num++

 if(num>10)
     {
     	alert("10 JUST YA BABY :*");
       return
     }
     return num
}




 



















});