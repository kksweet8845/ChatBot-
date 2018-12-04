$(document).ready(function() {  
    $("#ft1").click(function(event) {
        event.preventDefault();
        $(".text p").removeClass("bubble2").removeClass("bubble3"); 
        $(".text p").addClass("bubble1");
    });

    $("#ft2").click(function(event) {
        event.preventDefault(); 
        $(".text p").removeClass("bubble1").removeClass("bubble3"); 
        $(".text p").addClass("bubble2");
    });

    $("#ft3").click(function(event) {
        event.preventDefault();
        $(".text p").removeClass("bubble1").removeClass("bubble2");
   		$(".text p").addClass("bubble3")
    });

    $("#ft4").click(function(event) {
        event.preventDefault(); 
        $(".text p").removeClass("bubble5");
        $(".text p").addClass("bubble4");
    });

    $("#ft5").click(function(event) {
        event.preventDefault(); 
        $(".text p").removeClass("bubble4");
        $(".text p").addClass("bubble5");
    });
});



