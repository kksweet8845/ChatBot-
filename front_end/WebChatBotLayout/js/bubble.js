$(document).ready(function() {  
    $("#ajax_form button").click(function(event) {
        event.preventDefault(); 
        $.ajax({
            method:"POST",
            url: '/testQuest',
            data:{
              userQ: $('#fname').val() 
            },
            success: reply
        })
    });

    var reply = (data)=>{
        var input = $('#fname').val();
        var item = '<div class="arrow_box"><h1 class="bubble">'+ input + '</h1></div>';
        
        $('.Window').append(item);
        
        var reply = data;
        var item2 = '<div class="arrow_box1"><h1 class="bubble">' + reply + '</h1></div>';

        $('.Window').append(item2);

          var div = document.getElementById('window');
          div.scrollTop = div.scrollHeight;
    }
}); 
