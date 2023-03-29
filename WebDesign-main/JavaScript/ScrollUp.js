window.addEventListener("load",function(){
    Upbutton = document.getElementById("UpBtn");
    window.onscroll = function() {scrollFunction()};
});
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    Upbutton.style.display = "block";
  } else {
    Upbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}