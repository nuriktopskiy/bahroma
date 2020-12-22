// window.onscroll = function() {headerChange()};

// var leftImageBox = document.getElementById("leftImageBox");
// var topnav = document.getElementById("main");
// var footer = document.getElementById("footer");
// var rightBox = document.getElementById("rightBox");
// var stickyTopnav = topnav.offsetTop;
// var stickyFooter = footer.offsetTop;

// function headerChange() {
//   if (window.pageYOffset >= stickyTopnav) {
//     leftImageBox.classList.add("LScrolled");
//     rightBox.classList.add("RScrolled");
//   }
//   else if(stickyFooter <= stickyTopnav){
//   	leftImageBox.classList.remove("LScrolled");
//     rightBox.classList.remove("RScrolled");
//   }
//   else{
//     leftImageBox.classList.remove("LScrolled");
//     rightBox.classList.remove("RScrolled");
//   }
// }

$(function(){
if ( $(window).width() > 839 ) {
 var topPos = $('#leftImageBox').offset().top;
  $(window).scroll(function() {
  var top = $(document).scrollTop(),
      pip = $('#footer').offset().top,
      topnav = $('#main').offset().top,
      height = $('#leftImageBox').outerHeight() + 100;
  if (top + 69 > topPos && top < pip - height) {$('#leftImageBox').addClass('LScrolled').removeAttr("style");}
  else if (top > pip - height) {$('#leftImageBox').removeClass('LScrolled').css({'position':'absolute','bottom':'0'});}
  else {$('#leftImageBox').removeClass('LScrolled');}
  });
}
});