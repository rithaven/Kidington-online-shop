//ordering processes

// var clothes = $("select#cloth").val();
// var tailles = $("select#taille").val();
// var quantities = $("select#quantity").val();
// var clothCost = 0;
var totalPrice = [];
function OrderCloth(cloth) {
    this.cloth = cloth;
    this.quantity = [];
    this.clothPrice = 0;
}
OrderCloth.prototype.clothCost = function () {
    if (this.cloth === "one") {
        this.clothPrice += 30;
    } else if (this.cloth === "two") {
        this.clothPrice += 20;
    } else if (this.cloth === "three") {
        this.clothPrice += 50;
    } else if (this.cloth === "four") {
        this.clothPrice += 10;
    } else if (this.cloth === "five") {
        this.clothPrice += 20;
    } else if (this.cloth === "six") {
        this.clothPrice += 10;
    } else if (this.cloth === "seven") {
        this.clothPrice += 20;
    } else if (this.cloth === "eight") {
        this.clothPrice += 30;
    } else if (this.cloth === "nine") {
        this.clothPrice += 20;
    } else if (this.cloth === "ten") {
        this.clothPrice += 10;
    } else if (this.cloth === "eleven") {
        this.clothPrice += 20;
    } else if (this.cloth === "twelve") {
        this.clothPrice += 10;
    } else if (this.cloth === "twenty") {
        this.clothPrice += 5;
    } else if (this.cloth === "thirty") {
        this.clothPrice += 10;
    } else if (this.cloth === "fourty") {
        this.clothPrice += 10;
    } else if (this.cloth === "fifty") {
        this.clothPrice += 30;
    } else if (this.cloth === "sixty") {
        this.clothPrice += 20;
    } else if (this.cloth === "seventy") {
        this.clothPrice += 20;
    } else if (this.cloth === "eighty") {
        this.clothPrice += 10;
    } else if (this.cloth === "ninety") {
        this.clothPrice += 40;
    } else if (this.cloth === "hundred") {
        this.clothPrice += 20;
    } else if (this.cloth === "million") {
        this.clothPrice += 30;
    }
}
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

    //Add to cart
    //dress sections
    $("#dress1").click(function () {
        $("#showCart").show();
        $("#image1").show();
        $("#dresses").hide();
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
    $("#dress6").click(function () {
        $("#showCart").show();
        $("#image6").show();
        $("#dresses").hide();
    });

    //Pants sections
    $("#pant1").click(function () {
        $("#showCart").show();
        $("#image7").show();
        $("#pants").hide();
    });
    $("#pant2").click(function () {
        $("#showCart").show();
        $("#image8").show();
        $("#pants").hide();
    });
    $("#pant3").click(function () {
        $("#showCart").show();
        $("#image9").show();
        $("#pants").hide();
    });

    //Shorts sections
    $("#shorts1").click(function () {
        $("#showCart").show();
        $("#image10").show();
        $("#pants").hide();
    });
    $("#shorts2").click(function () {
        $("#showCart").show();
        $("#image11").show();
        $("#pants").hide();
    });
    $("#shorts3").click(function () {
        $("#showCart").show();
        $("#image12").show();
        $("#pants").hide();
    });

    //Shirts sections
    $("#blouse1").click(function () {
        $("#showCart").show();
        $("#image13").show();
        $("#shirt").hide();
    });
    $("#blouse2").click(function () {
        $("#showCart").show();
        $("#image14").show();
        $("#shirt").hide();
    });
    $("#blouse3").click(function () {
        $("#showCart").show();
        $("#image15").show();
        $("#shirt").hide();
    });

    //Jackets sections
    $("#jumper1").click(function () {
        $("#showCart").show();
        $("#image16").show();
        $("#sweats").hide();
    });
    $("#jumper2").click(function () {
        $("#showCart").show();
        $("#image17").show();
        $("#sweats").hide();
    });
    $("#jumper3").click(function () {
        $("#showCart").show();
        $("#image18").show();
        $("#sweats").hide();
    });
    $("#jumper4").click(function () {
        $("#showCart").show();
        $("#image19").show();
        $("#sweats").hide();
    });

    //Shows sections
    $("#shoe1").click(function () {
        $("#showCart").show();
        $("#image20").show();
        $("#shoes").hide();
    });
    $("#shoe2").click(function () {
        $("#showCart").show();
        $("#image21").show();
        $("#shoes").hide();
    });
    $("#shoe3").click(function () {
        $("#showCart").show();
        $("#image22").show();
        $("#shoes").hide();
    });
    $("#shoe4").click(function () {
        $("#showCart").show();
        $("#image23").show();
        $("#shoes").hide();
    });

})