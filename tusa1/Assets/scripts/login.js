
var CryptoJS = require("crypto-js");


function calchash() {
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;

    console.log(CryptoJS.HmacSHA1("Message", "Key"));
    timestamp = new Date().getTime();
    hash = login + ":" + CryptoJS.SHA1(CryptoJS.MD5(password).toString() + timestamp) + ":" + timestamp;
    return hash;


}