$(document).ready(function() {  
    $("#ajax_form button").click(function(event) {
        event.preventDefault(); 
        $.ajax({
            method:"GET",
            url: "https://randomuser.me/api/"
        })
        .done(function(msg){
          var input = $('#fname').val(); //get fname(input)
          var item = '<div class="arrow_box"><h1 class="bubble">' + input + '</div></h1>'; //Chatbot's Bubble(reply); //User's Bubble(input)     
          console.log(item);
          $('.Window').append(item); //append user's bubble

          var reply = 'Hello Hello Hello'   //String for system 
          var item2 = '<div class="arrow_box1"><h1 class="bubble">' + reply + '</div></h1>'; //Chatbot's Bubble(reply)  
          console.log(item2);
          $('.Window').append(item2); //append chatbot's bubble

          var div = document.getElementById('window');  
          div.scrollTop = div.scrollHeight; //auto scroll to bottom
      });
    });
}); 