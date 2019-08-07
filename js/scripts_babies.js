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
});