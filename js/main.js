let header = document.getElementById("header");
let logo = document.querySelector(".logo h1");
let items = document.querySelectorAll(".nav a");
let nav_menue = document.querySelector(".nav ");
let baricon = document.getElementById("bar-icon");
let menue = document.querySelector(".menue");
let menueitems = document.querySelectorAll(".menue .card");
let teamsec = document.querySelector(".team");
let experts = document.querySelectorAll(".team .card");

baricon.addEventListener("click", () => {
nav_menue.classList.toggle("active");
});

window.onscroll = function () {
    if (window.scrollY >= menue.offsetTop - 300) {
        menueitems.forEach((e) => {
            e.classList.add("show");
        })
    }
};

