const hamburger = document.querySelector(".bars-icon");
const portfolioNavbar = document.querySelector(".portfolio-navbar");
const sliderContent = document.querySelector(".slider-content");
const anchorTags = portfolioNavbar.querySelectorAll("a");
const header = document.getElementById("header");

//toggle the hamburger on clicking
hamburger.addEventListener("click", function() {
  portfolioNavbar.classList.toggle("show");
  sliderContent.classList.toggle("show");
})

//close the hamburger on clicking the dropdown items
anchorTags.forEach(function(anchor) {
    anchor.addEventListener("click", function() {
        portfolioNavbar.classList.remove("show");
        sliderContent.classList.remove("show");
    });
});

//fix the header position on scroll
window.onscroll = function() {fixHeader()};
var sticky = header.offsetTop;

function fixHeader() {
  if (window.pageYOffset > sticky)
    header.classList.add("sticky");
  else
    header.classList.remove("sticky");
}