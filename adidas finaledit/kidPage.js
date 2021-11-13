var shop = document.getElementById("containerA");
shop.addEventListener("click", shopA);
function shopA() {
  window.location.href = "MenShoes.html";
}

// Bhavani Code-----------------------------------------------------------------------------------------------

var data = [
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d8b19f5114d24d878e72ad2600f615cd_9366/adidas_Forta_Run_x_LEGO(r)_VIDIYOtm_Shoes_Black_G57947_01_standard.jpg",
    price: "₹4,999.00",
    name: "Adidas Forta Run X LEGO VIDIYO",
    type: "Kids Running",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/62bd7dd25f334bfd992bad2600aa7d19_9366/adidas_Forta_Run_x_LEGO(r)_VIDIYOtm_Shoes_Black_G57946_01_standard.jpg",
    price: "₹4,999.00",
    name: "Adidas Forta Run X LEGO VIDIYO",
    type: "Kids Running",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/526c5eda6cdb429a8a45ad2400c382e0_9366/adidas_x_LEGO(r)_Sport_Shoes_Yellow_FZ5439_01_standard.jpg",
    price: "₹6,599.00",
    name: "Adidas x LEGO Sport Shoes",
    type: "Kids Sportwear",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3c4067b13da442efba23ad1e01567a30_9366/adidas_Superstar_x_LEGO(r)_Shoes_White_GW5270_01_standard.jpg",
    price: "₹13,999.00",
    name: "Adidas Sport x LEGO Shoes",
    type: "Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c054a94d7491467d8200ad6500ed58f8_9366/adidas_x_LEGO(r)_Sport_Shoes_Red_H01503_01_standard.jpg",
    price: "₹6,599.00",
    name: "Adidas x LEGO Sport Shoes",
    type: "Kids Running",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/db7b958671b04cd2880dad4e00cabaa7_9366/adidas_x_LEGO(r)_Sport_Shoes_Black_FZ5441_01_standard.jpg",
    price: "₹2,499.00",
    name: "Merimekko Tee with Jacquard 3D Nylon Trefoil Patch",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bf173c5ee1ac436094a7ad0c0047d94f_9366/adidas_x_LEGO(r)_Graphic_Tee_Black_GU8901_01_laydown.jpg",
    price: "₹7,599.00",
    name: "Adicolour Nylon Track Top",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f74e2bccabf044838a86ad2e00fb53bb_9366/adidas_x_LEGO(r)_Sport_Shoes_Blue_FZ5440_01_standard.jpg",
    price: "₹9,999.00",
    name: "Zentic Shoes",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7e16603bc7c64e109acbad4900c10e7a_9366/adidas_x_Classic_LEGO(r)_Tee_Green_H26660_01_laydown.jpg",
    price: "₹2,499.00",
    name: "HER Studio London Tee",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/60712c4ffd24452fbe87acee00dbf61a_9366/adidas_Ultraboost_DNA_x_LEGO(r)_Colors_Shoes_White_H67955_01_standard.jpg",
    price: "₹1,999.00",
    name: "LOUNGEWEAR Adicolor Essentials Tee",
    type: "Women Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ec1032a3aeaa417990c9ad0a01481d2d_9366/adidas_Superstar_x_LEGO(r)_Shoes_White_H03958_01_standard.jpg",
    price: "₹999.00",
    name: "Trefoil Liner Socks 3 Pairs",
    type: "Originals",
    sys: "new",
  },
  {
    img: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0be395b38e4a43519bd1ad26008aecea_9366/adidas_x_LEGO(r)_Sport_Shoes_Black_FZ5438_01_standard.jpg",
    price: "₹9,999.00",
    name: "Zentic Shoes",
    type: "Women Originals",
    sys: "new",
  },
];
//   var array=[
//     {
//         image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3f5b062cf3704796afd6a8880140e406_9366/3mc-vulc-shoes.jpg",
//         name:"SNEAKERS",
//         href:"#",
//     },
//     {
//         image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/cb0ffedfe26647a88948adad0127bcdb_9366/prime-tee.jpg",
//         name:"TOPS",
//         href:"#",
//     },
//     {
//         image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/fd554f6abee440cfa36ead0800fe2474_9366/techfit-long-tights.jpg",
//         name:"TIGHTS",
//         href:"#",
//     },
//     {
//         image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/48d9e23ae7a0488189beabce00e601b2_9366/cold.rdy-cover-up.jpg",
//         name:"SWEATSHIRTS",
//         href:"#",
//     }
// ]
var string = [
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d4cdf1c726e74ceba215aaf5012100ed_9366/F35364_00_plp_standard.jpg",
    type: "X19.3 Firm Groudboots",
    sys: "Performance",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/05b96332380548368476ac8500e3b599_9366/FY0613_00_plp_standard.jpg",
    type: "PREDATOR FREAK.3 FG J.",
    sys: "Performance",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c30626b7bfdf4de69570ac7500fcb77e_9366/GN1471_01_laydown.jpg",
    type: "Adidas Graphic Tee",
    sys: "Performance",
  },
  {
    ime: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/eb103706741c43a6a025ac8100e36bd8_9366/GM7048_01_laydown.jpg",
    type: "Future Icon Graphic Tights",
    sys: "performance",
  },
  {
    ime: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d40829aa884845f1b42bac1d0123c6b0_9366/COLD.RDY_Full-Zip_Hoodie_Gold_GE4784_01_laydown.jpg",
    type: "COLD.RDY FULL-ZIP HOODIE",
    sys: "Originals",
  },
];

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

//---------------nav bar-------------------
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
