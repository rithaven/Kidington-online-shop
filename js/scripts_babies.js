$(document).ready(function () {
    $("#dress").click(function () {
        $(".products").hide();
        $("#overalls").show();
        $("#pants").hide();
        $("#shirts").hide();
        $("#sweats").hide();
        $("#socks").hide();
        $("#cradles").hide();
    });
    $("#pant").click(function () {
        $(".products").hide();
        $("#overalls").hide();
        $("#pants").show();
        $("#shirts").hide();
        $("#sweats").hide();
        $("#socks").hide();
        $("#cradles").hide();
    });
    $("#shirt").click(function () {
        $(".products").hide();
        $("#overalls").hide();
        $("#pants").hide();
        $("#shirts").show();
        $("#sweats").hide();
        $("#socks").hide();
        $("#cradles").hide();
    });
    $("#jacket").click(function () {
        $(".products").hide();
        $("#overalls").hide();
        $("#pants").hide();
        $("#shirts").hide();
        $("#sweats").show();
        $("#socks").hide();
        $("#cradles").hide();
    });
    $("#shoe").click(function () {
        $(".products").hide();
        $("#overalls").hide();
        $("#pants").hide();
        $("#shirts").hide();
        $("#sweats").hide();
        $("#socks").show();
        $("#cradles").hide();
    });
    $("#cradle").click(function () {
        $(".products").hide();
        $("#overalls").hide();
        $("#pants").hide();
        $("#shirts").hide();
        $("#sweats").hide();
        $("#socks").hide();
        $("#cradles").show();
    });
    $("#dress0").click(function () {
        $("#showCart").show();
        $("#image0").show();
        $("#dresses").hide();
    });
    $("#back").click(function () {
        location.reload();
    });
    $("#dress1").click(function () {
        $("#showCart").show();
        $("#image1").show();
        $("#dresses").hide();
    });
    $("#dress2").click(function () {
        $("#showCart").show();
        $("#image2").show();
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
});