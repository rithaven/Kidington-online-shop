var allCost = [];
function OrderCloth(cloth,taille,quantity) {
    this.cloth = cloth;
    this.taille = taille;
    this.quantity = quantity ;
    this.clothPrice = 0;
}
OrderCloth.prototype.clothCost = function () {
    if (this.cloth === "Ceremony Dress") {
        this.clothPrice += 30;
    } else if (this.cloth === "Casual Dress") {
        this.clothPrice += 20;
    } else if (this.cloth === "Wedding Dress") {
        this.clothPrice += 50;
    } else if (this.cloth === "Sun Dress") {
        this.clothPrice += 10;
    } else if (this.cloth === "Casual Skirt") {
        this.clothPrice += 20;
    } else if (this.cloth === "Ceremony Skirt") {
        this.clothPrice += 10;
    } else if (this.cloth === "Casual Pants") {
        this.clothPrice += 20;
    } else if (this.cloth === "Sports Pants") {
        this.clothPrice += 30;
    } else if (this.cloth === "Jeans Pants") {
        this.clothPrice += 20;
    } else if (this.cloth === "Casual Shorts") {
        this.clothPrice += 10;
    } else if (this.cloth === "Sports Shorts") {
        this.clothPrice += 20;
    } else if (this.cloth === "Jeans Shorts") {
        this.clothPrice += 10;
    } else if (this.cloth === "Singlet") {
        this.clothPrice += 5;
    } else if (this.cloth === "Blouse") {
        this.clothPrice += 10;
    } else if (this.cloth === "Cotton") {
        this.clothPrice += 10;
    } else if (this.cloth === "Jeans Jackets") {
        this.clothPrice += 30;
    } else if (this.cloth === "Rain Jacket") {
        this.clothPrice += 20;
    } else if (this.cloth === "Jumpers") {
        this.clothPrice += 20;
    } else if (this.cloth === "Sweats") {
        this.clothPrice += 10;
    } else if (this.cloth === "Wedding Shoes") {
        this.clothPrice += 40;
    } else if (this.cloth === "Casual Shoes") {
        this.clothPrice += 20;
    } else if (this.cloth === "Sports Shoes") {
        this.clothPrice += 30;
    }else if (this.cloth === "Barllene") {
        this.clothPrice += 20;
    } if (this.taille === "4-5 years") {
        this.clothPrice;
    } else if (this.taille === "6-8 years") {
        this.clothPrice;
    } else if (this.taille === "9-10 years") {
        this.clothPrice;
    } else if (this.taille === "10-12 years") {
        this.clothPrice;
}
return this.clothPrice;

}

OrderCloth.prototype.finalCost = function () {
    var totalPrice = 0;
    for (var i = 0; i < allCost.length; i ++) {
      TotalPrice += allCost[i];
    }
    return totalPrice;
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

     //ordering processes
     $("#cart").click(function () {
        var clothes = $("select#cloth").val();
        var tailles = $("select#taille").val();
        var quantities = parseInt($("input#quantity").val());
        var clothesDetails = (clothes);
        var tailleDetails = (tailles);

        var price = new OrderCloth(clothes,tailles,quantities);
        price.clothCost();
        var cost = price.quantity*price.clothPrice;
        $("#clothDetails").show();
        $("#totalPrice").text(cost);
        $("#clothesDetails").text(price.clothPrice);
        $("#quantityDetails").text(price.quantity);
        $("#brand").append("<p>" + "Brand: " + clothesDetails + "</p>");
        $("#tailleDetails").append("<p>"+ "Range" + ":" + " " + tailleDetails + "</p>");
        $("#clothes, #tailles, #quantities").val(" ");
    });

})