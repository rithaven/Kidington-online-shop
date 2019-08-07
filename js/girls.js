$(document).ready(function () {
    //click on Dresses&Skirts link
    $(".nav-link#skirts").click(function () {
        $("#background").hide();
        $("#pants").hide();
        $("#shirt").hide();
        $("#sweats").hide();
        $("#shoes").hide();
        $("#dresses").show();
    });

    //click on Pants&Shorts link
    $(".nav-link#shorts").click(function () {
        $("#background").hide();
        $("#dresses").hide();
        $("#shirt").hide();
        $("#sweats").hide();
        $("#shoes").hide();
        $("#pants").show();
    });

    //click on T-shirt&Shirt link
    $(".nav-link#Tshirt").click(function () {
        $("#background").hide();
        $("#dresses").hide();
        $("#sweats").hide();
        $("#pants").hide();
        $("#shoes").hide();
        $("#shirt").show();
    });
     //click on Sweats&Jackets link
     $(".nav-link#jackets").click(function () {
        $("#background").hide();
        $("#dresses").hide();
        $("#shirt").hide();
        $("#shoes").hide();
        $("#pants").hide();
        $("#sweats").show();
    });

    //click on Shoes link
    $(".nav-link#inkweto").click(function () {
        $("#background").hide();
        $("#dresses").hide();
        $("#sweats").hide();
        $("#pants").hide();
        $("#shirt").hide();
        $("#shoes").show();
    });

    //hover over image to get information
    // $('#dress1').hover( function() {
    //     $(this).find('#add').fadeIn(300);
    // }, function() {
    //     $(this).find('#add').fadeOut(100);
    // });

     //Add to cart
     //dress sections
     $("#dress1").click(function () {
        $("#showCart").show();
        $("#image1").show();
        $("#dresses").hide();
    });

    $("#back").click(function () {
        location.reload();
        // $("#items").hide();
        // $("#background").show();
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