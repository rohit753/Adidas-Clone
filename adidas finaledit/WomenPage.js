var shop = document.getElementById("containerA");
shop.addEventListener("click", shopA);
function shopA() {
  window.location.href = "MenShoes.html";
}

// Bhavani Code-----------------------------------------------------------------------------------------------

var data = [
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3c4067b13da442efba23ad1e01567a30_9366/adidas_Superstar_x_LEGO(r)_Shoes_White_GW5270_01_standard.jpg",
    price: "₹13,999.00",
    name: "Adidas Superstar x LEGO Shoes",
    type: "Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/08965b3d5dd9457e9a8aac840039672b_9366/Adicolor_Classics_Trefoil_Tee_Black_GN2896_21_model.jpg",
    price: "₹1,999.00",
    name: "Adicolour ClassicsTrefoil Tee",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d7246f77c0a849a0b929ad7500f52306_9366/Supercourt_XX_Shoes_White_H01523_01_standard.jpg",
    price: "₹8,999.00",
    name: "Supercourt XX Shoes",
    type: "Women Lifestyle",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/20c0a73f8c434ad58e43a888014104e0_9366/3MC_Vulc_Shoes_Black_B22713_01_standard.jpg",
    price: "₹8,999.00",
    name: "HER Studio London Stan smith",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/80bf79ade1684ee5a573ad9400e6504e_9366/Supercourt_XX_Shoes_White_H01522_01_standard.jpg",
    price: "₹8,999.00",
    name: "Supercourt XX Shoes",
    type: "Women Lifestyle",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5b7338bf0e224242bc40ad4900e91106_9366/Marimekko_Tee_with_Jacquard_3D_Nylon_Trefoil_Patch_Green_H20205_21_model.jpg",
    price: "₹2,499.00",
    name: "Merimekko Tee with Jacquard 3D Nylon Trefoil Patch",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/49571736fc7e4bca878ead12014c2bcc_9366/Adicolor_Nylon_Track_Top_White_H06697_21_model.jpg",
    price: "₹7,599.00",
    name: "Adicolour Nylon Track Top",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f6e2b0816c6e4836bc14ad0f011e17a6_9366/Zentic_Shoes_White_GX0421_01_standard.jpg",
    price: "₹9,999.00",
    name: "Zentic Shoes",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1ec8039777894954bbc2ad1600f1230a_9366/HER_Studio_London_Tee_Black_H20460_21_model.jpg",
    price: "₹2,499.00",
    name: "HER Studio London Tee",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/508bc09f960e41879f6aad7400cad79d_9366/LOUNGEWEAR_Adicolor_Essentials_Tee_Black_H06649_21_model.jpg",
    price: "₹1,999.00",
    name: "LOUNGEWEAR Adicolor Essentials Tee",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ce65c5e670364598afb3aaab00ff002c_9366/Trefoil_Liner_Socks_3_Pairs_White_FT8524_03_standard.jpg",
    price: "₹999.00",
    name: "Trefoil Liner Socks 3 Pairs",
    type: "Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2f25ff6d7084c699b83acf400a1a7d2_9366/Zentic_Shoes_Yellow_GZ6983_01_standard.jpg",
    price: "₹9,999.00",
    name: "Zentic Shoes",
    type: "Women Originals",
    sys: "new",
  },
];
var array = [
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3f5b062cf3704796afd6a8880140e406_9366/3mc-vulc-shoes.jpg",
    name: "SNEAKERS",
    href: "#",
  },
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/cb0ffedfe26647a88948adad0127bcdb_9366/prime-tee.jpg",
    name: "TOPS",
    href: "#",
  },
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/fd554f6abee440cfa36ead0800fe2474_9366/techfit-long-tights.jpg",
    name: "TIGHTS",
    href: "#",
  },
  {
    image:
      "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/48d9e23ae7a0488189beabce00e601b2_9366/cold.rdy-cover-up.jpg",
    name: "SWEATSHIRTS",
    href: "#",
  },
];
var string = [
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48e018e43541465a96b4ad7300f81ad0_9366/GU0992_00_plp_standard.jpg",
    type: "Marimekko Unikko Allover-Print Backpack",
    sys: "Originals",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3af2b61640074dba9eb2ad100114318d_9366/H22850_21_model.jpg",
    type: "Adicolor Shattered Trefoil Tights",
    sys: "Originals",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bdc3c80cfb3e45e6af54ad7a00893891_9366/GU0884_00_plp_standard.jpg",
    type: "Marimekko Unikko Allover-Print Duffel Small",
    sys: "Performance",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/91cfc3eec99b4667b6acab4900f8d07e_9366/FS9830_000_plp_model.jpg",
    type: "Own the Run Tee ",
    sys: "performance",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/834a856e8f4d42dfbb8dac660140b554_9366/GP6780_000_plp_model.jpg",
    type: "Ultimate Bra",
    sys: "performance",
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
    a1.setAttribute("class", "ancerB");
    a1.textContent = i.name;
    a1.setAttribute("href", i.href);
    divsub1.append(a1);
    div1.append(img1, divsub1);
    main.append(div1);
    function href() {
      window.location.href = i.href;
    }
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
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/originals-fw21-blue-version-glp-women-teaser-carousel_tcm209-715555.jpg";

  var div3_2 = document.createElement("div");
  div3_2.setAttribute("class", "div1Y_2");
  var h3 = document.createElement("h4");
  h3.textContent = "LEGACY OF A COLOUR";
  var p3 = document.createElement("p");
  p3.setAttribute("class", "pY1");
  p3.textContent =
    "Blue Version pays tribute to bluebird, the most iconic colour of adidas Originals.";
  var a3 = document.createElement("a");
  a3.setAttribute("class", "aY1");
  a3.textContent = "SHOP MEN";

  var div4_1 = document.createElement("div");
  div4_1.setAttribute("class", "div1Y_1");
  var img4 = document.createElement("img");
  img4.setAttribute("class", "imgY1");
  img4.src =
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw21_stay_in_play_hp_teaser_carousel_tcm209-757909.jpg";
  var div4_2 = document.createElement("div");
  div4_2.setAttribute("class", "div1Y_2");
  var h4 = document.createElement("h4");
  h4.textContent = "STAY IN PLAY";
  var p4 = document.createElement("p");
  p4.setAttribute("class", "pY1");
  p4.textContent = "The new Techfit Period Proof Tights.";
  var a4 = document.createElement("a");
  a4.setAttribute("class", "aY1");
  a4.textContent = "SHOP NOW";

  var div5_1 = document.createElement("div");
  div5_1.setAttribute("class", "div1Y_1");
  var img5 = document.createElement("img");
  img5.setAttribute("class", "imgY1");
  img5.src =
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/Training-SS21-adidasmarimekkocollection-ss21-launch-wglp-teaser-carousel-d_tcm209-675252.jpg";
  var div5_2 = document.createElement("div");
  div5_2.setAttribute("class", "div1Y_2");
  var h5 = document.createElement("h4");
  h5.textContent = "ADIDAS X MARIMEKKO";
  var p5 = document.createElement("p");
  p5.setAttribute("class", "pY1");
  p5.textContent = "Support your every move Adidas X Merimekko colla";
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
    window.location.href = "checkout.html";
  });
  div2.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
  div3.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
  div4.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
  div5.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
}

// Bhavani Code-------------------------------------------------------------------------
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

// ------------------------------------nav bar integration------------------------------------------
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
