<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+material-icons+outlined"
  />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
    rel="stylesheet"
  />
  <title>adidas Official Website India | Sportswear</title>
  <link rel = "icon" href = "https://www.adidas.co.in/glass/react/16d1049/assets/img/icon-adidas-logo.svg" 
     type = "image/x-icon"> 
    <!-- <title>CART</title> -->
    <script src="https://use.fontawesome.com/dbccd95f0f.js"></script>
    <style>
      * {
        padding: 0;
        margin: 0;
        /* font-family: AdihausDIN, Helvetica, Arial, sans-serif; */
      }
      nav {
        display: flex;
        flex-direction: column;
      }
      a > p:hover {
        color: black;
      }
      a:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: rgb(236, 235, 235);
        transition: 0.266s;
        /* padding-right: 1.5px; */
        /* padding-left: .5px; */
        color: black;
      }
      a {
        text-decoration-line: none;
        color: black;
        /* padding: 2.5px; */
        /* background-color: white; */
      }

      header {
        position: fixed;
        width: 101%;
        background-color: white;
        margin: 0;
        padding: 0;
        margin-left: -0.5%;
        margin-bottom: 300px;
        border-radius: 10px;
        z-index: 99;
        transition: top 0.8s;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
          rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      }
      #navDiv1 > a:hover {
        text-decoration-line: underline;
      }
      #navDiv1 > a {
        text-decoration-style: none;
        color: white;
        text-decoration-line: none;
        padding: 4px;
        font-size: smaller;
        font-weight: bolder;
        letter-spacing: 2px;
        font-size: 11px;
      }
      #navDiv1 {
        padding: 4.5px;
        display: flex;
        flex-direction: row;
        background-color: black;
        color: white;
        justify-content: space-around;
      }
      #navDiv2 {
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      #navDiv2 > a > img {
        width: 70px;
        height: 47px;
        padding: 16px;
      }
      /* #fav1 {
        display: inline-block;
        vertical-align: top;
      } */
      #fav {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        gap: 45px;
        margin-left: 50px;
        transition: top 1s;
      }
      #bag {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
      }
      #bag1,
      #bag2 {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      #bag1 {
        margin-top: 5px;
      }
      #bag2 {
        margin-top: 20px;
      }
      #mainContent {
        /* margin-top: 300px; */
        padding-top: 200px;
        width: 20%;
      }
      #secNav {
        height: 300px;
        width: 100%;
        position: fixed;
        background-color: rgb(255, 255, 255);
        margin-top: 110px;
        display: none;
        /* display: block; */
        transition: top 0.8s;
        z-index: 99;
      }
      #navdiva {
        padding: 30px;
        grid-area: a;
        border: rgb(235, 235, 235) solid 0.5px;
        padding-left: 150px;
        background-color: white;
      }
      #navdivb {
        padding: 30px;
        grid-area: b;
        display: flex;
        gap: 140px;
        border: rgb(228, 228, 228) solid 0.5px;
        padding-left: 100px;
        background-color: white;
      }
      #navdivc {
        grid-area: c;
        border: rgb(231, 231, 231) solid 0.5px;
        padding-left: 150px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
          rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
          rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      }
      #navdivd {
        grid-area: d;
        border: rgb(231, 231, 231) solid 0.5px;
        padding-left: 96px;
        display: flex;
        gap: 175px;
        background-color: white;
        row-gap: 40px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
          rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
          rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      }

      #secNav {
        /* transition: 2s; */
        display: grid;
        grid-template-areas: "a b b b b" "a b b b b" "a b b b b" "a b b b b" "c d d d d";
        display: none;
        /* border: blue solid; */
      }
      .navhighlight {
        /* font-size: 20px; */
        font-weight: bolder;
        margin: 10px;
        margin-left: 0;
      }
      #navdiva > div {
        padding: 4px;
      }
      #navdivb > div > div {
        padding: 4px;
      }

      input {
        vertical-align: top;
      }
      #contner {
        width: 75%;
        margin: auto;
        /* font-style: italic; */
        font-family: AdihausDIN, Helvetica, Arial, sans-serif;
      }
      #Of {
        border: 1px solid rgb(255, 255, 255);
        width: 60%;
        display: inline-block;
        margin-right: 3%;
      }
      #flat {
        border: 1px solid rgb(255, 255, 255);
        width: 94%;
        height: 100px;
        padding: 20px;
        background-color: #f5f5e5;
      }
      #Order {
        margin-top: 100px;
        width: 30%;
        display: inline-block;
        border: 1px solid rgb(255, 255, 255);
        vertical-align: top;
      }
      #flat > a {
        color: black;
        letter-spacing: 1px;
      }
      #flat > a:hover {
        color: white;
        background-color: black;
      }
      #addToBag > div {
        display: inline-block;
        margin-top: 3%;
        border: 1px solid black;
        width: 100%;
      }
      #addToBag > div > div {
        display: inline-block;
        vertical-align: top;
      }
      #addToBag > div > div:nth-child(1) {
        width: 30%;
        height: 100%;
        margin-right: 2%;
      }
      #addToBag > div > div:nth-child(2) {
        width: 60%;
        height: 100%;
        margin-right: 2%;
      }
      #addToBag > div > div > img {
        width: 100%;
        height: 100%;
      }
      #fle > select {
        width: 15%;
        height: 35px;
        padding: 10px;
      }
      #Order > button {
        width: 100%;
        height: 50px;
        box-shadow: rgba(12, 10, 10, 0.15) 5px 5px;
        background-color: black;
        color: white;
        text-align: left;
        font-size: 15px;
      }
      #button {
        width: 50%;
        height: 50px;
        box-shadow: rgba(12, 10, 10, 0.15) 5px 5px;
        background-color: black;
        color: white;
        text-align: left;
        font-size: 15px;
        margin-top: 40px;
        margin-bottom: 10px;
      }
      #button>div:nth-child(1)
      {
        width:45%;
        display:inline-block;
      }
      #button>div:nth-child(2){
        width:45%;
        display: inline-block;
        text-align: right;
      }
      #Order > button:hover,
      #button:hover {
        color: gray;
      }
      #Promo {
        width: 90%;
        margin-top: 100px;
        position: relative;
      }
      #EP {
        min-width: 80%;
        padding: 20px;
        font-size: 20px;
      }
      #Promo > label {
        position: absolute;
        left: 0;
        padding: 20px;
        transition: transform 0.2s ease-in-out;
      }
      #EP:focus + label,
      #EP:not(:placeholder-shown) + label {
        transform: translateY(-2.5em);
        font-size: 10px;
        background-color: white;
      }
      #Total {
        letter-spacing: 1px;
        margin-bottom: 3%;
      }
      #OSUM {
        width: 100%;
        margin-top: 10%;
        border: 1px solid rgb(172, 170, 170);
      }
      #OSUM > p:nth-child(1) {
        font-size: 20px;
      }
      #NEED {
        margin-top: 10%;
        line-height: 35px;
        margin-bottom: 10%;
        letter-spacing: 1px;
      }
      #NEED > a {
        color: black;
      }
      #NEED > a:hover {
        background-color: black;
        color: white;
      }
      #bill {
        width: 100%;
        /* border: 1px solid rgb(172, 170, 170); */
      }
      #bill > div:nth-child(1) {
        width: 48%;
        display: inline-block;
        /* border: 1px solid rgb(124, 124, 124); */
      }
      #bill > div:nth-child(2) {
        width: 48%;
        display: inline-block;
        text-align: right;
        /* border: 1px solid rgb(255, 255, 255); */
        vertical-align: top;
      }
      #Obutton>div:nth-child(1){
        width: 45%;
        display: inline-block;
      }
      #Obutton>div:nth-child(2){
        width: 45%;
        display: inline-block;
        text-align: right;
      }
      #adinavdiv {
        padding-top: 140px;
      }
      @media only screen and (max-width:1250px){
        #EP{
          max-width: 80%;
        }
      }
      @media only screen and (max-width:1087px){
        #EP{
          min-width: 80%;
        }
        #label{
          margin-top: -30%;
          width: 100%;
        }
      }
    </style>
  </head >
  <body>
    <header id="header">
    <nav id="navbar">
      <div id="navDiv1">
        <a href="#"><p>EXTRA 15% OFF*</p></a
        ><a href="#"><p>10% CASHBACK ON HDFC CREDIT/DEBIT CARDS</p></a
        ><a href="#"><p>FREE RETURNS</p></a>
      </div>
      <div id="navDiv2">
        <a href=""><img src="Adidas_Logo.svg.png" alt="" /></a>
        <div id="fav">
          <a id="men"><p>MEN</p></a>
          <a id="women"><p>WOMEN</p></a>
          <a id="kid"><p>KIDS</p></a>
          <a id="sports"><p>SPORTS</p></a>
          <a id="brands"><p>BRANDS</p></a>
          <a id="colle"><p>COLLECTIONS</p></a>
          <a id="outlet"><p>OUTLET</p></a>
        </div>
        <div id="bag">
          <div id="bag1">
            <a href=""><p>help</p></a>
            <a href=""><p>return</p></a>
            <a href=""><p>order tracking</p></a>
            <a href=""><p>sign up</p></a>
            <a href=""><p>log in</p></a>
          </div>
          <div id="bag2">
            <input type="text" />
            <a href=""><span class="material-icons-outlined">search</span></a>
            <a href=""
              ><span class="material-icons-outlined"> favorite </span></a
            >
            <!-- <a href=""
            ><span id="fav" class="material-icons-outlined">
              favorite_border
            </span></a
          > -->
            <a href=""
              ><span class="material-icons-outlined"> shopping_bag </span></a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div id="secNav">
    <div id="navdiva">
      <div class="navhighlight">Featured</div>
      <div class="nava"><a href="#">New Arrival</a></div>
      <div class="nava"><a href="#">Best Seller</a></div>
      <div class="nava"><a href="#">Original</a></div>
      <div class="nava"><a href="#">Manchester Utd</a></div>
      <div class="nava"><a href="#">Ulta Boost</a></div>
      <div class="nava"><a href="#">4DFWD</a></div>
      <div class="nava"><a href="#">Stan Smith</a></div>
      <div class="nava"><a href="#">Outlet</a></div>
      <!-- <div class="nava">FootBall</div> -->
      <!-- <div class="nava">FootBall</div> -->
      <!-- <div class="nava">FootBall</div> -->
    </div>
    <div id="navdivb">
      <div>
        <div class="navhighlight">Footwear</div>
        <div class="navb"><a href="#">Running</a></div>
        <div class="navb"><a href="#">Sneakers</a></div>
        <div class="navb"><a href="#">Originals</a></div>
        <div class="navb"><a href="#">Slides and Sandals</a></div>
        <div class="navb"><a href="#">FootBall</a></div>
        <div class="navb"><a href="#">Gym & Training</a></div>
        <div class="navb"><a href="#">Basket Ball</a></div>
        <div class="navb"><a href="#">Tennis</a></div>
        <div class="navb"><a href="#">Skates</a></div>
        <div class="navb"><a href="#">Swim</a></div>
        <div class="navb"><a href="#">Cricket</a></div>
        <!-- <div class="navb"><a href="#"></a></div> -->
      </div>
      <div>
        <div class="navhighlight">Clothing</div>
        <div class="navb2"><a href="#">T-shirts</a></div>
        <div class="navb2"><a href="#">Joggers & Track Pants</a></div>
        <div class="navb2"><a href="#">Hoodies</a></div>
        <div class="navb2"><a href="#">Jackets</a></div>
        <div class="navb2"><a href="#">Football Jersy</a></div>
        <div class="navb2"><a href="#">Originals</a></div>
        <div class="navb2"><a href="#">Tracksuit</a></div>
        <div class="navb2"><a href="#">Shorts</a></div>
        <div class="navb2"><a href="#">Swimmers</a></div>
        <!-- <div class="navb2"><a href="#"></a></div> -->
        <!-- <div class="navb2"><a href="#"></a></div> -->
      </div>
      <div>
        <div class="navhighlight">Accessories</div>
        <div class="navb3"><a href="#">Face Cover</a></div>
        <div class="navb3"><a href="#">Socks</a></div>
        <div class="navb3"><a href="#">All Bags</a></div>
        <div class="navb3"><a href="#">BackPacks</a></div>
        <div class="navb3"><a href="#">Gym & Training</a></div>
        <div class="navb3"><a href="#">Head Wear</a></div>
        <div class="navb3"><a href="#">Gloves</a></div>
        <!-- <div class="navb3"><a href="#"></a></div>
        <div class="navb3"><a href="#"></a></div>
        <div class="navb3"><a href="#"></a></div>
        <div class="navb3"><a href="#"></a></div> -->
      </div>
      <div>
        <div class="navhighlight">Sports</div>
        <div class="navb4"><a href="#">Running</a></div>
        <div class="navb4"><a href="#">Gym & Training</a></div>
        <div class="navb4"><a href="#">Football</a></div>
        <div class="navb4"><a href="#">Tennis</a></div>
        <div class="navb4"><a href="#">Basket Ball</a></div>
        <div class="navb4"><a href="#">Hiking & outdoor</a></div>
        <div class="navb4"><a href="#">Swim</a></div>
        <div class="navb4"><a href="#">Skate Boarding</a></div>
        <!-- <div class="navb4"><a href="#"></a></div>
        <div class="navb4"><a href="#"></a></div>
        <div class="navb4"><a href="#"></a></div> -->
      </div>
    </div>
    <div id="navdivc">
      <div class="navhighlight"><a href="#">All Featured</a></div>
    </div>
    <div id="navdivd">
      <div class="navhighlight"><a href="#">All Footwear</a></div>
      <div class="navhighlight"><a href="#">All Clothing</a></div>
      <div class="navhighlight"><a href="#">All Accessories</a></div>
      <div class="navhighlight"><a href="#">All Products</a></div>
    </div>
  </div>
  <div id="adinavdiv"></div>
  <div id="contner">
    <div id="Of">
      <h1>YOUR BAG</h1>
      <div id="Total"></div>
      <div id="flat">
        <p><b>FLAT 40% OFF AND MORE.</b></p>
        <p>Extra 15% on orders above INR 3999.</p>
        <a href="">SHOP NOW</a>
      </div>
      <div id="addToBag"></div>
      <button id="button" onclick="check()">
        <div>CHECKOUT</div>
        <div><i class="fa fa-long-arrow-right fa-fw fa-2x" aria-hidden="true"></i></div>
      </button>
    </div>
    <div id="Order">
      <button id="Obutton" onclick="check()">
        <div>CHECKOUT</div>
        <div><i class="fa fa-long-arrow-right fa-fw fa-2x" aria-hidden="true"></i></div>
      </button>

      <div id="OSUM">
        <p><b>ORDER SUMMARY</b></p>
        <div id="bill"></div>
      </div>
      <div id="Promo">
        <input id="EP" type="text" placeholder=" " />
        <label id="label"for="EP">Enter Promo Code </label>
      </div>
      <div id="NEED">
        <p>NEED HELP?</p>
        <a href="">Delivery</a><br />
        <a href="">Return & Refund</a><br />
        <a href="">Ordering & Payment</a><br />
        <a href="">Promotions & Vouchers</a><br />
      </div>
      <div>
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/visa-master-rupay-cd_tcm209-732258.png"
          alt=""
        />
      </div>
    </div>
    </div>
  </body>
</html>
<script>
  var cartList = JSON.parse(localStorage.getItem("cartlistt")) || [];
  var count = 0;
  display(cartList);
  console.log(cartList);
  function display(cartList) {
    document.getElementById("addToBag").textContent = "";
    var su1 = document.getElementById("addToBag");
    cartList.map(function (item, index) {
      count++;
      var div = document.createElement("div");
      var di1 = document.createElement("div");
      var di2 = document.createElement("div");
      var sel = document.createElement("select");
      var op1 = document.createElement("option");
      op1.textContent = "1";
      var op2 = document.createElement("option");
      op2.textContent = "2";
      var op3 = document.createElement("option");
      op3.textContent = "3";
      var op4 = document.createElement("option");
      op4.textContent = "4";
      var op5 = document.createElement("option");
      op5.textContent = "5";
      var op6 = document.createElement("option");
      op6.textContent = "6";
      var op7 = document.createElement("option");
      op7.textContent = "7";
      var op8 = document.createElement("option");
      op8.textContent = "8";
      var op9 = document.createElement("option");
      op9.textContent = "9";
      var op10 = document.createElement("option");
      op10.textContent = "10";
      sel.append(op1, op2, op3, op4, op5, op6, op7, op8, op9, op10);
      di2.setAttribute("id", "fle");
      var img = document.createElement("img");
      var b1 = document.createElement("div");
      var b2 = document.createElement("div");
      b1.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
      b2.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;
      img.setAttribute("src", item.img);
      di1.append(img);
      var p = document.createElement("p");
      p.textContent = item.type;
      var p1 = document.createElement("p");
      p1.textContent = item.mrp;
      di2.append(p, p1, b1, b2, sel);
      div.append(di1, di2);
      su1.append(div);
      b1.addEventListener("click", function () {
        remove(item, index);
      });
      b2.addEventListener("click", function () {
        b2.style.backgroundColor = "black";
        addfav(item);
      });
    });
  }
  function remove(item, index) {
    cartList.splice(index, 1);
    sum = sum - item.mrp;
    count = count - 1;
    bill();
    document.getElementById(
      "Total"
    ).innerHTML = `TOTAL (${count} items) <b>₹${sum}<b/>`;
    localStorage.setItem("cartlistt", JSON.stringify(cartList));
    display(cartList);
    // console.log(cartList);
  }
  function addfav(item) {
    console.log(item);
  }
  function check() {
    window.location.href = "shipping_Add.html";
  }
  var sum = cartList.reduce(function (acc, cv) {
    return acc + Number(cv.mrp);
  }, 0);
  if (count > 1) {
    document.getElementById(
      "Total"
    ).innerHTML = `TOTAL (${count} items) <b>₹${sum}<b/>`;
  } else {
    document.getElementById(
      "Total"
    ).innerHTML = `TOTAL (${count} item) <b>₹${sum}<b/>`;
  }
  bill();
  function bill() {
    document.getElementById("bill").textContent = "";
    var sub = document.getElementById("bill");
    var D1 = document.createElement("div");
    var D2 = document.createElement("div");
    var P1 = document.createElement("p");
    var P12=document.createElement("p");
    P1.innerHTML = "TOTAL";
    var P13=document.createElement("p");
    P13.textContent="(inclusive of all taxes)"
    // P1.style.fontWeight="bold"
    P12.textContent="Delivery";
    var P2 = document.createElement("p");
    var P22=document.createElement("p");
    P2.innerHTML = `₹${sum}`;
    P2.style.fontWeight="bold"
    P22.textContent="FREE"
    D1.append(P12,P1,P13);
    D2.append(P22,P2);
    sub.append(D1, D2);
  }
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
  var list={
    total:sum,
    delivery:"FREE",
  }
  localStorage.setItem("PAY",JSON.stringify(list));
</script>
