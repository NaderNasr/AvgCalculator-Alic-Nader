  $(document).ready(function(){


    var sum=0

    $("#b1").click(function(){

      var m=parseInt(($("#"+num).val()))
      conuter();
      var text = $("<label> Grade # "+num+" "+" "+" </label><input type='text' id='"+num+"' > <br></br>")
      var text2 = $("<label> Subject "+num+" "+" "+" </label><input type='text' id='"+num+"' > <br></br>").style('position': 'center')
      sum=sum+m
      text.appendTo("body");
      text2.appendTo("body");

    });
      $("#res").click(function(){

        alert(sum/num)
        text.appendTo("body");
      });


        var num=0
        function conuter(){
	      num++
        if(num>15){
        alert("15 Subjects Allowed");
        return
        }
        return num
        }
























});
