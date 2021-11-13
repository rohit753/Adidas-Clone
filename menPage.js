var shop = document.getElementById("containerA");
shop.addEventListener("click", shopA);
function shopA() {
  window.location.href = "product1Page.html";
}

// Bhavani Code-----------------------------------------------------------------------------------------------

var data = [
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/36ae5118ee9b43818a94ad4e018774b6_9366/Forum_84_Low_ADV_Shoes_Beige_GX6393_01_standard.jpg",
    price: "₹14,999.00",
    name: "Form 84 Low ADV Shoes",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/87ff2c0e492347f890bead4400ec5ad7_9366/Face_Cover_-_Not_For_Medical_Use_Black_HC4698_21_model.jpg",
    price: "₹999.00",
    name: "Face Cover-Not for Medical Use",
    type: "Originals",
    sys: "3-pack",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bea13ab65d384ae2b614ad3300f493d0_9366/SST_AEC_SUPEREARTH_SW_Black_GX3823_01_standard.jpg",
    price: "₹5,999.00",
    name: "SST AEC SUPEREARTH SW",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/20c0a73f8c434ad58e43a888014104e0_9366/3MC_Vulc_Shoes_Black_B22713_01_standard.jpg",
    price: "₹10,999.00",
    name: "3MC Vulc Shoes",
    type: "Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c6f0aede76f849a18a27a91500a0c8c9_9366/Continental_80_Shoes_Black_G27707_01_standard.jpg",
    price: "₹7,999.00",
    name: "Continental 80 Shoes",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e4b975c9fd1c4f7ebd2cadac009d8b7c_9366/Face_Covers_-_Not_For_Medical_Use_Black_HC4703_21_model.jpg",
    price: "₹999.00",
    name: "Face Covers-Not For Medical Use",
    type: "Men Originals",
    sys: "3-pack",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/06cc4cd0c5004c728b14acd100e53c40_9366/Continental_80_Shoes_White_GV7669_01_standard.jpg",
    price: "₹1,499.00",
    name: "Continental 80 Shoes",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/14b3ab3966f74d71b241ad79013eac05_9366/Face_Covers_-_Not_For_Medical_Use_Black_HC4704_21_model.jpg",
    price: "₹9,999.00",
    name: "Face Covers-Not For Medical Use",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/62a00a0ba8a9422a9a6aad4400eca692_9366/Face_Cover_-_Not_For_Medical_Use_Blue_HC4699_21_model.jpg",
    price: "₹6,599.00",
    name: "Face Covers-Not For Medical Use",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/46a4b3dafd474fb592aaad4100324a21_9366/Stan_Smith_Vulc_Shoes_Black_GY4934_01_standard.jpg",
    price: "₹999.00",
    name: "Stan Smith Vulc Shoes",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/41d72ae2b6a24f8991b1ac7700fca4f2_9366/Supercourt_Stripes_Shoes_Grey_FX5719_01_standard.jpg",
    price: "₹13,999.00",
    name: "Supercourt Stripes Shoes",
    type: "Men Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0500ef7e58b34102bf2dad5100edc444_9366/Arsenal_ZX_2K_Boost_2.0_Shoes_Blue_GY3512_01_standard.jpg",
    price: "₹7,999.00",
    name: "Arsenal ZX 2K Boost 2.0 Shoes",
    type: "Men Originals",
    sys: "new",
  },
];
var array = [
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/8dc686a072d2469e91e8ab4a009b3c9e_9366/fluidstreet-shoes.jpg",
    name: "SNEAKERS",
    href: "product1Page.html",
  },
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/057faba97b424f2f9fc7ada4007e0c06_9366/classic-pants.jpg",
    name: "PANTS",
    href: "product1Page.html",
  },
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3fefcf42dbd04a619f0dadaf0138f50a_9366/m-cb-fz-hd.jpg",
    name: "HOODIES & SWEATSHIRTS",
    href: "product1Page.html",
  },
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/30a9334ba7a344788411ac7800f6159f_9366/essentials-big-logo-tee.jpg",
    name: "TOPS",
    href: "product1Page.html",
  },
];
var string = [
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0965ff0dfe864a9da775ac770105e71e_9366/FX5719_00_plp_standard.jpg",
    type: "Supercourt Stripes Shoes",
    sys: "Originals",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/de426da19e2241589fc4ad3300f4f08e_9366/GX3823_00_plp_standard.jpg",
    type: "SST AEC SUPEREARTH SW",
    sys: "Originals",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/87ff2c0e492347f890bead4400ec5ad7_9366/HC4698_21_model.jpg",
    type: "Face Cover-Not For Medical Use",
    sys: "Originals",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b497119b13824571bf1cabb20120469d_9366/H13185_01_laydown.jpg",
    type: "Face Cover-Not For Medical Use",
    sys: "Sportswear",
  },
];
display();
function display() {
  var main = document.getElementById("headB3");
  array.map(function (i) {
    var div1 = document.createElement("div");
    var img1 = document.createElement("img");
    img1.setAttribute("src", i.image);
    img1.addEventListener("click", href);
    var divsub1 = document.createElement("div");
    var a1 = document.createElement("a");
    a1.textContent = i.name;
    a1.setAttribute("href", i.href);
    divsub1.append(a1);
    div1.append(img1, divsub1);
    main.append(div1);
    function href() {
      window.location.href = "product1Page.html";
    }
  });
}

webpage();
function webpage() {
  var sub = document.getElementById("originalsB");
  data.map(function (item) {
    var d1 = document.createElement("div");
    var ds1 = document.createElement("div");
    var im1 = document.createElement("img");
    im1.setAttribute("src", item.img);

    ds1.append(im1);

    var ds2 = document.createElement("div");
    ds2.setAttribute("id", "info");
    var toFav = document.createElement("button");
    toFav.setAttribute("id", "btnh1A");
    toFav.setAttribute("class", "btnA");
    toFav.innerText = "♡";
    var priceA = document.createElement("h4");
    priceA.textContent = item.price;
    priceA.setAttribute("class", "priceTag");

    var p2 = document.createElement("p");
    p2.textContent = item.name;
    var p3 = document.createElement("p");
    p3.textContent = item.type;
    var p4 = document.createElement("p");
    p4.textContent = item.sys;

    ds2.append(toFav, priceA, p2, p3, p4);
    d1.append(ds1, ds2);
    sub.append(d1);
  });
}

// Yadulla Code---------------------------------------------------------------------------------------------------------

esentialsYadu();
function esentialsYadu() {
  var outerdiv = document.querySelector(".outerdivY");
  var div1 = document.createElement("div");
  div1.setAttribute("class", "div1");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  div3.setAttribute("class", "div3");
  var div4 = document.createElement("div");
  div4.setAttribute("class", "div4");
  var div5 = document.createElement("div");
  div5.setAttribute("class", "div5");

  var div1_1 = document.createElement("div");
  div1_1.setAttribute("class", "div1Y_1");
  var img1 = document.createElement("img");
  img1.setAttribute("class", "imgY1");
  img1.src =
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw21-pw-sichona-burgundy-onsite-teaser-carousel_tcm209-762154.jpg";
  var div1_2 = document.createElement("div");
  div1_2.setAttribute("class", "div1Y_2");
  var h1 = document.createElement("h4");
  h1.textContent = "HUMANRACE SIČHONA";
  var p1 = document.createElement("p");
  p1.setAttribute("class", "pY1");
  p1.textContent =
    "Informed by Pharrell's vision. Inspired by the Dakota way of life. Created with the best of adidas innovation.";
  var a1 = document.createElement("a");
  a1.setAttribute("class", "aY1");
  a1.textContent = "SHOP NOW";

  var div2_1 = document.createElement("div");
  div2_1.setAttribute("class", "div1Y_1");
  var img2 = document.createElement("img");
  img2.setAttribute("class", "imgY1");
  img2.src =
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/adicolor-FW21-Oct-HP_Teaser-Carousel-3-D-M-T_tcm209-730009.jpg";
  var div2_2 = document.createElement("div");
  div2_2.setAttribute("class", "div1Y_2");
  var h2 = document.createElement("h4");
  h2.textContent = "CONTEMPORARY";
  var p2 = document.createElement("p");
  p2.setAttribute("class", "pY1");
  p2.textContent = "A contemporary take on classic adidas";
  var a2 = document.createElement("a");
  a2.setAttribute("class", "aY1");
  a2.textContent = "SHOP NOW";

  var div3_1 = document.createElement("div");
  div3_1.setAttribute("class", "div1Y_1");
  var img3 = document.createElement("img");
  img3.setAttribute("class", "imgY1");
  img3.src =
    "https://z2photorankmedia-a.akamaihd.net/media/y/9/h/y9hb625/normal.jpg";

  var div3_2 = document.createElement("div");
  div3_2.setAttribute("class", "div1Y_2");
  var h3 = document.createElement("h4");
  h3.textContent = "DON'T STOP 'TIL YOU'RE 99";
  var p3 = document.createElement("p");
  p3.setAttribute("class", "pY1");
  p3.textContent =
    "Meet the first boots born from EA SPORTS FIFA 22 Ultimate Team.";
  var a3 = document.createElement("a");
  a3.setAttribute("class", "aY1");
  a3.textContent = "SHOP MEN";

  var div4_1 = document.createElement("div");
  div4_1.setAttribute("class", "div1Y_1");
  var img4 = document.createElement("img");
  img4.setAttribute("class", "imgY1");
  img4.src =
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/originals-fw21-blue-version-hp-male-teaser-carousel_tcm209-715537.jpg";
  var div4_2 = document.createElement("div");
  div4_2.setAttribute("class", "div1Y_2");
  var h4 = document.createElement("h4");
  h4.textContent = "ELEVATED LIKE NEVER BEOFRE";
  var p4 = document.createElement("p");
  p4.setAttribute("class", "pY1");
  p4.textContent =
    "Blue Version presents a collection of premium sportsware styles.";
  var a4 = document.createElement("a");
  a4.setAttribute("class", "aY1");
  a4.textContent = "SHOP NOW";

  var div5_1 = document.createElement("div");
  div5_1.setAttribute("class", "div1Y_1");
  var img5 = document.createElement("img");
  img5.setAttribute("class", "imgY1");
  img5.src =
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/running-fw21-adizero-september-launch-hp-teaser-carousel-gender-neutral-fallback-d_tcm143-720076_tcm209-758540.jpeg";
  var div5_2 = document.createElement("div");
  div5_2.setAttribute("class", "div1Y_2");
  var h5 = document.createElement("h4");
  h5.textContent = "FAST IS NOT ENOUGH.";
  var p5 = document.createElement("p");
  p5.setAttribute("class", "pY1");
  p5.textContent = "The worls record breaking adizero franchise is here.";
  var a5 = document.createElement("a");
  a5.setAttribute("class", "aY1");
  a5.textContent = "SHOP COLLECTION";

  div1.append(div1_1, div1_2, a1);
  div1_1.append(img1);
  div1_2.append(h1, p1);
  div2.append(div2_1, div2_2, a2);
  div2_1.append(img2);
  div2_2.append(h2, p2);
  div3.append(div3_1, div3_2, a3);
  div3_1.append(img3);
  div3_2.append(h3, p3);
  div4.append(div4_1, div4_2, a4);
  div4_1.append(img4);
  div4_2.append(h4, p4);
  div5.append(div5_1, div5_2, a5);
  div5_1.append(img5);
  div5_2.append(h5, p5);
  outerdiv.append(div1, div2, div3, div4, div5);
  div1.addEventListener("click", function () {
    window.location.href = "product1Page.html";
  });
  div2.addEventListener("click", function () {
    window.location.href = "product1Page.html";
  });
  div3.addEventListener("click", function () {
    window.location.href = "product1Page.html";
  });
  div4.addEventListener("click", function () {
    window.location.href = "product1Page.html";
  });
  div5.addEventListener("click", function () {
    window.location.href = "product1Page.html";
  });
}

// Bhavani Code-------------------------------------------------------------------------

best();
function best() {
  var sub1 = document.getElementById("BAB");
  string.map(function (thing) {
    var d1 = document.createElement("div");
    var ds1 = document.createElement("div");
    var im1 = document.createElement("img");
    im1.setAttribute("src", thing.ime);
    ds1.append(im1);
    var p1 = document.createElement("p");
    p1.textContent = thing.type;
    var p2 = document.createElement("p");
    p2.textContent = thing.sys;
    d1.append(ds1, p1, p2);
    sub1.append(d1);
  });
}

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// mouse enter and exit event
var secnav = document.getElementById("secNav");
var men = document.getElementById("men");
var women = document.getElementById("women");
var kids = document.getElementById("kid");
var sports = document.getElementById("sports");
var coll = document.getElementById("colle");
var brand = document.getElementById("brands");
var outlet = document.getElementById("outlet");

women.addEventListener("mouseleave", function () {
  // var change = document.getElementById("navdivc");
  // change.innerHTML =
  //   '<div class="navhighlight"><a href="">All Men</a> </div>';
  secnav.style.display = "none";
});
kids.addEventListener("mouseleave", function () {
  secnav.style.display = "none";
});
sports.addEventListener("mouseleave", function () {
  secnav.style.display = "none";
});
coll.addEventListener("mouseleave", function () {
  secnav.style.display = "none";
});
brand.addEventListener("mouseleave", function () {
  secnav.style.display = "none";
});
outlet.addEventListener("mouseleave", function () {
  secnav.style.display = "none";
});
women.addEventListener("mouseenter", function () {
  var change = document.getElementById("navdivc");
  change.innerHTML =
    '<div class="navhighlight"><a href="#">All products</a> </div>';
  secnav.style.display = "grid";
});
kids.addEventListener("mouseenter", function () {
  secnav.style.display = "grid";
});
sports.addEventListener("mouseenter", function () {
  secnav.style.display = "grid";
});
coll.addEventListener("mouseenter", function () {
  secnav.style.display = "grid";
});
brand.addEventListener("mouseenter", function () {
  secnav.style.display = "grid";
});
outlet.addEventListener("mouseenter", function () {
  secnav.style.display = "grid";
});
men.addEventListener("mouseenter", function () {
  showmenu();
});
men.addEventListener("mouseleave", function () {
  secnav.style.display = "none";
});
function showmenu() {
  //console.log("here");
  secnav.style.display = "grid";
}
secnav.addEventListener("mouseenter", function () {
  secnav.style.display = "grid";
});
secnav.addEventListener("mouseleave", function () {
  secnav.style.display = "none";
});
// ------------------------------------------------------------------------------------

//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("secNav").style.top = "0";
//     } else {
//       document.getElementById("secNav").style.top = "-130px";
//     }
//     prevScrollpos = currentScrollPos;
//   };

var prevScrollpo = window.pageYOffset;
// var prevScrollpo = 33.599998474121094;
console.log(window.pageYOffset);
console.log(prevScrollpo);
window.onscroll = function () {
  console.log(window.pageYOffset);
  console.log(prevScrollpo);
  var currentScrollPo = window.pageYOffset;
  if (prevScrollpo > 37) {
    if (prevScrollpo > currentScrollPo) {
      document.getElementById("header").style.top = "0";
      document.getElementById("secNav").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-115px";
      document.getElementById("secNav").style.top = "-115px";
    }
  }
  prevScrollpo = currentScrollPo;
};
