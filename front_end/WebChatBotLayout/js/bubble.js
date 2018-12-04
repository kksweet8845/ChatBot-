
$(document).ready(function() {  
    $("#ajax_form button").click(function(event) {
        event.preventDefault(); 
        $.ajax({
            method:"GET",
            url: "https://randomuser.me/api/"
        })
        .done(function(msg){
          var input = $('#fname').val(); //get fname(input)
          var len1 = input.length;
          var row = Math.floor(len1/30+1);
          var str1 = "";
          for(var i=0;i<row;i++){
            var temp = input.substr(30*i,30);
            str1 += temp;
            if(i!=row) str1 += '<br>';
          }
          input = str1;

          var item = '<div class="cu chat" data-style="telegram"><div class="message text right"><!-- 大頭貼 --><div class="avatar"><img src="https://i.imgur.com/6oTWGHZ.png"/></div><!-- 內容 --><div class="content"><!-- 傳訊者 --><div class="author">ChatBot</div><!-- 文字 --><div class="text"><p>' + input + '</p></div><!-- 中繼資料 --><div class="meta"><div class="item">13:20</div></div></div></div></div>'; //User's Bubble(input)       
          
          console.log(item);
          $('.Window').append(item); //append user's bubble

          var reply = 'Hello Hello Hello'   //String for system
          var len2 = reply.length;
          var row2 = Math.floor(len2/30+1);
          str1 = "";
          for(var i=0;i<row2;i++){
            var temp = reply.substr(30*i,30);
            str1 += temp;
            if(i!=row2) str1 += '<br>';
          }
          reply = str1;

          var item2 = '<div class="cu chat" data-style="telegram"><div class="message text"><!-- 大頭貼 --><div class="avatar"><img src="https://i.imgur.com/6oTWGHZ.png"/></div><!-- 內容 --><div class="content"><!-- 傳訊者 --><div class="author">ChatBot</div><!-- 文字 --><div class="text"><p>' + reply + '</p></div><!-- 中繼資料 --><div class="meta"><div class="item">13:20</div></div></div></div></div>'; //Chatbot's Bubble(reply); 
          console.log(item2);
          $('.Window').append(item2); //append chatbot's bubble


          var div = document.getElementById('window');  
          div.scrollTop = div.scrollHeight; //auto scroll to bottom
      });
    });
}); 