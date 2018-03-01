  

  $(document).ready(function(){
   var t=this

    var sum=0
    var num = 0
    var k=0
     

      function counter(){
      num = num + 1
        if(num>15){
          alert("15 Subjects Allowed");
            return
      }
        return num;
      }


      $("#res").click(function(){
       
          num = num - 1
            sum = sum 
          //  alert(k)
              alert(sum/num)
                location.reload()

      });

      $("#b1").click(function(){
       
      var m = parseInt(($("#"+ num).val()))
      counter();
      var text = $("<label> Grade # "+num+" "+" "+" </label><input type='text' id='"+num+"' > <br></br>")

        $('#'+num).keyup(function(){
             k=parseInt(($("#"+ num).val()))

     })

     sum = sum+m
      text.appendTo("body");
    });


    
     
     

    // $("#sub").click(function(){
    //   var text2 = $("<label> Subject "+num+" "+" "+" </label><input type='text' id='"+num+"' > <br></br>")
    //   text2.appendTo("body");
    // });



        // function counting (){

      //}

});
