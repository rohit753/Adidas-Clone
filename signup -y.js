<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <style>
      body {
        width: 55%;
        height: 600px;
        border: 1px solid rgb(0, 0, 0);
        margin: auto;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 70px;
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
        height: 130px;
      }
      .box2 > div > span {
        font-size: 18px;
      }
      button {
        width: 150px;
        height: 50px;
        background-color: black;
        color: white;
        display: flex;

        gap: 30px;
        margin-top: 30px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
      button:hover {
        color: grey;
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
        /* margin-top: 20px; */
      }
      .box2-2 div {
        display: inline-block;
        font-size: 18px;
      }
      .box2-2a {
        width: 92%;
        margin-top: 20px;
      }
      .inputbox {
        width: 5%;
      }
      .inputbox > input {
        width: 100px;
        height: 25px;
        margin-left: -35px;
        vertical-align: top;
      }
      #input1 {
        margin-top: -40px;
        border: 2px solid black;
      }
      #input2 {
        margin-top: -5px;
        border: 2px solid black;
      }
      input:checkbox {
        color: black;
      }
      #fb + .fa {
        color: blue;
        right: 45px;
        top: 620px;
        z-index: 1;
        position: absolute;
        text-align: center;
        /* justify-content: center; */
        width: 100%;
        height: 100%;
        border-radius: 50%;
        /* display: flex; */
      }
      .material-icons {
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <h1>CREATE YOUR ACCOUNT</h1>
    <p>Sign up now and get 15% off your first order.</p>
    <div class="box1">
      <input type="text" name="" id="email" placeholder="Email *" />
      <div>
        <i class="material-icons">visibility</i>
        <a href="#" id="show">SHOW</a>
      </div>
      <input
        type="password"
        name=""
        id="password"
        placeholder="Password *"
      /><br />
      <span class="span"
        >Please use 8+ characters, with at least 1 number and a mixture of big
        and small letters</span
      >
    </div>
    <div class="box2">
      <div class="box2-1">
        <div class="inputbox">
          <input type="checkbox" id="input1" />
        </div>

        <div class="box2-2a">
          <span>
            I have read and agree to the Terms and Privacy Policy. I would like
            to stay up to date with adidas. I agree to receive personalised
            email marketing messages from adidas India Marketing Pvt. Ltd.
            <a href="">Read more</a>
          </span>
        </div>
      </div>
      <div class="box2-2">
        <div class="inputbox">
          <input type="checkbox" id="input2" />
        </div>
        <div class="box2-2a">
          <span>Yes, I am over 18 years old *</span>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="button">
        <button class="register">
          <div>REGISTER</div>
          <div><i class="fa fa-long-arrow-right"></i></div>
        </button>
      </div>
      <p>OR</p>
      <input type="text" id="fb" placeholder="FACEBOOK" />
      <i class="fa fa-facebook-f"></i>
    </div>
  </body>
</html>
<script>
  document.querySelector(".register").addEventListener("click", register);
  var user = JSON.parse(localStorage.getItem("userData")) || [];
  function register() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var userCredentials = {
      emailAddress: email,
      passWord: pass,
    };
    user.push(userCredentials);
    localStorage.setItem("userData", JSON.stringify(user));
    if (email.length == 0 && pass.length == 0) {
      alert("please give correct crendentials");
    } else {
      alert("Ridirecting to Login Page");
      window.location.href = "login.html";
    }
  }
  document.getElementById("show").addEventListener(
    "click",
    function () {
      return false;
    },
    false
  );
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
