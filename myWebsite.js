var bar = document.querySelector('.icon-bar ');
var bar_height = bar.offsetHeight;
var logo = document.querySelector(".logo");
logo.style.height=bar_height+"px";
var width = window.innerWidth;
var height = window.innerHeight;

let slideIndex = 0;
showSlides();

function showSlides() {
let slides = document.getElementsByClassName("slide");

for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slideIndex++;
if (slideIndex > slides.length) {
    slideIndex = 1;
}

slides[slideIndex -1].style.display = "block";
setTimeout(showSlides, 3000); 
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


function openInfo(evt, InfoName) {

  var i, tabcontent, tablinks;


  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  document.getElementById(InfoName).style.display = "block";
  evt.currentTarget.className += " active";
}


