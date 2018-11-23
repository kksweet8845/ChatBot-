$(document).ready(function() {  
    $("#ajax_form button").click(function(event) {
        event.preventDefault(); 
         var fname = $('#fname').val(); //get fname(input)
        $.ajax({
            method:"GET",
            url: "https://randomuser.me/api/"
        })
        .done(function(msg){
          var item =""; //User's Bubble(input)
          var item2 =""; //Chatbot's Bubble(reply)
          item2 = '<div class="arrow_box1"><h1 class="bubble">' + 'hello' + '</div></h1>';         
          var row = Math.floor(fname.length/12); //row number in one bubble
          if(fname.length!=0){
            for(var i=0;i<row+1;i++){
              var temp = fname.substr(i*12,12); //split string
              if(i==0){ 
                item += '<div class="arrow_box"><h1 class="bubble">' + temp;
                if(row!=0) item += '<br/>';
              }
              else if(i!=row) item += temp + '<br/>';
              else item += temp ;
            }
            item += '</div></h1>';
            console.log(item);
            console.log(item2);
            $('.Window').append(item); //append user's bubble
            $('.Window').append(item2); //append chatbot's bubble

            var div = document.getElementById('window');  
            div.scrollTop = div.scrollHeight; //auto scroll to bottom
          }
      });
    });
}); 