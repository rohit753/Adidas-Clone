<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <title>Document</title> -->
    <title>adidas Official Website India | Sportswear</title>
    <link
      rel="icon"
      href="https://www.adidas.co.in/glass/react/16d1049/assets/img/icon-adidas-logo.svg"
      type="image/x-icon"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <style>
      .maindiv {
        width: 80%;
        height: 550px;
        border: 1px solid rgb(0, 0, 0);
        margin: auto;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        gap: 80px;
      }
      .div1 {
        width: 49%;
        height: 100%;
      }
      #email {
        margin-top: 20px;
      }
      #email,
      #password {
        width: 95%;
        height: 50px;
        font-size: 17px;
        padding-left: 15px;
      }
      .box1 > div {
        padding: 10px;
        text-align: right;
      }
      a {
        color: black;
      }
      a:hover {
        background-color: black;
        color: white;
      }
      .span {
        margin-left: 20px;
      }
      .box2 {
        width: 98%;
        height: 50px;
        margin-top: 30px;
      }
      .box2 > div > span {
        font-size: 18px;
      }
      .button > button {
        width: 120px;
        height: 50px;
        background-color: black;
        color: white;
        display: flex;
        gap: 30px;
        margin-top: 10px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
      button:hover {
        color: grey;
      }
      .button2 > button {
        width: 140px;
        height: 50px;
        background-color: black;
        color: white;
        display: flex;
        gap: 30px;
        margin-top: 10px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
      button > div:nth-child(1) {
        padding-top: 15px;
      }
      button > div:nth-child(2) {
        padding-top: 10px;
      }
      .fa {
        font-size: 24px;
      }
      .box3 > input {
        width: 45%;
        height: 40px;
        padding-left: 15px;
        border: 1px solid black;
        color: black;
      }
      .box2-1 div {
        display: inline-block;
        font-size: 18px;
      }
      .box2-2a {
        width: 92%;
        margin-top: 10px;
      }
      .inputbox {
        width: 5%;
      }
      #input1 {
        margin-top: -5px;
        width: 100px;
        height: 25px;
        margin-left: -35px;
        vertical-align: top;
        background-color: black;
      }
      #fb + .fa {
        color: blue;
        right: -90px;
        top: 505px;
        position: absolute;
        text-align: center;
      }
      .a1 {
        text-decoration: underline;
        font-size: 18px;
      }
      h1 {
        font-size: 40px;
      }
      #aaa {
        font-size: 18px;
        color: black;
      }
      #aaa:hover {
        color: white;
      }
      /* //css2// */
      #box2 {
        width: 100%;
        height: 120px;
        background-color: #ede734;
        /* margin-top: -80px; */

        /* text-align: center; */
      }
      #box3 {
        width: 100%;
        height: 300px;
        margin: auto;
      }
      #box4 {
        width: 100%;
        height: 120px;
        margin: auto;
        background-color: #363738;
      }
      #box2 > .box2-1 {
        width: 70%;
        height: 40%;
        margin: auto;
        margin-top: 35px;
        display: flex;
      }
      .box2-2 {
        width: 58%;
        height: 100%;
      }
      .box2-2-1 {
        width: 90%;
        height: 70%;
        margin-left: 20px;
        margin-top: 30px;
      }

      .box2-3 {
        width: 40%;
      }
      .box2-3 > button {
        width: 145px;
        height: 100%;
        background-color: black;
        color: white;
        display: flex;

        gap: 30px;
        margin-top: 30px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
      .box2-3 > button:hover {
        color: grey;
      }
      .box2-3 > button > div:nth-child(1) {
        padding-top: 15px;
      }
      .box2-3 > button > div:nth-child(2) {
        padding-top: 10px;
      }
      .box3-1 {
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
      }
      .tablebox {
        width: 17%;
        height: 80%;
        margin-left: 20px;
        margin-top: 30px;
      }
      ul {
        list-style-type: none;
      }
      ul > li:nth-child(1) {
        font-weight: bolder;
        font-size: 18px;
        margin-bottom: 10px;
      }
      li > a {
        color: black;
      }
      a {
        font-size: 12px;
        color: grey;
        text-decoration: none;
      }
      a:hover,
      .a1:hover {
        text-decoration: underline;
      }
      .box4-1 {
        width: 70%;
        height: 100%;
        margin: auto;
      }
      .box4-2a,
      .box4-2b {
        width: 100%;
        height: 48%;
      }
      .box4-2a {
        display: flex;
      }
      .box4-2a-1 {
        width: 10%;
        height: 40%;
        text-align: center;
        margin-top: 20px;
        display: flex;
      }
      .box4-2a-1 > button {
        border: 0;
        color: #bdbec1;
        font-size: 12px;
        background-color: #363738;
      }
      .box4-2a-2 {
        width: 40%;
        height: 20%;
        justify-content: right;
        display: flex;
        margin-top: 20px;
        /* float: right; */
        margin-left: 48%;
        gap: 20px;
        font-size: 12px;
        color: #bdbec1;
      }
      img {
        width: 15px;
        margin-left: 10px;
      }
      .box4-2b-a {
        width: 30%;
        font-size: 12px;
        margin-top: 20px;
        margin-left: 10px;
        color: #bdbec1;
      }
      .line {
        width: 1px;
        height: 15px;
        background-color: #bdbec1;
      }
      .fa {
        font-size: 24px;
      }
      .box2-2-1 > h1 {
        text-align: center;
        font-size: 30px;
        font-family: AdineuePRO, Helvetica, Arial, sans-serif;
      }
      .material-icons {
        font-size: 20px;
      }
      .material-icons + a {
        font-size: 15px;
        color: black;
        text-decoration: underline;
      }
      .material-icons + a:hover {
        color: white;
      }
      #aaa {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="maindiv">
      <div class="div1">
        <h1>LOG IN</h1>
        <a class="a1">Forgotten Your Password?</a>
        <div class="box1">
          <input type="text" id="email" placeholder="Email *" />
          <div>
            <i class="material-icons">visibility</i>
            <a href="#" id="show">SHOW</a>
          </div>
          <input type="password" id="password" placeholder="Password *" /><br />
        </div>
        <div class="box2">
          <div class="box2-1">
            <div class="inputbox">
              <input type="checkbox" id="input1" />
            </div>
            <div class="box2-2a">
              <span>
                &ensp; Keep me logged in.
                <a href="" id="aaa">More info</a>
              </span>
            </div>
          </div>
        </div>
        <div class="box3">
          <div class="button">
            <button class="login">
              <div>LOG IN</div>
              <div><i class="fa fa-long-arrow-right"></i></div>
            </button>
          </div>
          <p>OR</p>
          <input type="text" id="fb" placeholder="FACEBOOK" />
          <i class="fa fa-facebook-f"></i>
        </div>
      </div>
      <div class="div1">
        <h1>CREATE AN ACCOUNT</h1>
        <div class="box4">
          <div class="button2">
            <button>
              <div>REGISTER</div>
              <div><i class="fa fa-long-arrow-right"></i></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="signup">
      <div id="box2">
        <div class="box2-1">
          <div class="box2-2">
            <div class="box2-2-1">
              <h1>JOIN ADIDAS AND GET 15% OFF</h1>
            </div>
          </div>
          <div class="box2-3">
            <button>
              <div>SIGN UP</div>
              <div><i class="fa fa-long-arrow-right"></i></div>
            </button>
          </div>
        </div>
      </div>
      <div id="box3">
        <div class="box3-1">
          <div class="tablebox">
            <ul>
              <li>PRODUCTS</li>
              <li>
                <a> <div class="a1">Foot Wear</div></a>
              </li>
              <li>
                <a> <div class="a1">Clothing</div></a>
              </li>
              <li>
                <a> <div class="a1">Accessories</div></a>
              </li>
              <li>&ensp;</li>
              <li>
                <a> <div class="a1">Outlet-sales</div></a>
              </li>
              <li>
                <a> <div class="a1">New Arrivals</div></a>
              </li>
              <li>
                <a> <div class="a1">Top Sellers</div></a>
              </li>
            </ul>
          </div>
          <div class="tablebox">
            <ul>
              <li>SPORTS</li>
              <li>
                <a> <div class="a1">Running</div></a>
              </li>
              <li>
                <a> <div class="a1">Football</div></a>
              </li>
              <li>
                <a> <div class="a1">Gym/Training</div></a>
              </li>
              <li>
                <a> <div class="a1">Tennis</div></a>
              </li>
              <li>
                <a> <div class="a1">Outdoor</div></a>
              </li>
              <li>
                <a> <div class="a1">Basketball</div></a>
              </li>
              <li>
                <a> <div class="a1">Swimming</div></a>
              </li>
              <li>
                <a> <div class="a1">Skateboarding</div></a>
              </li>
            </ul>
          </div>
          <div class="tablebox">
            <ul>
              <li>COLLECTIONS</li>
              <li>
                <a> <div class="a1">Ultraboost</div></a>
              </li>
              <li>
                <a> <div class="a1">Superstar</div></a>
              </li>
              <li>
                <a> <div class="a1">NMD</div></a>
              </li>
              <li>
                <a> <div class="a1">Stan Smith</div></a>
              </li>
              <li>
                <a> <div class="a1">Sustainability</div></a>
              </li>
              <li>
                <a> <div class="a1">Predator</div></a>
              </li>
              <li>
                <a> <div class="a1">Parley</div></a>
              </li>
              <li>
                <a> <div class="a1">adicolor</div></a>
              </li>
            </ul>
          </div>
          <div class="tablebox">
            <ul>
              <li>SUPPORT</li>
              <li>
                <a> <div class="a1">Help</div></a>
              </li>
              <li>
                <a> <div class="a1">Customer Services</div></a>
              </li>
              <li>
                <a> <div class="a1">Returns & Exchanges</div></a>
              </li>
              <li>
                <a> <div class="a1">Shipping</div></a>
              </li>
              <li>
                <a> <div class="a1">Order Tracker</div></a>
              </li>
              <li>
                <a> <div class="a1">Store Locator</div></a>
              </li>
              <li>
                <a> <div class="a1">Running Shoe Finder</div></a>
              </li>
              <li>
                <a> <div class="a1">Bra Fit Guide</div></a>
              </li>
            </ul>
          </div>
          <div class="tablebox">
            <ul>
              <li>COMPANY INFO</li>
              <li>
                <a> <div class="a1">About Us</div></a>
              </li>
              <li>
                <a> <div class="a1">adidas stories</div></a>
              </li>
              <li>
                <a> <div class="a1">adidas Apps</div></a>
              </li>
              <li>
                <a> <div class="a1">Entity Details</div></a>
              </li>
              <li>
                <a> <div class="a1">Press</div></a>
              </li>
              <li>
                <a> <div class="a1">Careers</div></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="box4">
        <div class="box4-1">
          <div class="box4-2a">
            <div class="box4-2a-1">
              <div class="img">
                <img
                  src="https://adl-foundation.adidas.com/flags/1-0-0/in.svg"
                  alt=""
                />
              </div>

              <button>India</button>
            </div>
            <div class="box4-2a-2">
              <div>
                <a href="">Privacy Policy</a>
              </div>
              <div class="line"></div>
              <div>
                <a href="">Terms and Conditions</a>
              </div>
              <div class="line"></div>
              <div>
                <a href="">Coockies</a>
              </div>
            </div>
          </div>
          <div class="box4-2b">
            <div class="box4-2b-a">©2021 adidas India Marketing Pvt. Ltd</div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
<script>
  document.querySelector(".login").addEventListener("click", login);
  var regdUsers = JSON.parse(localStorage.getItem("userData"));
  console.log(regdUsers);
  // function show() {
  //   // return false;
  //   this.event.preventDefault();
  // }
  document.getElementById("show").addEventListener(
    "click",
    function () {
      return false;
    },
    false
  );
  var cccc = 0;
  function login() {
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    //if (email !== regdUsers[0].emailAddress || pass !== regdUsers[0].passWord) {
    // alert("wrong credentials");
    console.log(regdUsers);
    // } else {
    for (var i = 0; i < regdUsers.length; i++) {
      cccc++;
      console.log(regdUsers[i].emailAddress, email);
      console.log(regdUsers[i].passWord, pass);
      if (
        regdUsers[i].emailAddress === email &&
        regdUsers[i].passWord === pass
      ) {
        alert("Login Successfull");
        window.location.href = "AddtocartPage.html";

        break;
      }
    }
    if (ccc >= regdUsers.length) alert(" Wrong Credential");
  }

  var show = document.getElementById("show").addEventListener("click", show);
  function show() {
    var password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
</script>
