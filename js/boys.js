$(document).ready(function() {
    //click on T-shirts
    $("#t-shirt").click(function() {
        $("#background").hide();
        $("#pants").hide();
        $("#shorts").hide();
        $("#strends").hide();
        $("#shoes").hide();
        $("#coats").hide();
        $("#shirts").hide();
        $("#t-hirts").show();
    });
    //click on Shirts
    $("#shirt").click(function() {
        $("#background").hide();
        $("#t-hirts").hide();
        $("#shorts").hide();
        $("#coats").hide();
        $("#trends").hide();
        $("#pants").hide();
        $("#shoes").hide();
        $("#shirts").show();
    });
    //click on Shorts
    $("#short").click(function() {
        $("#background").hide();
        $("#t-hirts").hide();
        $("#shirts").hide();
        $("#pants").hide();
        $("#shorts").hide();
        $("#trends").hide();
        $("#shoes").hide();
        $("#shorts").show();
    });
    //click on Pants
    $("#pant").click(function() {
        $("#background").hide();
        $("#t-hirts").hide();
        $("#shirts").hide();
        $("#coats").hide();
        $("#shorts").hide();
        $("#trends").hide();
        $("#shoes").hide();
        $("#pants").show();
    });
    //click on Coats
    $("#coat").click(function() {
        $("#background").hide();
        $("#t-hirts").hide();
        $("#shirts").hide();
        $("#pants").hide();
        $("#shorts").hide();
        $("#trends").hide();
        $("#shoes").hide();
        $("#coats").show();
    });
    //click on Trends
    $("#trend").click(function() {
        $("#background").hide();
        $("#t-hirts").hide();
        $("#shirts").hide();
        $("#pants").hide();
        $("#shorts").hide();
        $("#coats").hide();
        $("#shoes").hide();
        $("#trends").show();
    });
    //click on Shoes
    $("#shoe").click(function() {
        $("#background").hide();
        $("#t-hirts").hide();
        $("#shirts").hide();
        $("#pants").hide();
        $("#shorts").hide();
        $("#trends").hide();
        $("#coats").hide();
        $("#shoes").show();
    });

    //Add to cart
    //dress sections
    $("#img1").click(function () {
       $("#showCart").show();
       $("#image1").show();
       $("#t-hirts").hide();
   });
   $("#back").click(function () {
       location.reload();
   });
   $("#dress2").click(function () {
       $("#showCart").show();
       $("#image2").show();
       $("#dresses").hide();
   });
   $("#dress3").click(function () {
       $("#showCart").show();
       $("#image3").show();
       $("#dresses").hide();
   });
   $("#dress4").click(function () {
       $("#showCart").show();
       $("#image4").show();
       $("#dresses").hide();
   });
   $("#dress5").click(function () {
       $("#showCart").show();
       $("#image5").show();
       $("#dresses").hide();
   });
})