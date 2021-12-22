$(document).ready(function(){

    $("#portfolio .container .second").hide();
    $("#portfolio .container .third").hide();
    $("#portfolio .nav .first").css({"background-color" : "black" , "color" : "#fff"})

    $("#portfolio .nav .first").click(function(e){
        e.preventDefault();
        $("#portfolio .container .second").hide();
        $("#portfolio .container .third").hide();
        $("#portfolio .container .first").show();
        $("#portfolio .nav .first").css({"background-color" : "black" , "color" : "#fff"});
        $("#portfolio .nav .second").css({"background-color" : "" , "color" : ""});
        $("#portfolio .nav .third").css({"background-color" : "" , "color" : ""});
    
    })

    $("#portfolio .nav .second").click(function(e){
        e.preventDefault();
        $("#portfolio .container .first").hide();
        $("#portfolio .container .third").hide();
        $("#portfolio .container .second").show();
        $("#portfolio .nav .first").css({"background-color" : "" , "color" : ""});
        $("#portfolio .nav .second").css({"background-color" : "black" , "color" : "#fff"});
        $("#portfolio .nav .third").css({"background-color" : "" , "color" : ""});

    })

    $("#portfolio .nav .third").click(function(e){
        e.preventDefault();
        $("#portfolio .container .first").hide();
        $("#portfolio .container .second").hide();
        $("#portfolio .container .third").show();
        $("#portfolio .nav .first").css({"background-color" : "" , "color" : ""});
        $("#portfolio .nav .second").css({"background-color" : "" , "color" : ""});
        $("#portfolio .nav .third").css({"background-color" : "black" , "color" : "#fff"});
        
    })
});