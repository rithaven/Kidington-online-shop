$(document).ready(function(){
    //click on Dresses&Skirts
    $(".nav-link#skirts").click(function(){
        $("#background").hide();
        $("#dresses").show();
      });

      $(".nav-link#skirts").click(function(){
        $("#pants").hide();
        // $("#dresses").show();
      });
//click on Pants&Shorts
      $(".nav-link#shorts").click(function(){
        $("#background").hide();
        $("#dresses").hide();
        $("#pants").show();
      });
      //click on T-shirt&Shirt
})