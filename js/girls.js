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
})